import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverflowButtonComponent } from './overflow-button/overflow-button.component';
import { OverflowDialogComponent } from './overflow-dialog/overflow-dialog.component';
import { OverflowListItemComponent } from './overflow-list-item/overflow-list-item.component';
import { OverflowListComponent } from './overflow-list/overflow-list.component';
import { OverflowMenuComponent } from './overflow-menu.component';
import { OverflowSortComponent } from './overflow-sort/overflow-sort.component';
import { OverflowWrapperComponent } from './overflow-wrapper/overflow-wrapper.component';

@NgModule({
  declarations: [
    OverflowMenuComponent,
    OverflowSortComponent,
    OverflowWrapperComponent,
    OverflowButtonComponent,
    OverflowDialogComponent,
    OverflowListComponent,
    OverflowListItemComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    OverflowMenuComponent,
    OverflowSortComponent,
    OverflowWrapperComponent,
    OverflowButtonComponent,
    OverflowDialogComponent,
    OverflowListComponent,
    OverflowListItemComponent,
  ],
})
export class FdsOverflowMenuModule {}
