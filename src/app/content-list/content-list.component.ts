import { Component, EventEmitter, OnInit, Output } from '@angular/core';
/* import { ContentList } from '../helper-files/content-list'; */
import { Content } from '../helper-files/content-interface';
import { BaseballService } from '../services/baseball-service.service';



@Component({
  selector: 'content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  filteredString:any = '';
  searchTerm: string = '';
  message: string = '';
  messageColor: string = '';



 baseballCards: Content[] = [];
 
  
  constructor(private baseballService: BaseballService){

  }
/*   search() {
    const content = this.contentArray.find(c => c.title.toLowerCase().substring(0,  this.searchTerm.length) === this.searchTerm.toLowerCase());
    console.log(this.searchTerm);
    if (content) {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" found.`;
      this.messageColor = 'green';
      
    } else {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" not found.`;
      this.messageColor = 'red';
    }
  } */
  ngOnInit(): void {
    this.getBaseballCards();
  }
  getBaseballCards(): void {
    this.baseballService.getBaseballCards()
      .subscribe(cards => this.baseballCards = cards);
  }
    
} 













