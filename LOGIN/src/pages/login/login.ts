import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = { email : '', password : ''};

 constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider, public alertCtrl : AlertController,public modalCtrl: ModalController,public actionSheetCtrl: ActionSheetController) {}

 signin(){
   var datos = {email:"",password:""};
   let prompt = this.alertCtrl.create({
     title: 'Create User',
     message: "",
     inputs: [
       {
         name: 'Usuario',
         placeholder: 'Usuario',
         type:"email"
       },
       {
         name: 'Password',
         placeholder: 'Password',
         type:"password"
       },
       {
         name: 'ConfirmPassword',
         placeholder: 'Confirm Password',
type:"password"
       }
     ],
     buttons: [
       {
         text: 'Cancel',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Create',
         handler: data => {
           if(data.Usuario!='' && data.Password!='' && data.ConfirmPassword!=''){
             if( data.Password==data.ConfirmPassword){
               this.auth.registerUser(data.Usuario,data.Password)
               .then((user) => {
                 // El usuario se ha creado correctamente
               })
               .catch(err=>{
                   this.alertCtrl.create({
                   title: 'Error',
                   subTitle: err.message,
                   buttons: ['Aceptar']
                 }).present();
               });
             }else{
               this.alertCtrl.create({
                 title: 'ERROR',
                 subTitle: 'Las contraseñas no coinciden',
                 buttons: ['Aceptar']
               }).present();
             }
           }
         }
       }
     ]
   });
   prompt.present();
 }
login() {
     this.auth.loginUser(this.user.email,this.user.password )
     .then((user) => {})
     .catch(err=>{
       let alert = this.alertCtrl.create({
         title: 'Error',
         subTitle: err.message,
         buttons: ['Aceptar']
       });
       alert.present();
   });
 }

 logingoogle(){
   var a = this.auth;
   this.auth.loginUserWithGoolePlus().then(function(result) {
     var token = result.credential.accessToken;
     var user = result.user;
   }).catch(function(error) {
     var errorCode = error.code;
     var errorMessage = error.message;
     var email = error.email;
     var credential = error.credential;
   });
 }
 loginfacebook(){
   this.auth.loginUserWithFacebook().then(function(result) {
     var token = result.credential.accessToken;
     var user = result.user;
   }).catch(function(error) {
     var errorCode = error.code;
     var errorMessage = error.message;
     var email = error.email;
     var credential = error.credential;
   });
 }
 logintwitter(){
   this.auth.loginUserWithTwitter().then(function(result) {
     var token = result.credential.accessToken;
     var user = result.user;
   }).catch(function(error) {
     var errorCode = error.code;
     var errorMessage = error.message;
     var email = error.email;
     var credential = error.credential;     
   });
 }
}
