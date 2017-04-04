import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

import firebase from 'firebase';

@Component({
  selector: 'page-inscricao',
  templateUrl: 'inscricao.html'
})
export class InscricaoPage {

  public fireAuth: any;
  public userData: any;

  tipoDeCadastro: string;
  usuario: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public angFire: AngularFire) {

    this.tipoDeCadastro = this.navParams.get('escolha');
    this.usuario = [
      {nome: ''},
      {email: ''},
      {senha: ''},
    ];

    this.fireAuth = firebase.auth();
    this.userData = firebase.database().ref('/userData');

  }//constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscricaoPage');
  }

  fecharInscricao(){
    this.viewCtrl.dismiss();
  }

  entrarUsuario(){
    //console.log(this.usuario.nome);
    this.fireAuth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha)
      .then((newUser)=>{
        this.userData.child(newUser.uid).set({email: this.usuario.email});
      });
  }//entrarUsuario

}
