import { Component, OnInit } from '@angular/core';

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
