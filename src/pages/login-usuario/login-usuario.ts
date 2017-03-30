import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-login-usuario',
  templateUrl: 'login-usuario.html'
})
export class LoginUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginUsuarioPage');
  }

  loginUsuario(){
    console.log("Login de usuário");
  }
  loginFacebook(){
    console.log("Login com Facebook");
  }
  loginGoogle(){
    console.log("Login com Google");
  }
  inscricao(){
    console.log("Inscrição de usuário");
  }
  esqueciSenha(){
    console.log("Esqueci a senha");
  }

}
