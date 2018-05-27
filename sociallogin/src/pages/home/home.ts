import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AngularFireAuth} from "angularfire2/auth";

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private fire: AngularFireAuth,
    public navCtrl: NavController) {

  }

  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res =>{
      console.log(res);
    })

  }
  logoutFacebook(){
    this.fire.auth.signOut();
    
  }

}
