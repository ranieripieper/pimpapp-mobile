import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { UsersAPI } from '../../providers/users-api';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-ErrorPage',
  templateUrl: 'ErrorPage.html',
})
export class ErrorPage {

  usuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: UsersAPI, public loading: LoadingController, 
    public alertCtrl: AlertController) {


  }

  goBack(){
      this.navCtrl.setRoot(TabsPage);
      this.navCtrl.popToRoot();
  }
}
