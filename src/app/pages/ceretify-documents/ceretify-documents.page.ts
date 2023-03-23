import { Component, OnInit } from '@angular/core';
import { AlertController, isPlatform, ModalController } from '@ionic/angular';
// import { AddFileModalPage } from '../../add-file-modal/AddFileModalPage';

@Component({
  selector: 'app-ceretify-documents',
  templateUrl: './ceretify-documents.page.html',
  styleUrls: ['./ceretify-documents.page.scss'],
})
export class CeretifyDocumentsPage implements OnInit {
  recent;
  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

  addModal(){
    alert('modal')
  }

  // async addModal() {
  //   const modal = await this.modalController.create({
  //     component: AddFileModalPage,
  //     cssClass:'modal-radius',
  //     mode: 'ios',
  //     breakpoints: [0.5],
  //     initialBreakpoint: 0.5,
  //     handle: false,
  //   });

  //   await modal.present();
  // }
}
