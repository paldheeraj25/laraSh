import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { GroceryDataProvider } from '../../providers/grocery-data/grocery-data';

import { GroceryPage } from '../grocery/grocery';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public date: string;
  public orders: any;
  public list: string = '';

  constructor(public navCtrl: NavController, public groceryDataProvider: GroceryDataProvider, public modal: ModalController) {
    this.getGroceryData();
  }

  getGroceryData() {
    if (!this.date) {
      var now = new Date();
      this.date = now.getDate().toString() + '-' + (now.getMonth() + 1).toString() + '-' + now.getFullYear().toString();
    }
    this.loadgroceryOrders(this.date);
  }

  loadgroceryOrders(date) {
    this.groceryDataProvider.getGroceryOrders(date).subscribe(res => {
      console.log(res);
      this.orders = res;
    })
  }

  onChange(event) {
    let groceryView = this.modal.create(GroceryPage, event);
    groceryView.onDidDismiss(data => {
      this.loadgroceryOrders(this.date);
    });
    groceryView.present();
  }

  refreshList() {
    this.loadgroceryOrders(this.date);
  }
}
