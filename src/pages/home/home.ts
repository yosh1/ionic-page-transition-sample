import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NextPage } from '../next/next';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onClick(){
    this.navCtrl.push(NextPage);
  }
}
