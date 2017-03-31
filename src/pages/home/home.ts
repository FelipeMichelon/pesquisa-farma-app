import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginUsuarioPage } from '../login-usuario/login-usuario';

import { AngularFire } from 'angularfire2';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public angFire: AngularFire) {

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

  sair(){
    console.log("Logout");
    window.localStorage.removeItem('currentuser');
    this.angFire.auth.logout();
    this.navCtrl.push(LoginUsuarioPage);
  }//sair

  btnHome(){
    console.log("Clicou o botão logo de home.");
  }//btnHome

}
