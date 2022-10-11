import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { DocViewComponent } from './doc-view/doc-view.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [DemoViewComponent, DocViewComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [DemoViewComponent, DocViewComponent, HeaderComponent],
})
export class AppComponentsModule {}
