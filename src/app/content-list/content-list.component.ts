import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{
  @Input() content: Content;
  constructor() {
    this.content = {
      id: 1,
      title:"Hello 1",
      description:"test 1",
      creator:"Jables",
      imgURL:"https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1",
      type:"Meme",
      tags:["rick", "roll"]
    };
  }

  ngOnInit(): void {
  

  }
  imageText() {
    console.log("image url: " + this.content.imgURL + "Image Title:" + this.content.title);
  }
}
