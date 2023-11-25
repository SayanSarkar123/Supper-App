import { Component } from '@angular/core';
import {faFacebook,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faHome,faCartPlus} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faFacebook=faFacebook;
  faInstagram=faInstagram;
  faLinkedin=faLinkedin;
  faHome=faHome;
  faCartPlus=faCartPlus;
}
