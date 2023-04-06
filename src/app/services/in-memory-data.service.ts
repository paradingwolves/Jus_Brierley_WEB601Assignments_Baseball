// Import the necessary modules and dependencies from Angular and our application
import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { baseballCards } from '../helper-files/contentDb';

// Mark this service as injectable and provide it at root level
@Injectable({
providedIn: 'root'
})
// Define class for the service and implement InMemoryDbService interface
export class InMemoryDataService implements InMemoryDbService {
// Implement createDb method to create our in-memory database
createDb() {
// Set content variable to the value of our array of content
let content : Content[] = baseballCards;
// Log the content array to console for debugging purposes
console.log("in memory service", content);
// Return an object containing the content array
return {content};
}

// Define genId method to generate unique ids for content items
genId(content: Content[]): number {
// Reduce the content array to find the maximum id value
const maxId = content.reduce((prev, current) => {
const id = current.id ?? 0; // Use 0 as default value if id is null or undefined
return id > prev ? id : prev;
}, 0);
// Return the maximum id value + 1 as the new id for the content item
return maxId + 1;
}
}