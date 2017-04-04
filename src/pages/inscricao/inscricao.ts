import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-inscricao',
  templateUrl: 'inscricao.html'
})
export class InscricaoPage {

  tipoDeCadastro: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {

    this.tipoDeCadastro = this.navParams.get('escolha');

  }//constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscricaoPage');
  }

  fecharInscricao(){
    this.viewCtrl.dismiss();
  }

}
