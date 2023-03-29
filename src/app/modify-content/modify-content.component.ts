import { Component, OnInit  } from '@angular/core';
import { ContentListComponent } from '../content-list/content-list.component';
import { Content } from '../helper-files/content-interface';
import { BaseballService } from '../services/baseball-service.service';

@Component({
  selector: 'modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  contentItems!: Content[];
  title: string = '';
  description: string = '';
  creator: string = '';
  imgURL: string = '';
  type: string = '';
  tags: string = '';

  constructor(private baseballService: BaseballService, private contentComponent: ContentListComponent) { }

  ngOnInit(): void {
    this.baseballService.getBaseballCards().subscribe(contentItemsFromServer => {
      this.contentItems = contentItemsFromServer;
    });
  }

  addContentToList(): void {
    const tagsArray = this.tags.split(',').map(tag => tag.trim());

    const newContentItem: Content = {
      id: this.contentComponent.baseballCards.length + 1,
      title: this.title,
      description: this.description,
      creator: this.creator,
      imgURL: this.imgURL,
      type: this.type,
      tags: tagsArray
    };

    this.baseballService.addContent(newContentItem).subscribe(newContentFromServer => {
      this.contentComponent.baseballCards.push(newContentFromServer);
      // adding something to update the view so that I can see my new band
      this.contentComponent.baseballCards = [...this.contentComponent.baseballCards];

      this.title = '';
      this.description = '';
      this.creator = '';
      this.imgURL = '';
      this.type = '';
      this.tags = '';
    });
  }
}