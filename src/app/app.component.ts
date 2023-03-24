import { Component, OnInit } from '@angular/core';
import { BaseballService } from './services/baseball-service.service';
import { Content } from './helper-files/content-interface';
import { ContentComponentComponent } from './content-component/content-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  card: Content | undefined; // Initializing a variable to hold the content of a baseball card
  
  constructor(private baseballService: BaseballService) {}

  ngOnInit() {
    /* // Calling the getContentById method of the BaseballService to get the content of a baseball card with id 8
    this.baseballService.getContentById(8).subscribe(
      (card: Content | undefined) => {
        this.card = card; // Assigning the content to the card variable
        if(this.card){
          this.card.type = "selectedCard"; // Changing the type of the card to "selectedCard" if the card exists
        }
      }
    ); */
  }
}

