import { Component, Output, EventEmitter} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  id:number = 0;
  title: string = '' ;
  description: string = '';
  creator: string = '';
  imgURL: string = '';
  type: string = '';
  tags: string = '';
  errorMessage: string = '';
  errorMessageColor = 'red';

  @Output() contentCreated = new EventEmitter<Content>();

  onSubmit(): Promise<Content> {
    return new Promise((resolve, reject) => {
      if (!this.id || !this.title || !this.description || !this.creator || !this.type) {
        this.errorMessage = 'Please fill out all required fields';
        reject(new Error(this.errorMessage));
      } else {
        this.errorMessage = '';
        const content: Content = {
          id: this.id,
          title: this.title,
          description: this.description,
          creator: this.creator,
          imgURL: this.imgURL,
          type: this.type,
          tags: this.tags.split(',')
        };
        this.contentCreated.emit(content);
        this.id = 0;
        this.title = '';
        this.description = '';
        this.creator = '';
        this.imgURL = '';
        this.type = '';
        this.tags = '';
        console.log(content);
        console.log(typeof this.id);
        resolve(content);
      }
    });
  }
}
