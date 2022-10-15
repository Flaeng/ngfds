import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabSelectorComponent } from './tab-selector/tab-selector.component';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabContentComponent,
    TabSelectorComponent,
  ],
  imports: [CommonModule],
  exports: [
    TabsComponent,
    TabComponent,
    TabContentComponent,
    TabSelectorComponent,
  ],
})
export class FdsTabsModule {}
