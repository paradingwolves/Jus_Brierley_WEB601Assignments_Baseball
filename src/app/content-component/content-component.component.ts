import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss']
})
export class ContentComponentComponent implements OnInit{
  // Define input property for the component to receive content data
  @Input() content: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
  };
  
  constructor() {
  }
  
  ngOnInit(): void {
    // lifecycle hook - runs when component is initialized
  }

  // Method to log image URL and Title to console
  imageText() {
    console.log("image url: " + this.content.imgURL + "Image Title:" + this.content.title);
  }
}
