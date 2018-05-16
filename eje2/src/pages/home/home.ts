import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

qrData=null;
scannedCode=null;
createdCode=null;

  constructor(public navCtrl: NavController, public barcodescanner:BarcodeScanner, public contacts: Contacts) {

  }

  createcode():void{
    this.createdCode=this.qrData;
      }

      scancode():void{
    this.barcodescanner.scan().then(barcodeData=>{
      this.scannedCode=barcodeData.text;
    })
      }

      save():void{

        let contact: Contact = this.contacts.create();

contact.name = new ContactName(null, 'Smith', 'John');
contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
contact.save().then(
  () => console.log('Contact saved!', contact),
  (error: any) => console.error('Error saving contact.', error)
);
        
          }

}
