import { Component, OnInit } from '@angular/core';

const IMAGE_DIR = 'stored-images';

interface LocalFile {
  name: string;
  path: string;
  data: string;
};

@Component({
  selector: 'app-sign-document',
  templateUrl: './sign-document.page.html',
  styleUrls: ['./sign-document.page.scss'],
})

export class SignDocumentPage implements OnInit {
  
  image: string;

  constructor() { }

  ngOnInit() {
  }
  
  signImage(event) {
    this.image = event;
    console.log(this.image);
  }

}
