import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss']
})
export class ContentComponentComponent implements OnInit {
  contentItem:Content = {
    id:1,
    title:"Most Errors on one play",
    description:"Gareth Allen Made 4 Errors on one play",
    creator:"Justin"
  }
  contentItem2:Content = {
    id:2,
    title:"Joey Gallo strikes out against pitcher throwing literal beach balls",
    description:"Gareth Allen Made 4 Errors on one play",
    creator:"Justin"
  }
  contentItem3:Content = {
    id:3,
    title:"Most Errors on one play",
    description:"Gareth Allen Made 4 Errors on one play",
    creator:"Justin"
  }
  myContent = new ContentList(this.contentItem)
  contentList = this.myContent.getContent();
  
  constructor() {
    this.myContent.add(this.contentItem);
    this.myContent.add(this.contentItem2);
    this.myContent.add(this.contentItem3);
    console.log(this.myContent);
    this.myContent.displayAtIndex(1);
    
    
    
    
  }

  ngOnInit(): void {
    
  }
} 
