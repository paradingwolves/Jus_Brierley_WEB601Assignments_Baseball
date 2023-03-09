import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { baseballCards } from '../helper-files/contentDb';
import { MessageService } from './messagesservice.service';


@Injectable({
  providedIn: 'root'
})
export class BaseballService {

  constructor(private messageService: MessageService) { } // Injecting MessageService in the constructor

  // Method to return the list of baseball cards
  getBaseballCards(): Observable<Content[]> {
    const cards = of(baseballCards); // Creating an Observable of the mock baseball cards
    this.messageService.add('CardService: Content Array Loaded! :D'); // Adding a message to the MessageService
    return of(baseballCards); // Returning the Observable of the mock baseball cards
  }

  // Method to return a specific content based on an id
  getContentById(id: number): Observable<Content | undefined> {
    const content = baseballCards.find(c => c.id === id); // Finding the content with the specified id
    if (content) { // If the content is found
      this.messageService.add(`CardService: Found content with id=${id}`); // Adding a message to the MessageService
    } else { // If the content is not found
      this.messageService.add(`CardService: Content with id=${id} not found`); // Adding a message to the MessageService
    }
    return of(content); // Returning an Observable of the found content or undefined
  }
}