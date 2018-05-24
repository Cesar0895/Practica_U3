import { Component } from '@angular/core';
import { NavController, ActionSheetController, ModalController,AlertController  } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dato: any;
 constructor(public navCtrl: NavController,public auth : AuthProvider,public modalCtrl: 
 ModalController,public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController) {
   this.dato = this.auth.usuario();
 }
 LogoRedes(pro: String): String{
   if(pro=="google.com"){
     return "logo-google";
   }
   if(pro=="facebook.com"){
     return "logo-facebook";
   }
   if(pro=="twitter.com"){
     return "logo-twitter";
   }
   return "mail";
 }

 ionViewCanEnter(){
  this.auth.obtenerDatos().then(function(result) {
   if (result.credential) {
     console.log('Ingreso');
     var credential = result.credential;
     var user = result.user;
   }
   }).catch(function(error) {

   });
   return true;
 }
 mensage(men: String){
   this.alertCtrl.create({
     title: 'Error',
     subTitle: men+'',
     buttons: ['Aceptar']
   }).present();
 }
  socialNetwork(){
   var clase = this;
   this.actionSheetCtrl.create({
     title: 'Login con Redes Sociales',
     enableBackdropDismiss: true,
     buttons: [
       {
         text: 'Google',
         role: 'destructive',
         icon: 'logo-google',
         handler: ()=>{
           var a = this.auth;
           this.auth.asociarCuentas('google').then(function(result) {
             var credential = result.credential;
             var user = result.user;
           }).catch(function(error) {
             clase.mensage('Esta cuenta ya esta vinculada');
           });
         }
       },
       {
         text: 'Facebook',
         icon:'logo-facebook',
         handler: ()=>{
this.auth.asociarCuentas('facebook').then(function(result) {
    
             var credential = result.credential;
             var user = result.user;
             // ...
           }).catch(function(error) {
             clase.mensage('Esta cuenta ya esta vinculada');
           });
         }
       },
       {
         text: 'Twiter',
         icon:'logo-twitter',
         handler: ()=>{
           this.auth.asociarCuentas('twitter').then(function(result) {
             var credential = result.credential;
             var user = result.user;
           }).catch(function(error) {
             clase.mensage('Esta cuenta ya esta vinculada');
           });
}
       },
       {
         text: 'Correo',
         icon:'logo-email',
         handler: ()=>{
           var datos = {email:"",password:""};
           let prompt = this.alertCtrl.create({
             title: 'Login',
             message: "Introduce un nuevo nombre para el album",
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
             ],
             buttons: [
               {
                 text: 'Cancel',
                 handler: data => {
                   console.log('Cancel clicked');
                 }
               },
               {
                 text: 'Login',
                 handler: data => {
                   if(data.Usuario!="" && data.Password!=""){
                   this.auth.asociarCuentas('correo',data.Usuario,data.Password).then(function(result) {
                     var credential = result.credential;
                     var user = result.user;
                    
                   }).catch(function(error) {
                     clase.mensage('Verifica los datos');
                   });
                 }else{
                   clase.mensage('No puede haber campos vacios');
                 }
                 }
               }
             ]
           });
           prompt.present();
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   }).present();
 }

 desvincular(provedorID: any){
   this.auth.desAsociar(provedorID).then(function() {
     this.mensage(provedorID+" Desvinculado");
   }).catch(function(error) {
   });
 }
}

