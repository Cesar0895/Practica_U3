import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from "../welcome/welcome";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario;
  password;
  

  //2-creamos instancias de form group   y de abstract control encargados de administrar reglas
  formGroup: FormGroup;
  Nuser: AbstractControl;
  Npass: AbstractControl;
 
  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {//3-instancia form builde sirve para construir el form group
    this.formGroup = formBuilder.group({
      Nuser: ['', Validators.required], //4-validaciones
      Npass:['',Validators.required]
    
      //Nemail:[ 
    });
    //5-enlace para validacion y pasar al homehtml
    this.Nuser = this.formGroup.contains['Nuser'];
    this.Npass = this.formGroup.contains['Npass'];
   
  }

  gotoWelcome() {
   
      let data = {
        usuario: this.usuario,
        password: this.password,
        Nuser: this.Nuser,
        Npass: this.Npass
        
      };
      this.navCtrl.push(WelcomePage, data);
    
    
  }

}
