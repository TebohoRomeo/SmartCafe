import { Component, OnInit } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { NavController, Platform, ToastController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder} from '@angular/forms'

import pdfMake from 'pdfmake/build/pdfmake'
import pdFonts from 'pdfmake/build/vfs_fonts';
import { buffer } from 'rxjs';
pdfMake.vfs = pdFonts.pdfMake.vfs;

@Component({
  selector: 'app-letter',
  templateUrl: './letter.page.html',
  styleUrls: ['./letter.page.scss'],
})
export class LetterPage implements OnInit {


  letterObj = {
    to: '',
    letter: '',
   }

  pdfObj = null;

  constructor(private navCtrl: NavController,
    private toastCtrl: ToastController,
    private plt: Platform,
    private fileOpener: FileOpener) { }

  ngOnInit() {
  }

  async createPdf(){
    alert('creating PDF')
    if(this.letterObj == null) {
     const toast = await this.toastCtrl.create({
       message: 'Fill form',
       color: 'primary',
       duration: 3000
     })
     toast.present();
    } else {
      let docDefinition = {
      //  watermark: {text: 'SmartCafe', color: 'green', bold: true},
       content: [
        // Content that shows on the right side of the letter
         {text: ['EFF ', 'ANC ', 'AWAR'], style: 'header', fontSize: 50, alignment: 'right'},
         {text: '17470 Zone 19', alignment: 'right'},
         {text: 'Moshoeshoe st', alignment: 'right'},
         {text: 'Sebokeng', alignment: 'right'},
         {text: 1983, alignment: 'right'},
         {text: ''}, // There was something here and i forgot what that was.

         {text: new Date().toTimeString(), alignment: 'right'},
      
         {text: `Dear ${this.letterObj.to}`},      
         {text: this.letterObj.letter, style: 'story', margin: [0, 20, 0, 20]},

       ]
      }
      this.pdfObj = pdfMake.createPdf(docDefinition)
      if(this.plt.is('cordova')) {
       this.pdfObj.getBuffer(buffer);
      } else {
       // Change the code below to send via email
       this.pdfObj.download();
      }
    }
   
   }
}
