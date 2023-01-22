import { Component } from '@angular/core';
import { Content } from '../app/helper-files/content-interface';
import { Example } from '../app/helper-files/interface-example'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  example:Example = {
    title: 'Jus_Brierley_WEB601Assignments_Baseball',
    name: "Justin Brierley"
  }
}
