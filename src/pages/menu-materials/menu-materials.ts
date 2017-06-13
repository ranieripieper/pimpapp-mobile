import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CansPage } from './cans/cans';
import { ErrorPage } from './../404/ErrorPage';

@Component({
  selector: 'menu-materials',
  templateUrl: 'menu-materials.html',
})
export class MenuMaterials {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController) {
  }

  openPage(page){
    switch (page){
      case 'cans':
          this.navCtrl.push(CansPage);
      break;
    }
  }

   errorpage(){
    this.navCtrl.push(ErrorPage);
  }

}
