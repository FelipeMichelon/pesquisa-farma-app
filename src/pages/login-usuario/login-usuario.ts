import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';


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
    public alertCtrl: AlertController) {


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
    console.log("Inscrição de usuário");
  }//inscricao

  esqueciSenha(){
    console.log("Clicou em esqueci a senha");
  }//esqueciSenha


}
