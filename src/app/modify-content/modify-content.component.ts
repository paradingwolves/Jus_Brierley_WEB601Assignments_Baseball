// Import required modules and components
import { Component, OnInit } from '@angular/core';
import { ContentListComponent } from '../content-list/content-list.component';
import { Content } from '../helper-files/content-interface';
import { BaseballService } from '../services/baseball-service.service';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {

  // Define component properties
  contentItems!: Content[];
  title: string = '';
  description: string = '';
  creator: string = '';
  imgURL: string = '';
  type: string = '';
  tags: string = '';

  // Inject dependencies in component's constructor
  constructor(private baseballService: BaseballService, private contentComponent: ContentListComponent, private dialog: MatDialog) { }

  ngOnInit(): void {
    // Retrieve content from the server using BaseballService
    this.baseballService.getBaseballCards().subscribe(contentItemsFromServer => {
      this.contentItems = contentItemsFromServer;
    });
  }

  /* // Define method to add new content to the list
  addContentToList(): void {
    // Split tags by comma and remove extra whitespaces
    const tagsArray = this.tags.split(',').map(tag => tag.trim());

    // Create new content object with user input
    const newContentItem: Content = {
      id: this.contentComponent.baseballCards.length + 1,
      title: this.title,
      description: this.description,
      creator: this.creator,
      imgURL: this.imgURL,
      type: this.type,
      tags: tagsArray
    };

    // Add new content to the server using BaseballService
    this.baseballService.addContent(newContentItem).subscribe(newContentFromServer => {
      // Add new content to the baseballCards array of ContentListComponent
      this.contentComponent.baseballCards.push(newContentFromServer);
      // Update the view of ContentListComponent
      this.contentComponent.baseballCards = [...this.contentComponent.baseballCards];

      // Clear input fields
      this.title = '';
      this.description = '';
      this.creator = '';
      this.imgURL = '';
      this.type = '';
      this.tags = '';
    });
  } */

  // Define method to open dialog component
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent);
  }
}
