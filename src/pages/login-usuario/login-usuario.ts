import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, ViewController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import 'rxjs/add/operator/map';
import { InscricaoPage } from '../inscricao/inscricao';
import firebase from 'firebase';

@Component({
  selector: 'page-login-usuario',
  templateUrl: 'login-usuario.html'
})
export class LoginUsuarioPage {

  ID: any;
  currentuser: any;
  email: any;
  password: any;
  pessoas: FirebaseListObservable<any>;
  item: FirebaseObjectObservable<any>;

  public fireAuth: any;
  public userData: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public angFire: AngularFire,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {

      this.pessoas = angFire.database.list('/userData');

      this.fireAuth = firebase.auth();
      this.userData = firebase.database().ref('/userData');

    }//constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginUsuarioPage');
  }

  loginUsuario(){
    this.angFire.auth.login({
      email: this.email,
      password: this.password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((response)=>{
      //console.log('Logado com sucesso');
      this.currentuser = {
        email: response.auth.email,
        picture: response.auth.photoURL
      };
      this.ID = response.auth.uid;
      console.log("Bem vindo: ", this.ID);
      //console.log(currentuser);
      window.localStorage.setItem('currentuser', JSON.stringify(this.currentuser));
      this.navCtrl.pop();
    }).catch((error)=>{
      console.log(error);
    })
  }//loginUsuario

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
        pgInscricao.onDidDismiss((data)=>{
          console.log("Login usuario page: ", data);
          if(data!=''){
            this.viewCtrl.dismiss();
          }
        });
        pgInscricao.present();
      }
    });
    alerta.present();
  }//inscricao

  esqueciSenha(){
    //console.log("Clicou em esqueci a senha");
    let info = this.alertCtrl.create({
      title: 'Redefinir senha',
      inputs: [
        {
          name: 'email',
          placeholder: 'Digite aqui o e-mail cadastrado'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Ok',
          handler: data => {
            //console.log(data.email);
            this.fireAuth.sendPasswordResetEmail(data.email);
          }
        }
      ]
    });
    info.present();
  }//esqueciSenha


}
