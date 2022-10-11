import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgfdsDropdownModule } from 'projects/ngfds/src/lib/ngfds/dropdown/public-api';
import { FdsCardModule, FdsIconsModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { NgfdsDropdownPageComponent } from './ngfds-dropdown-page/ngfds-dropdown-page.component';

const routes: Routes = [
  { path: 'dropdown', component: NgfdsDropdownPageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgfdsRoutingModule {}

@NgModule({
  declarations: [NgfdsDropdownPageComponent],
  imports: [
    NgfdsRoutingModule,
    CommonModule,
    FormsModule,
    AppComponentsModule,
    NgfdsDropdownModule,
    FdsCardModule,
    FdsIconsModule,
  ],
})
export class NgfdsPageModule {}
