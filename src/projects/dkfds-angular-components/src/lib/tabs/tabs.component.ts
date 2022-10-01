import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
//@ts-ignore
import DKFDS from 'dkfds';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabSelectorComponent } from './tab-selector/tab-selector.component';

@Component({
  selector: 'fds-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements AfterViewInit {
  @ViewChild('tabnav')
  private tabnav!: ElementRef;

  @Input('selected-index')
  public selectedIndex = 0;

  ngAfterViewInit(): void {
    this.setSelectedTab();
    const tabnav = new DKFDS.Tabnav(this.tabnav.nativeElement);
    // const tabnav = new Tabnav(this.tabnav.nativeElement);
    tabnav.init();
  }

  setSelectedTab() {
    this.selectors[this.selectedIndex]?.setActive();
    this.content[this.selectedIndex]?.setActive();
  }

  selectors: TabSelectorComponent[] = [];
  public registerAsTabSelector(item: TabSelectorComponent) {
    this.selectors.push(item);
  }

  content: TabContentComponent[] = [];
  public registerAsTabContent(item: TabContentComponent) {
    this.content.push(item);
  }
}

// class Tabnav {
//   tabnav: any;
//   tabs: any[];

//   constructor(tabnav: any) {
//     this.tabnav = tabnav;
//     this.tabs = this.tabnav.querySelectorAll('button.tabnav-item');
//   }

//   public init(): void {
//     if (this.tabs.length === 0) {
//       throw new Error(
//         `Tabnav HTML seems to be missing tabnav-item. Add tabnav items to ensure each panel has a button in the tabnavs navigation.`
//       );
//     }

//     // if no hash is set on load, set active tab
//     if (!this.setActiveHashTab()) {
//       // set first tab as active
//       let tab = this.tabs[0];

//       // check no other tabs as been set at default
//       let alreadyActive = this.getActiveTabs(this.tabnav);
//       if (alreadyActive.length === 0) {
//         tab = alreadyActive[0];
//       }

//       // activate and deactivate tabs
//       this.activateTab(tab, false);
//     }
//     let $module = this;
//     // add eventlisteners on buttons
//     for (let t = 0; t < this.tabs.length; t++) {
//       this.tabs[t].addEventListener('click', function () {
//         //@ts-ignore
//         $module.activateTab(this, false);
//       });
//       this.tabs[t].addEventListener('keydown', this.keydownEventListener);
//       this.tabs[t].addEventListener('keyup', this.keyupEventListener);
//     }
//   }

//   /***
//    * Show tab and hide others
//    * @param {HTMLButtonElement} tab button element
//    * @param {boolean} setFocus True if tab button should be focused
//    */
//   private activateTab(tab: any, setFocus: any) {
//     let tabs = this.getAllTabsInList(tab);

//     // close all tabs except selected
//     for (let i = 0; i < this.tabs.length; i++) {
//       if (tabs[i] === tab) {
//         continue;
//       }

//       if (tabs[i].getAttribute('aria-selected') === 'true') {
//         let eventClose = new Event('fds.tabnav.close');
//         tabs[i].dispatchEvent(eventClose);
//       }

//       tabs[i].setAttribute('tabindex', '-1');
//       tabs[i].setAttribute('aria-selected', 'false');
//       let tabpanelID = tabs[i].getAttribute('aria-controls');
//       let tabpanel = document.getElementById(tabpanelID);
//       if (tabpanel === null) {
//         throw new Error(`Could not find tabpanel.`);
//       }
//       tabpanel.setAttribute('aria-hidden', 'true');
//     }

//     // Set selected tab to active
//     let tabpanelID = tab.getAttribute('aria-controls');
//     let tabpanel = document.getElementById(tabpanelID);
//     if (tabpanel === null) {
//       throw new Error(`Could not find accordion panel.`);
//     }

//     tab.setAttribute('aria-selected', 'true');
//     tabpanel.setAttribute('aria-hidden', 'false');
//     tab.removeAttribute('tabindex');

//     // Set focus when required
//     if (setFocus) {
//       tab.focus();
//     }

//     let eventChanged = new Event('fds.tabnav.changed');
//     tab.parentNode.dispatchEvent(eventChanged);

//     let eventOpen = new Event('fds.tabnav.open');
//     tab.dispatchEvent(eventOpen);
//   }

//   breakpoints = {
//     xs: 0,
//     sm: 576,
//     md: 768,
//     lg: 992,
//     xl: 1200,
//   };

//   // For easy reference
//   keys = {
//     end: 35,
//     home: 36,
//     left: 37,
//     up: 38,
//     right: 39,
//     down: 40,
//     delete: 46,
//     enter: -1,
//     space: -1,
//   };

//   // Add or substract depending on key pressed
//   direction = {
//     37: -1,
//     38: -1,
//     39: 1,
//     40: 1,
//   };

//   /**
//    * Add keydown events to tabnav component
//    * @param {KeyboardEvent} event
//    */
//   private keydownEventListener(event: any) {
//     let key = event.keyCode;

//     switch (key) {
//       case this.keys.end:
//         event.preventDefault();
//         // Activate last tab
//         this.focusLastTab(event.target);
//         break;
//       case this.keys.home:
//         event.preventDefault();
//         // Activate first tab
//         this.focusFirstTab(event.target);
//         break;
//       // Up and down are in keydown
//       // because we need to prevent page scroll >:)
//       case this.keys.up:
//       case this.keys.down:
//         this.determineOrientation(event);
//         break;
//     }
//   }

//   /**
//    * Add keyup events to tabnav component
//    * @param {KeyboardEvent} event
//    */
//   private keyupEventListener(event: any) {
//     let key = event.keyCode;

//     switch (key) {
//       case this.keys.left:
//       case this.keys.right:
//         this.determineOrientation(event);
//         break;
//       case this.keys.delete:
//         break;
//       case this.keys.enter:
//       case this.keys.space:
//         new Tabnav(event.target.parentNode).activateTab(event.target, true);
//         break;
//     }
//   }

//   /**
//    * When a tablist aria-orientation is set to vertical,
//    * only up and down arrow should function.
//    * In all other cases only left and right arrow function.
//    */
//   private determineOrientation(event: any) {
//     let key = event.keyCode;

//     let w = window,
//       d = document,
//       e = d.documentElement,
//       g = d.getElementsByTagName('body')[0],
//       x = w.innerWidth || e.clientWidth || g.clientWidth,
//       y = w.innerHeight || e.clientHeight || g.clientHeight;

//     let vertical = x < this.breakpoints.md;
//     let proceed = false;

//     if (vertical) {
//       if (key === this.keys.up || key === this.keys.down) {
//         event.preventDefault();
//         proceed = true;
//       }
//     } else {
//       if (key === this.keys.left || key === this.keys.right) {
//         proceed = true;
//       }
//     }
//     if (proceed) {
//       this.switchTabOnArrowPress(event);
//     }
//   }

//   /**
//    * Either focus the next, previous, first, or last tab
//    * depending on key pressed
//    */
//   private switchTabOnArrowPress(event: any) {
//     var pressed: 37 | 38 | 39 | 40 = event.keyCode;
//     if (this.direction[pressed]) {
//       let target = event.target;
//       let tabs = this.getAllTabsInList(target);
//       let index = this.getIndexOfElementInList(target, tabs);
//       if (index !== -1) {
//         if (tabs[index + this.direction[pressed]]) {
//           tabs[index + this.direction[pressed]].focus();
//         } else if (pressed === this.keys.left || pressed === this.keys.up) {
//           this.focusLastTab(target);
//         } else if (pressed === this.keys.right || pressed == this.keys.down) {
//           this.focusFirstTab(target);
//         }
//       }
//     }
//   }

//   /**
//    * Get all active tabs in list
//    * @param tabnav parent .tabnav element
//    * @returns returns list of active tabs if any
//    */
//   private getActiveTabs(tabnav: any) {
//     return tabnav.querySelectorAll('button.tabnav-item[aria-selected=true]');
//   }

//   /**
//    * Get a list of all button tabs in current tablist
//    * @param tab Button tab element
//    * @returns {*} return array of tabs
//    */
//   private getAllTabsInList(tab: any) {
//     let parentNode = tab.parentNode;
//     if (parentNode.classList.contains('tabnav')) {
//       return parentNode.querySelectorAll('button.tabnav-item');
//     }
//     return [];
//   }

//   /**
//    * Get index of element in list
//    * @param {HTMLElement} element
//    * @param {HTMLCollection} list
//    * @returns {index}
//    */
//   private getIndexOfElementInList(element: any, list: any) {
//     let index = -1;
//     for (let i = 0; i < list.length; i++) {
//       if (list[i] === element) {
//         index = i;
//         break;
//       }
//     }

//     return index;
//   }

//   /**
//    * Checks if there is a tab hash in the url and activates the tab accordingly
//    * @returns {boolean} returns true if tab has been set - returns false if no tab has been set to active
//    */
//   private setActiveHashTab() {
//     let hash = location.hash.replace('#', '');
//     if (hash !== '') {
//       let tab = document.querySelector(
//         'button.tabnav-item[aria-controls="#' + hash + '"]'
//       );
//       if (tab !== null) {
//         this.activateTab(tab, false);
//         return true;
//       }
//     }
//     return false;
//   }

//   /**
//    * Get first tab by tab in list
//    * @param {HTMLButtonElement} tab
//    */
//   private focusFirstTab(tab: any) {
//     this.getAllTabsInList(tab)[0].focus();
//   }

//   /**
//    * Get last tab by tab in list
//    * @param {HTMLButtonElement} tab
//    */
//   private focusLastTab(tab: any) {
//     let tabs = this.getAllTabsInList(tab);
//     tabs[tabs.length - 1].focus();
//   }
// }
