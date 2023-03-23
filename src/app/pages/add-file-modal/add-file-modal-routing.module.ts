import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFileModalPage } from './add-file-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddFileModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFileModalPageRoutingModule {}
