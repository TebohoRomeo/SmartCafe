import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeretifyDocumentsPage } from './ceretify-documents.page';

const routes: Routes = [
  {
    path: '',
    component: CeretifyDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeretifyDocumentsPageRoutingModule {}
