import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvPreviewPage } from './cv-preview.page';

const routes: Routes = [
  {
    path: '',
    component: CvPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvPreviewPageRoutingModule {}
