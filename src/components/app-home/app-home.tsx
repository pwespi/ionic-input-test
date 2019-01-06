import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
      
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-input value="Input"></ion-input>
                <ion-label text-right>Label</ion-label>
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-item>
                <ion-label>Label</ion-label>
                <ion-input text-right value="Input"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>

      </ion-content>
    ];
  }
}
