import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvPreviewPageRoutingModule } from './cv-preview-routing.module';

import { CvPreviewPage } from './cv-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvPreviewPageRoutingModule
  ],
  declarations: [CvPreviewPage]
})
export class CvPreviewPageModule {}
