import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { MessageService } from './messagesservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BaseballService {
  constructor(private http: HttpClient, private messageService: MessageService){}


  getBaseballCards() : Observable<Content[]> {
    this.messageService.add('Content array loaded!');
    return this.http.get<Content[]>("api/content");
  }

  private httpOptions = {
    headers: new HttpHeaders(
      { 
        'Content-type': 'application/json' 
      }
    ) 
  };
  

  addContent(newContentItem: Content): Observable<Content> {
    this.messageService.add('New Content has been added with: ' + newContentItem.title);
    console.log("service", newContentItem);
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions);
  }
}