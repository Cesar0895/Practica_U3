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
     title: 'Registrar Usuario',
     message: "",
     inputs: [
       {
         name: 'Usuario',
         placeholder: 'Usuario',
         type:"email"
       },
       {
         name: 'Password',
         placeholder: 'Contraseña',
         type:"password"
       },
       {
         name: 'ConfirmPassword',
         placeholder: 'Confirmar Contraseña',
         type:"password"
       }
     ],
     buttons: [
       {
         text: 'Cancelar',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Crear',
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
                 title: 'ERROR!',
                 subTitle: 'Las contraseñas no coinciden, intentelo nuevamente!',
                 buttons: ['Aceptar']
               }).present();
             }
           }else{
            this.alertCtrl.create({
              title: 'Algo salio mal :`(  ',
              subTitle: '¡¡Intentelo Nuevamente!!',
              buttons: ['Aceptar']
            }).present();
           }
         }
       }
     ]
   });
   prompt.present();
 }
 showMenu() {
  this.actionSheetCtrl.create({
    title: "Iniciar Sesión con:",
    enableBackdropDismiss: true,
    buttons: [
      {
        text: "Github",
        role: 'destructive',
        icon: 'logo-github',
        handler: () => {
          console.log("Github");
          this.auth.loginUserWithGitHub()
            .then(function(result){
              console.log("Devuelto por Github"+
              result);
              var token = result.credential.accessToken;
              var user = result.user;

            })
            .catch(function(error){
              console.log(error.message);
            })
        }
      },
      {
        text: "Twitter",
        role: 'destructive',
        icon: 'logo-twitter',
        handler: () => {
          console.log("Twitter");
          this.auth.loginUserWithTwitter()
            .then(function(result){
              console.log("Devuelto por Twitter"+
              result);
              var token = result.credential.accessToken;
              var user = result.user;

            })
            .catch(function(error){
              console.log(error.message);
            })
        }
      },
      {
        text: "Google",
        role: 'destructive',
        icon: 'logo-google',
        handler: () => {
          console.log("Google");
          this.auth.loginUserWithGoolePlus()
            .then(function(result){
              console.log("Devuelto por Google"+
              result);
              var token = result.credential.accessToken;
              var user = result.user;

            })
            .catch(function(error){
              console.log(error.message);
            })
        }
      },
      {
        text: "Facebook",
        role: 'destructive',
        icon: 'logo-facebook',
        handler: () => {
          console.log("Facebook");
          this.auth.loginUserWithFacebook()
            .then(function(result){
              console.log("Devuelto por Facebook"+
              result);
              var token = result.credential.accessToken;
              var user = result.user;

            })
            .catch(function(error){
              console.log(error.message);
            })
        }
      }
    ]
  }).present();
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
 logingithub(){         
   this.auth.loginUserWithGitHub().then(function(result) {
     if (result.credential) {
       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
       var token = result.credential.accessToken;
     }
       // The signed-in user info.
       var user = result.user;
   }).catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     // The email of the user's account used.
     var email = error.email;
     // The firebase.auth.AuthCredential type that was used.
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
