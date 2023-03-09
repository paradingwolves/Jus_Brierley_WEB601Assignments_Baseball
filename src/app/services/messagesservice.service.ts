import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = []; // Initializing an empty array of messages

  // Method to add a message to the messages array
  add(message: string) {
    this.messages.push(message); // Pushing the new message to the messages array
  }

  // Method to clear the messages array
  clear() {
    this.messages = []; // Setting the messages array to an empty array
  }
}