import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFieldPageComponent } from './search-field-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentsModule } from '../../components/components.module';
import { FdsCardModule, FdsSearchFieldModule } from 'projects/ngfds/src/public-api';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: SearchFieldPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchFieldRoutingModule {}

@NgModule({
  declarations: [SearchFieldPageComponent],
  imports: [
    SearchFieldRoutingModule,
    CommonModule,
    FormsModule,
    AppComponentsModule,
    FdsSearchFieldModule,
    FdsCardModule,
  ],
})
export class SearchFieldPageModule {}
