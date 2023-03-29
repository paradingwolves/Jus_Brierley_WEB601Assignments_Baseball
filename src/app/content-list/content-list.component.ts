import { Component, EventEmitter, OnInit, Output } from '@angular/core';
/* import { ContentList } from '../helper-files/content-list'; */
import { Content } from '../helper-files/content-interface';
import { BaseballService } from '../services/baseball-service.service';



@Component({
  selector: 'content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
// Define class for the component and implement OnInit interface
export class ContentListComponent implements OnInit {

  // Define properties of the component
  filteredString:any = '';
  searchTerm: string = '';
  message: string = '';
  messageColor: string = '';
  baseballCards: Content[] = [];
  
  // Inject BaseballService into the component's constructor
  constructor(private baseballService: BaseballService){ }

  // Define search method to search for content based on user input
  search() {
    // Find content that matches user input
    const content = this.baseballCards.find(c => c.title.toLowerCase().substring(0,  this.searchTerm.length) === this.searchTerm.toLowerCase());
    
    // If content is found, display success message in green
    if (content) {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" found.`;
      this.messageColor = 'green';
    } 
    // If content is not found, display failure message in red
    else {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" not found.`;
      this.messageColor = 'red';
    }
  }

  // Implement OnInit interface method to retrieve baseball cards data
  ngOnInit() {
    this.baseballService.getBaseballCards().subscribe(items => {
      this.baseballCards = items;
    });
  }

 /*  // Define getBaseballCards method to get baseball cards data from BaseballService
  getBaseballCards(): void {
    this.baseballService.getBaseballCards()
      .subscribe(cards => this.baseballCards = cards);
  }  
  addContentToList(newContentItem: Content): void { 
    this.baseballService.addContent(newContentItem)
    .subscribe(newContentFromServer => this.baseballCards
      .push(newContentFromServer)
    ); 
    console.log(newContentItem)
  }

  updateContentInList(contentItem: Content): void {
    this.baseballService.updateContent(contentItem)
    .subscribe(() =>
    console.log("Content updated successfully")
    );
  } */
  
  
}













