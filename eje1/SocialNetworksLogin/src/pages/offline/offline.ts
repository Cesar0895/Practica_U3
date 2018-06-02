import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'offline',
  templateUrl: 'offline.html'
})
export class Offline {

  constructor(public navCtrl: NavController, public auth: AuthProvider) {

  }

}