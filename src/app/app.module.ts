import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginUsuarioPage } from '../pages/login-usuario/login-usuario';
import { InscricaoPage } from '../pages/inscricao/inscricao';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyD5iXNHhnC6ORYdXnWeVGvXcDLEjW0CwnI",
  authDomain: "pesquisa-farma-app-ae78a.firebaseapp.com",
  databaseURL: "https://pesquisa-farma-app-ae78a.firebaseio.com",
  storageBucket: "pesquisa-farma-app-ae78a.appspot.com",
  messagingSenderId: "586401585547"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginUsuarioPage,
    InscricaoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginUsuarioPage,
    InscricaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
