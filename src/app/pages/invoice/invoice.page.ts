import { Component, OnInit } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { NavController, Platform, ToastController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder} from '@angular/forms'

import pdfMake from 'pdfmake/build/pdfmake'
import pdFonts from 'pdfmake/build/vfs_fonts';
import { buffer } from 'rxjs';
pdfMake.vfs = pdFonts.pdfMake.vfs;

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  letterObj = {
    to: '',
    description: '',
    items: '',
    total: '',
   }

  pdfObj = null;

  constructor(private navCtrl: NavController,
    // private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private plt: Platform,
    // private file: File,
    // public file: File,
    private fileOpener: FileOpener) { }

  ngOnInit() {
  }

  async createPdf(){
  //  alert('creating PDF')
   if(this.letterObj == null) {
    const toast = await this.toastCtrl.create({
      message: 'Fill form',
      color: 'primary',
      duration: 3000
    })
    toast.present();
   } else {
     let docDefinition = {
      // watermark: {text: 'SmartCafe', color: 'green', bold: true},
      content: [
        {text: 'Tax Invoice', style: 'header', fontSize: 40, alignment: 'right'},
        {text: 'Invoice no: ' + '20182556', styles: 'subheader', fontSize: 14, alignment: 'right'},
        {text: 'Date: ' + 'March 18th, 2023', styles: 'subheader', fontSize: 14, alignment: 'right'},
        {text: 'Company: ' + 'SmartCafe', styles: 'subheader', fontSize: 14, alignment: 'right',},
        {text: 'Reference: ' + 'Teboho Lekhalo' , style: 'subheader', fontSize: 14, alignment: 'right'},
     
        {text: 'To', style: 'subheader'},
        {text: this.letterObj.to},
     
        {text: this.letterObj.description, style: 'story', margin: [0, 20, 0, 20]},
        {text: this.letterObj.total},
        
        {
          // {ol: [this.letterObj.items]},
          ol: [ this.letterObj.items],
          styles: {
            header: {
              fontSize: '40',
              alignment: 'center',
              bold: true,
            },
            subheader: {
              fontSize: 50,
              bold: true,
              // margin: [0, 20, 0, 20]
            },
            story: {
              italic: true,
              alignment: 'center',
              width: '50%'
            }
          },
        },
        // The total amount need to be displayed
        {text: 'Total', style: 'subheader'},
      ]
     }
     this.pdfObj = pdfMake.createPdf(docDefinition)

    //  } else {
    //   // Change the code below to send via email
    //   this.pdfObj.download()
    //  }
   }
  }

  // NEw funtion
  
  dowloadPDF(){
  //  alert('downloading PDF') 
   if(this.plt.is('cordova')) {
    this.pdfObj.getBuffer(buffer);
    // let utf8 = new Uint8Array(buffer);
    // let binaryArray = utf8.buffer;
    // let blob = new Blob([binaryArray], {type: 'application/pdf'});

    // this.file.writeFile(this.file.dataDirectory, 'myDoc.pdf', blob, {replace: true}).then(fileEntry => {
    //   this.fileOpener.open(this.file.dataDirectory + 'myDoc.pdf', 'application/pdf');
    // });
   } else {
     this.pdfObj.download();
   }
  }
}
