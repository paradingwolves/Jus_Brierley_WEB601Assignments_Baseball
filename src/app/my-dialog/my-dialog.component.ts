import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { BaseballService } from '../services/baseball-service.service';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent {
  title: string;
  description: string;
  creator: string;
  imgURL: string;
  type: string;
  tags: string;
  
  constructor(private dialogRef: MatDialogRef<MyDialogComponent>, private baseballService: BaseballService) {
    this.title = '';
    this.description = '';
    this.creator = '';
    this.imgURL = '';
    this.type = '';
    this.tags = '';
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmitClick(): void {
    const tagsArray = this.tags.split(',').map(tag => tag.trim());

    const newContentItem: Content = {
      title: this.title,
      description: this.description,
      creator: this.creator,
      imgURL: this.imgURL,
      type: this.type,
      tags: tagsArray,
      id: null
    };

    this.baseballService.addContent(newContentItem).subscribe(newContentFromServer => {
      console.log("addContentToList()", newContentFromServer);

      this.dialogRef.close();
    });
  }
}
