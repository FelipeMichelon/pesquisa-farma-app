import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, ViewController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import 'rxjs/add/operator/map';
import { InscricaoPage } from '../inscricao/inscricao';

@Component({
  selector: 'page-login-usuario',
  templateUrl: 'login-usuario.html'
})
export class LoginUsuarioPage {

  email: any;
  password: any;
  pessoas: FirebaseListObservable<any>;
  item: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public angFire: AngularFire,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {

      this.pessoas = angFire.database.list('/userData');

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
      let currentuser = {
        email: response.auth.email,
        picture: response.auth.photoURL
      };
      let ID = response.auth.uid;
      console.log("Bem vindo: ", ID);
      //this.item = this.angFire.database.object('/userData/${ID}');
      console.log('/userData/${ID}');
      console.log('/userData/' + ID);
      this.item = this.angFire.database.object('/userData/' + ID);
      console.log(this.item);

      window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
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
    console.log("Clicou em esqueci a senha");
  }//esqueciSenha


}
