import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-inscricao',
  templateUrl: 'inscricao.html'
})
export class InscricaoPage {

  tipoDeCadastro: string;
  usuario: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {

    this.tipoDeCadastro = this.navParams.get('escolha');
    this.usuario = [
      {nome: 'teste'},
      {email: ''},
      {senha: ''},
      {endereco: ''},
    ];

  }//constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscricaoPage');
  }

  fecharInscricao(){
    this.viewCtrl.dismiss();
  }

  entrarUsuario(){
    console.log(this.usuario.nome);
  }

}
