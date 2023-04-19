import {Component, Input, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { Content } from './helper-files/content-interface';
import { BaseballService } from './services/baseball-service.service';
import { MessageService } from './services/messagesservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  featuredContent?: Content;
  selectedId: number = 0;
  @Input() selectedContent?: Content;
  errorMessage: string = '';

  constructor(private baseballService: BaseballService, private messageService: MessageService, private router: Router) {  }

  ngOnInit() {
    const id = 8;
    //this.musicService.getContentById(id).subscribe(content => {
    //  this.featuredContent = content;
    //});
  }

  navigateToList() {
    this.router.navigate(['/list']);
  }


  getCards() {
    // clear the old error message when you click the button again
    this.errorMessage = '';

    // validation
    if (this.selectedId === undefined || isNaN(this.selectedId) || this.selectedId < 1) {
      this.errorMessage = 'Error: Please enter a valid ID number.';
      return;
    }

  
  }
}