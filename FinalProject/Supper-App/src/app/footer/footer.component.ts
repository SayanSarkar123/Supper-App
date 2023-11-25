import { Component } from '@angular/core';
import {faFacebook,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faHome,faCartPlus,faList} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faFacebook=faFacebook;
  faInstagram=faInstagram;
  faLinkedin=faLinkedin;
  faHome=faHome;
  faCartPlus=faCartPlus;
  faList=faList;

}
