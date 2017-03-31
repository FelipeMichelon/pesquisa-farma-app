import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginUsuarioPage } from '../login-usuario/login-usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    window.localStorage.removeItem('currentuser');
    if(!this.estaLogado()){
      console.log("Você não está logado.");
      this.navCtrl.push(LoginUsuarioPage);
    }

  }//constructor

  estaLogado(){
    if(window.localStorage.getItem('currentuser')){
      return true;
    }
  }//estaLogado

  btnHome(){
    console.log("Clicou o botão logo de home.");
  }//btnHome

}
