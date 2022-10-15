import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FdsFileUploadModule } from 'projects/ngfds/src/lib/file-upload/public-api';
import { FdsCardModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { FileUploadPageComponent } from './file-upload-page.component';

const routes: Routes = [{ path: '', component: FileUploadPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileUploadRoutingModule {}

@NgModule({
  declarations: [FileUploadPageComponent],
  imports: [
    FileUploadRoutingModule,
    CommonModule,
    FormsModule,
    AppComponentsModule,
    FdsFileUploadModule,
    FdsCardModule,
  ],
})
export class FileUploadPageModule {}
