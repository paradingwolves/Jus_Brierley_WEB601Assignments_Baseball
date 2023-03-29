import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { baseballCards } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // setting it to the value of our array of content
    const content : Content[] = baseballCards;
    console.log(content);
    return {content}; 
    
  }

  genId(content: Content[]): number {
    const maxId = content.reduce((prev, current) => {
        const id = current.id ?? 0; // Use 0 as default value if id is null or undefined
        return id > prev ? id : prev;
    }, 0);
    return maxId + 1;
  }

}
