import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

var config = {
  apiKey: "AIzaSyBt1l5PWBiOlPVfmvot3l0UvrD-zLb4_NI",
  authDomain: "proyectou3-c677a.firebaseapp.com",
  databaseURL: "https://proyectou3-c677a.firebaseio.com",
  projectId: "proyectou3-c677a",
  storageBucket: "proyectou3-c677a.appspot.com",
  messagingSenderId: "370448692066"
};




@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule, 
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
