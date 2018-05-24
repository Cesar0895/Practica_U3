import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { OffLine } from '../pages/offline/offline';

import { AuthProvider } from '../providers/auth/auth'; 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
  private auth: AuthProvider) {
    platform.ready().then(() => {
      this.auth.Session.subscribe(session=>{
        if(session){
          this.rootPage = HomePage;
        }else{
          this.rootPage = LoginPage;
        }
      });
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

