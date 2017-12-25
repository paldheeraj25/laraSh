import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GroceryDataProvider } from '../../providers/grocery-data/grocery-data'

/**
 * Generated class for the GroceryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grocery',
  templateUrl: 'grocery.html',
})
export class GroceryPage {

  public grocery: any = this.navParams.data;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public groceryDataProvider: GroceryDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroceryPage');
    console.log(this.grocery);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  deliveres(event) {
    this.groceryDataProvider.updateDelivery(event._id).subscribe(res => {
      this.closeModal();
    });
  }
}
