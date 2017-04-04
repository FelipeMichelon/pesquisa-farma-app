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

  inscricao(){
    console.log("Inscricao de usuario/farmacia.");
    let alert = this.alertCtrl.create();
    alert.setTitle("Escolha de inscrição.");

    alert.addInput({
      type: 'radio',
      label: 'Farmácia',
      value: 'farmacia',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Usuário',
      value: 'usuario',
      checked: true
    });
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Ok',
      handler: data =>{
        console.log(data);
        let telaInsc = this.modalCtrl.create(InscricaoPage);
        telaInsc.present();
      }
    });
    alert.present();
  }//inscricao

  esqueciSenha(){
    console.log("Clicou em esqueci a senha");
  }//esqueciSenha


}
