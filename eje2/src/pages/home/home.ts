import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

qrData=null;
scannedCode=null;
createdCode=null;

  constructor(public navCtrl: NavController, public barcodescanner:BarcodeScanner) {

  }

  createcode():void{
    this.createdCode=this.qrData;
      }

      scancode():void{
    this.barcodescanner.scan().then(barcodeData=>{
      this.scannedCode=barcodeData.text;
    })
      }

}
