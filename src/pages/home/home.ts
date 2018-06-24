import { Component } from '@angular/core';
import { NavController ,Platform} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
state: string = "";
state1: string = "";
  constructor(public navCtrl: NavController ,private geolocation: Geolocation ,
    public platform: Platform) {


      this.platform.ready().then(() => { 
      	 var options = {
        timeout: 25000
      };

        this.geolocation.getCurrentPosition(options).then((resp) => {
          // resp.coords.latitude
          // resp.coords.longitude

          this.state+="-"+resp;
          this.state1 ="-"+resp.coords.longitude;
         }).catch((error) => {
          this.state+="-"+error.message;
        });
      });


  }



}
