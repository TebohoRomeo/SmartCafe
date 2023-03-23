import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvTemplatesPage } from './cv-templates.page';

const routes: Routes = [
  {
    path: '',
    component: CvTemplatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvTemplatesPageRoutingModule {}
