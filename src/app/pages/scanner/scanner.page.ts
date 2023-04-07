import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, FilesystemDirectory } from '@capacitor/filesystem';
import { FileOpener } from '@ionic-native/file-opener/ngx';


// PFD maker apis
import pdfMake from 'pdfmake/build/pdfmake'
import pdFonts from 'pdfmake/build/vfs_fonts';
import { buffer } from 'rxjs';
pdfMake.vfs = pdFonts.pdfMake.vfs;


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  myForm: FormGroup;
  pdfObj = null;
  photoPreview = null;
  logoData = null;

  docDate = Date.now();

  constructor(private fb: FormBuilder,
    private plt: Platform,
    private http: HttpClient,
    private fileOpener: FileOpener) { }

  ngOnInit() {
    // this.myForm = this.fb.group({
    //   showLogo: true,
    //   from: 'Teboho',
    //   to: 'KAIOTY',
    //   text: 'testing scanner',
    // });
    this.loadLocalAssetToBase64()
  }

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

  dowloadPDF(){
    //  alert('downloading PDF') 
     if(this.plt.is('cordova')) {
      this.pdfObj.getBase64(async (data) => {
        try {
          let path = `pdf/myScan_${Date.now()}.pdf`;          

          const result = await Filesystem.writeFile({
            path,
            data,
            directory: FilesystemDirectory.Documents,
            recursive: true,
          });

          this.fileOpener.open(`${result.uri}`, 'application/pdf');
          console.log('sure we here');
          
        } catch (e) {
          console.error('unable to edit file', e);
        }
      });
     } else {
       this.pdfObj.download();
     }
    }

}
