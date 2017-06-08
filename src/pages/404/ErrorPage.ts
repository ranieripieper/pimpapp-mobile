import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController, Platform } from 'ionic-angular';

import { UsersAPI } from '../../providers/users-api';

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
}
