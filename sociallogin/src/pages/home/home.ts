import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AngularFireAuth} from "angularfire2/auth";

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  provider ={
 
    name:'',
    profilePicture:'',
    email:'',
    loggedin: false
  }




  constructor(private fire: AngularFireAuth,
    public navCtrl: NavController) {

  }

  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res =>{
      this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
      console.log(res);
    })

  }
  loginWithGoogle(){
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res =>{
      console.log('From --Google--');
      console.log(res);
      this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
      console.log(res);
    })
  }
 

  logout() {
    this.fire.auth.signOut();
    this.provider.loggedin = false;
    
  }

}
