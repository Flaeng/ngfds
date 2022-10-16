import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgfdsDropdownModule } from 'projects/ngfds/src/lib/ngfds/dropdown/public-api';
import { NgfdsSideNavigationModule } from 'projects/ngfds/src/lib/ngfds/side-navigation/side-navigation.module';
import { FdsCardModule, FdsIconsModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { NgfdsDropdownPageComponent } from './dropdown-page/dropdown-page.component';
import { NgfdsSideNavigationPageComponent } from './side-navigation-page/side-navigation-page.component';

const routes: Routes = [
  { path: 'dropdown', component: NgfdsDropdownPageComponent },
  { path: 'side-navigation', component: NgfdsSideNavigationPageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgfdsRoutingModule {}

@NgModule({
  declarations: [NgfdsDropdownPageComponent, NgfdsSideNavigationPageComponent],
  imports: [
    NgfdsRoutingModule,
    CommonModule,
    FormsModule,
    AppComponentsModule,
    NgfdsDropdownModule,
    NgfdsSideNavigationModule,
    FdsCardModule,
    FdsIconsModule,
  ],
})
export class NgfdsPageModule {}
