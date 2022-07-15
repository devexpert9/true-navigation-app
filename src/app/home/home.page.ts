import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocationPage } from '../location/location.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public modalController: ModalController) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: LocationPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  ionViewDidEnter() {
    this.presentModal();
  }
  ngOnInit() {
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 10,
    slidesPerView:2.2
  };
}
