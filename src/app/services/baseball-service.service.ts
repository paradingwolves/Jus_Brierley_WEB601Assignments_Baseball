import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { MessageService } from './messagesservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseballService {
  contentUpdated = new EventEmitter<Content[]>(); // create an EventEmitter to notify ContentListComponent
  
  constructor(private http: HttpClient, private messageService: MessageService){}

  // Get a list of content items.
  getBaseballCards() : Observable<Content[]> {
    this.messageService.add('Content array loaded!');
    console.log(this.http.get<Content[]>("api/content"))
    return this.http.get<Content[]>("api/content");
  }

  // HTTP request options, used for adding and updating content items.
  private httpOptions = {
    headers: new HttpHeaders(
      { 
        'Content-type': 'application/json' 
      }
    ) 
  };
  
  // Add a new content item.
  addContent(newContentItem: Content): Observable<Content> {
    this.messageService.add('New Content has been added with: ' + newContentItem.title);
    console.log("safe measure", newContentItem);
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions)
      .pipe(
        tap(() => this.contentUpdated.emit()) // emit an event to notify ContentListComponent to update view
      );
  }

  // Update an existing content item.
  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions)
      .pipe(
        tap(() => this.contentUpdated.emit()) // emit an event to notify ContentListComponent to update view
      );
  }
}
