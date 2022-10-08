const fs = require('fs');
const chokidar = require('chokidar');
const { on } = require('events');
const { TypescriptParser, InterfaceDeclaration, ClassDeclaration, GetterDeclaration, SetterDeclaration, DeclarationVisibility } = require('typescript-parser');
const Fs = require('@supercharge/Fs');

const sourceFileextension = '.component.html';
const outputFileextension = '.component.g.html';

function escapeHtml(html) {
    return html.replace(/[&<>'"{}]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;',
            '{': '&#123; ',
            '}': ' &#125;'
        }[tag])).replace(/ /g, '&nbsp;');
}

Array.prototype.groupBy = function(selector) {
    const result = {};
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        const key = selector(element, index, this);
        if (result[key]) {
            result[key].push(element);
        } else {
            result[key] = [element];
        }
    }
    return Object.values(result);
};

async function getDocumentationAsync(file) {
    const parser = new TypescriptParser();
    const filename = Fs.filename(file);
    const tmp = filename.split('.')[0].split('-');
    tmp.splice(-1);
    const name = tmp.join('-');

    const split = file.split('\\');
    const indexOfPage = split.indexOf('pages');
    const newSourceFolderPath = './projects/ngfds/src/lib/' +
        split.slice(indexOfPage + 1)
            .map(x => x.split('-page').join(''))
            .slice(0, -1)
            .join('/');

    const extensions = ['.component.ts', '.directive.ts', '.service.ts'];
    let sourceCode;
    let sourceFilepath;
    for (const ext of extensions) {
        sourceFilepath = `${newSourceFolderPath}/${name}${ext}`;
        if (fs.existsSync(sourceFilepath)) {
            sourceCode = await parser.parseFile(sourceFilepath, '');
            break;
        }
    }

    if (sourceCode == null)
    {
        return;
    }
    const content = await Fs.content(sourceFilepath);

    const result = [];
    for (const declartion of sourceCode.declarations) {

        const decl = declartion instanceof ClassDeclaration || declartion instanceof InterfaceDeclaration
            ? declartion : null;
        
        if (decl) {
            if (decl.isExported === false)
                continue;
            
            const typeName = decl instanceof ClassDeclaration ? 'class' :
                decl instanceof InterfaceDeclaration ? 'interface' : null;
            
            result.push(`<fds-card header="${decl.name}" subheader="${typeName}" id="${decl.name}" class="mb-5" style="display:block"><fds-card-content>`);
            // result.push(`<h3>${decl.name}</h3>`);

            const propertyList = decl.properties.filter(x => x.visibility === 2);
            const accessorList = decl.accessors.filter(x => x.visibility === 2)
                .groupBy(x => x.name)
                .map(x => {
                    const res = {
                        name: x[0].name,
                        type: x[0].type || x[1].type,
                        isStatic: x[0].isStatic || x[1].isStatic,
                    };
                    res['getter'] = x[0] instanceof GetterDeclaration ? x[0] : x[1];
                    res['setter'] = x[0] instanceof SetterDeclaration ? x[0] : x[1];
                    return res;
                });
            const propList = propertyList.concat(accessorList)
                .sort((x, y) => x.name.localeCompare(y.name));
            if (propList.length !== 0) {
                result.push(`<div class="mb-3"><b>Properties</b></div>`);
                // result.push(`<fds-card header="Properties"><fds-card-content>`);
                result.push(`<table class="table mb-5 table--zebra table--compact table--responsive-scroll">`);
                result.push(`<tr>`);
                result.push(`<th fds-tooltip="Property name when referencing the component in TypeScript">Name</th>`);
                result.push(`<th fds-tooltip="Attribute to use on the component">Attribute</th>`);
                result.push(`<th fds-tooltip="Property type(s)">Type</th>`);
                result.push(`<th fds-tooltip="Default value of the property">Default Value</th>`);
                // result.push(`<th>Is Optional</th>`);
                // result.push(`<th>Is Static</th>`);
                // result.push(`<th>Getter</th>`);
                // result.push(`<th>Setter</th>`);
                // result.push(`<th>is visibility</th>`);
                result.push(`</tr>`);

                for (const prop of propList) {
                    let propSource = prop.start && prop.end ? content.substring(prop.start, prop.end) : null;
                
                    result.push(`<tr>`);
                    
                    result.push(`<td>${prop.name}</td>`);

                    const input = propSource?.match(/@(Input|Output)\((.+)\)/g);
                    if (input && input.length != 0) {
                        const match = input[0];
                        const indexOfPararentesStart = match.indexOf('(');
                        const indexOfPararentesEnd = match.indexOf(')');
                        const domRef = match.substring(indexOfPararentesStart + 2, indexOfPararentesEnd - 1); 
                        result.push(`<td>${domRef}</td>`);
                    }
                    else {
                        result.push(`<td>${prop.name}</td>`);
                    }

                    if (!prop.type)
                        console.warn(`${sourceFilepath}> ${prop.name} is missing a type`);
                    const typeList = prop.type ? prop.type.split('|').map(x => x.trim()) : [];
                    const newTypeList = [];
                    for (const param of typeList) {
                        const typeName = param.endsWith('[]')
                            ? param.substring(0, param.length - 2)
                            : param;
                        
                        const declCandidates = sourceCode.declarations.filter(x => x.name === typeName);
                        let typeText = escapeHtml(param);
                        if (declCandidates.length === 1) {
                            typeText = `<a scroll-to='#${typeName}'>${param}</a>`;
                        }
                        newTypeList.push(typeText);
                    }
                    result.push(`<td>${newTypeList.join(' | ')}</td>`);

                    if (propSource) {
                        const propSplit = propSource.split('=');
                        let defaultValue = '';
                        if (propSplit.length != 1) {
                            defaultValue = propSplit[1].trim();
                            if (defaultValue.endsWith(';')) {
                                defaultValue = defaultValue.slice(0, -1).trim();
                            }
                        }
                        result.push(`<td>${escapeHtml(defaultValue)}</td>`);
                    } else {
                        // let propSource = prop.getter.start && prop.getter.end ? content.substring(prop.getter.start, prop.getter.end) : null;
                        result.push(`<td>(calculated value)</td>`);
                    }

                    // result.push(`<td>${prop.type.indexOf('| null') !== -1 || prop.isOptional}</td>`);
                    // result.push(`<td>${prop.isStatic ? 'Yes' : 'No'}</td>`);

                    const visibilityToString = function (num) {
                        switch (num) {
                            case 0: return 'Private';
                            case 1: return 'Protected';
                            case 2: return 'Public';
                        }
                        return '';
                    }

                    // result.push(`<td>${visibilityToString(prop.getter?.visibility ?? prop.visibility)}</td>`);
                    // result.push(`<td>${visibilityToString(prop.setter?.visibility ?? prop.visibility)}</td>`);
                    // result.push(`<td>${prop.visibility?.toString()}</td>`);
                    result.push(`</tr>`);
                }
                result.push(`</table>`);
                // result.push(`</fds-card-content></fds-card>`);
            }
            const methodList = decl.methods.filter(x => x.visibility === 2);
            if (methodList.length !== 0) {
                result.push(`<div class="mb-1"><b>Methods</b></div>`);
                result.push(`<table class="table mb-5 table--zebra table--compact table--responsive-scroll">`);
                result.push(`<tr>`);
                result.push(`<th>Name</th>`);
                result.push(`<th>Parameters</th>`);
                // result.push(`<th>Is Optional</th>`);
                result.push(`<th>Is Static</th>`);
                // result.push(`<th>is visibility</th>`);
                result.push(`</tr>`);
                for (const prop of methodList) {
                    result.push(`<tr>`);
                    result.push(`<td>${prop.name}</td>`);
                    const param = prop.parameters.map(x => {
                        return `${x.name}: ${escapeHtml(x.type)}`;
                    });
                    if (param.length !== 0)
                        result.push(`<td>${param}</td>`);
                    else
                        result.push(`<td>(none)</td>`);
                    // result.push(`<td>${prop.}</td>`);
                    result.push(`<td>${prop.isStatic}</td>`);
                    // result.push(`<td>${prop.visibility?.toString()}</td>`);
                    result.push(`</tr>`);
                }
                result.push(`</table>`);
            }
            result.push(`</fds-card-content></fds-card>`);
        }
    }
    if (result.length !== 0) {
        result.unshift('<h2 id="documentation">Documentation</h2>');
        result.unshift('<hr/>');
    }
    return result;
}

async function formatFilecontentAsync(filename, content) {
    const lineList = content.split('\n');
    var result = [];
    var isInDemoViewTag = false;
    var demoViewTagContent;
    for (const line of lineList) {
        var emptyDemoViewTagContent = false;
        if (line.trim() === '<app-demo-view>') {
            isInDemoViewTag = true;
            demoViewTagContent = [];
        } else if (line.trim() === '</app-demo-view>') {
            isInDemoViewTag = false;
            emptyDemoViewTagContent = true;
        } else if (isInDemoViewTag) {
            const html = escapeHtml(line);
            demoViewTagContent.push(html);
        }

        if (line.trim().indexOf('<app-doc-view>') != -1) {
            const docs = await getDocumentationAsync(filename);
            try {
                result.push('<app-doc-view>');
                result.push(...docs);
                if (line.indexOf('</app-doc-view>') != -1)
                    result.push('</app-doc-view>');
            } catch (error) {
                throw 'dav';
            }
        }
        else
        {
            result.push(line);
        }

        if (emptyDemoViewTagContent) {
            result.push('<code ng-non-bindable>');
            demoViewTagContent = demoViewTagContent.map(x => x.substring(12) + '<br />');
            result.push(...demoViewTagContent);
            result.push('</code>');
            demoViewTagContent = null;
        }
    }
    return result.join('\n');
}

async function handleFileAsync(filepath) {
    let data = fs.readFileSync(filepath).toString();
    data = await formatFilecontentAsync(filepath, data);
    const htmlFilename = filepath.split('.')[0] + outputFileextension;
    fs.writeFileSync(htmlFilename, data);
}

const filepathPattern = `projects/demo-project/src/app/pages/**/*${sourceFileextension}`;

const watch = chokidar.watch(filepathPattern);

console.log('Building...');
watch.on('add', handleFileAsync);
console.log('Building completed');

console.log('Watching...');
watch.on('change', filepath => {
    console.log('File changes detected. Rebuilding html...');
    handleFileAsync(filepath);
    console.log('Rebuilding completed');
});