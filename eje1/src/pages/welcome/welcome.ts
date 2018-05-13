import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  public user;
  public pass;
  public use;
  public pas;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user=this.navParams.get('usuario');
    this.pass=this.navParams.get('password');
    this.pas=this.navParams.get('Npass');
    this.use=this.navParams.get('Nuser');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
