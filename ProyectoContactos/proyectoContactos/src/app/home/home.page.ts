import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  filtro: string = '';
  data: any;

  constructor() {}

  ionViewDidEnter() {
    this.fetchAndProcessData();
  }

  fetchAndProcessData() {
    fetch('../../assets/data/datos.json')
      .then(res => res.json())
      .then(json => {
        console.log("OUTPUT: ", json);
        this.data = json;
      })
  }
}