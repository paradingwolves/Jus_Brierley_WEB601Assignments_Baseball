import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { BaseballService } from '../services/baseball-service.service';
import { baseballCards } from '../helper-files/contentDb'; // import of a local array of content items
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent {
  @Output() contentAdded = new EventEmitter<Content>(); // event emitter to emit content added
  contentItems!: Content[]; // array of content items
  title: string; // title of content item
  description: string; // description of content item
  creator: string; // creator of content item
  imgURL: string; // image URL of content item
  type: string; // type of content item
  tags: string; // tags associated with content item
  
  constructor(private cdRef: ChangeDetectorRef, private dialogRef: MatDialogRef<MyDialogComponent>, private baseballService: BaseballService) {
    this.title = ''; // initializes title
    this.description = ''; // initializes description
    this.creator = ''; // initializes creator
    this.imgURL = ''; // initializes image URL
    this.type = ''; // initializes type
    this.tags = ''; // initializes tags
  }

  onCancelClick(): void { // function called when cancel button is clicked
    this.dialogRef.close(); // closes the dialog
  }

  onSubmitClick(): void { // function called when submit button is clicked
    const tagsArray = this.tags.split(',').map(tag => tag.trim()); // splits the tags string and removes white spaces

    const newContentItem: Content = { // creates a new content item object
      title: this.title, // sets the title of content item
      description: this.description, // sets the description of content item
      creator: this.creator, // sets the creator of content item
      imgURL: this.imgURL, // sets the image URL of content item
      type: this.type, // sets the type of content item
      tags: tagsArray, // sets the tags associated with content item
      id: baseballCards.length + 1 // generates a new ID for content item
    };

    this.baseballService.addContent(newContentItem).subscribe(newContentFromServer => { // calls addContent() function from service
      console.log("addContentToList()", newContentFromServer); // logs new content item from server
      this.cdRef.detectChanges(); // detects changes made to the content and updates the view
      this.dialogRef.close(); // closes the dialog
    });
  }
}
