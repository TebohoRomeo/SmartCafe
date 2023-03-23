import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteCvProfilePageRoutingModule } from './write-cv-profile-routing.module';

import { WriteCvProfilePage } from './write-cv-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteCvProfilePageRoutingModule
  ],
  declarations: [WriteCvProfilePage]
})
export class WriteCvProfilePageModule {}
