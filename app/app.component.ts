import { Component } from '@angular/core';

interface CryptoMD5{
  MD5();
}

declare var CryptoJS:CryptoMD5;


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {
  input:string;
  inputs = [];
  hashes = [];
  constructor(){}
  
  hash(){
      this.inputs.push(this.input);
      this.hashes.push(CryptoJS.MD5(this.input).toString());  
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/