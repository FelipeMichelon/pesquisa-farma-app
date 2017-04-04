import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-inscricao',
  templateUrl: 'inscricao.html'
})
export class InscricaoPage {

  tipoDeCadastro: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {



  }//constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscricaoPage');
  }

}
