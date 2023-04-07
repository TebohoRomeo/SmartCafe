import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform, ToastController, ModalController, IonContent } from '@ionic/angular';
import { CreatePage } from '../pages/create/create.page';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, FilesystemDirectory } from '@capacitor/filesystem';
import { FileOpener } from '@ionic-native/file-opener/ngx';


// PFD maker apis
import pdfMake from 'pdfmake/build/pdfmake'
import pdFonts from 'pdfmake/build/vfs_fonts';
import { buffer } from 'rxjs';

// PDF file imports

import write_blob from "capacitor-blob-writer";
import { File, FilePicker } from '@capawesome/capacitor-file-picker';

const IMAGE_DIR = 'images-stored'

interface LocalFile {
  name: string;
  path: string;
  data: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  myForm: FormGroup;
  pdfObj = null;
  photoPreview = null;
  logoData = null;

  docDate = new Date().getTime();

  constructor(private navCtrl: NavController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private router: Router,
    private plt: Platform,
    private http: HttpClient,
    private fileOpener: FileOpener) { }

  ngOnInit() {
    // this.goToCreate();
  }


  goToProfile() {
    this.router.navigate(['/profile']);
  }

  async goToCreate() {
    const modal = await this.modalCtrl.create({
      component: CreatePage,
      cssClass: 'modal-radius',
      mode: 'ios',
      breakpoints: [0, 0.9], // Breakpoints can be changes to modify the modal reach height
      initialBreakpoint: 0.9, // ''
      handle: false,
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  handleScroll(ev) {
    console.log(ev, 'this the ev');
  }

  // Scanner 
  loadLocalAssetToBase64() {
    this.http.get('../../../assets/img/model_1.png', {responseType: 'blob'})
    .subscribe(res => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.logoData = reader.result;
      }
      reader.readAsDataURL(res);
    });
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
    
    this.photoPreview = `data:image/jpeg;base64,${image.base64String}`;
  }

  async selectImage() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri, //.Uri works better but for now only .base64 works
      source: CameraSource.Photos,
    });

    console.log(image, 'our image');
    this.photoPreview = `data:image/jpeg;base64,${image.base64String}`;
    // if (image) {
    //   // Write code here
    // }
  }

  async saveImage(photo: any) {
    const base64Data = await this.readAsBase64(photo);
    const filename = new Date().getTime() + 'jpeg';
    const saveFile =  await Filesystem.writeFile({
      // directory: Directory.Data,
      path: `${IMAGE_DIR}/${filename}`,
      data: base64Data,
    });
  }

  async readAsBase64(photo) {
    if (this.plt.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path
      });
      console.log(file.data, 'file data');
      
      return file.data;
    } else {
      const response = await fetch(photo.webPath)
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
    }
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise ((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
      console.log(reader.result, 'reader results');
      
    };
    // console.log(reader.readAsBase64(blob), 'Checking the file if is converted');
    
    
  })



  createPDF() {
    // const valueForm = this.myForm.value; 
    const image = this.photoPreview ? {image: this.photoPreview, width: 300} : {};


    const docDefinition = {
      
      content: [
        image,
      ]
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

  // filtering image/png and pdf files
  async pickFile(): Promise<void> {
    const types = ['application/pdf', 'image/png', 'image/jpeg'];
    const multiple = true;
    const readData = true;
    let { files } = await FilePicker.pickFiles({ types, multiple, readData });
    this.fileSelected(files);
    // this.photoPreview = files
  }
  
  
  async fileSelected(file: any) {
    let fileName = this.photoPreview;
    // await write_blob({
    //   directory: Directory.Data,
    //   path: `${this.IMAGE_DIR}/${fileName}`,
    //   blob: file,
    //   fast_mode: true,
    //   recursive: true,
    //   on_fallback(error) { console.error(error) }
    // })
  }
}
