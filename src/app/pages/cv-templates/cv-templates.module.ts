import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvTemplatesPageRoutingModule } from './cv-templates-routing.module';

import { CvTemplatesPage } from './cv-templates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvTemplatesPageRoutingModule
  ],
  declarations: [CvTemplatesPage]
})
export class CvTemplatesPageModule {}
