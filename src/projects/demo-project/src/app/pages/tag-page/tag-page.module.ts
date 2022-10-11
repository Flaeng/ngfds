import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule, FdsTagModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { TagPageComponent } from './tag-page.component';

const routes: Routes = [{ path: '', component: TagPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagRoutingModule {}

@NgModule({
  declarations: [TagPageComponent],
  imports: [
    TagRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsTagModule,
    FdsCardModule,
  ],
})
export class TagPageModule {}
