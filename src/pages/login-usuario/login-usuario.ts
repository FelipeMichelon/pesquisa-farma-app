import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-login-usuario',
  templateUrl: 'login-usuario.html'
})
export class LoginUsuarioPage {


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public angFire: AngularFire) {


    }//constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginUsuarioPage');
  }

  loginUsuario(){
    console.log("Login de usuário");
  }//loginUsuario

  loginGoogle(){
    console.log("Login com o Google");
  }//loginGoogle

  loginFacebook(){
    console.log("Login com o Facebook");
  }//loginFacebook

  inscricao(){
    console.log("Inscrição de usuário");
  }//inscricao

  esqueciSenha(){
    console.log("Clicou em esqueci a senha");
  }//esqueciSenha


}
