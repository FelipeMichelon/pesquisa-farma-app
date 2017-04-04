import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

import { InscricaoPage } from '../inscricao/inscricao';

@Component({
  selector: 'page-login-usuario',
  templateUrl: 'login-usuario.html'
})
export class LoginUsuarioPage {

  email: any;
  password: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public angFire: AngularFire,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {


    }//constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginUsuarioPage');
  }

  loginUsuario(){
    console.log("Login de usuário");
    this.angFire.auth.login({
      email: this.email,
      password: this.password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((response)=>{
      console.log('Logado com sucesso');
      let currentuser = {
        email: response.auth.email,
        picture: response.auth.photoURL
      };
      window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
      this.navCtrl.pop();
    }).catch((error)=>{
      console.log(error);
    })
  }//loginUsuario

  loginGoogle(){
    console.log("Login com o Google");

  }//loginGoogle

  loginFacebook(){
    console.log("Login com o Facebook");
  }//loginFacebook

  inscricao(){
    //console.log("Inscrição de usuário");
    let alerta = this.alertCtrl.create();
    alerta.setTitle('Tipo de inscrição');
    alerta.addInput({
      type: 'radio',
      label: 'Farmácia',
      value: 'Farmácia',
      checked: false
    });
    alerta.addInput({
      type: 'radio',
      label: 'Usuário',
      value: 'Usuário',
      checked: true
    });
    alerta.addButton('Cancelar');
    alerta.addButton({
      text: 'Ok',
      handler: data =>{
        let pgInscricao = this.modalCtrl.create(InscricaoPage, {escolha: data});
        pgInscricao.present();
      }
    });
    alerta.present();
  }//inscricao

  esqueciSenha(){
    console.log("Clicou em esqueci a senha");
  }//esqueciSenha


}
