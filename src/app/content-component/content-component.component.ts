
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss']
})
export class ContentComponentComponent implements OnInit{
  @Input() content: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
  };
  
  
  constructor() {
  
  }
  

  ngOnInit(): void {
    

  }

  

  imageText() {
    console.log("image url: " + this.content.imgURL + "Image Title:" + this.content.title);
  }
 
}
