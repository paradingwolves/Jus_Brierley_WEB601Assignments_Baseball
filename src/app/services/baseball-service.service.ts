import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { baseballCards } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class BaseballService {
  constructor() { }

  getBaseballCards(): Observable<Content[]> {
    return of(baseballCards);
  }
  getContentById(id: number): Observable<Content | undefined> {
    const content = baseballCards.find(c => c.id === id);
    return of(content);
  }
}
