import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteCvProfilePage } from './write-cv-profile.page';

const routes: Routes = [
  {
    path: '',
    component: WriteCvProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteCvProfilePageRoutingModule {}
