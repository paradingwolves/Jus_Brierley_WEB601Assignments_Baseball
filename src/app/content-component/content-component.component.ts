import { Component, OnInit } from '@angular/core';
/* import { ContentList } from '../helper-files/content-list'; */
import { Content } from '../helper-files/content-interface';
import { FilterContentByTypePipe } from '../filter-content-by-type.pipe';


@Component({
  selector: 'content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss']
})
export class ContentComponentComponent implements OnInit {
  contentItem:Content = {
    id: 1,
    title:"Hello",
    description:"test 1",
    creator:"Jables",
    imgURL:"https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1",
    type:"Meme",
    tags:["rick", "roll"]
  };
  contentItem2:Content = {
    id: 2,
    title:"Hello 2",
    description:"test 2",
    creator:"Jables",
    imgURL:"https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1",
    type:"Meme",
    tags:["rick", "roll"]
  };
  contentItem3:Content = {
    id: 3,
    title:"Hello 3",
    description:"test 3",
    creator:"Jables",
    imgURL:"https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1",
    type:"Meme",
    tags:["rick", "roll"]
  };
  contentItem4:Content = {
    id: 4,
    title:"Hello 4",
    description:"test 4",
    creator:"Jables",
    imgURL:"https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1",
    type:"Meme",
    tags:["rick", "roll"]
  };
  contentItem5:Content = {
    id: 5,
    title:"Hello 5",
    description:"test 5",
    creator:"Jables",
    imgURL:"https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1",
    type:"Meme",
    tags:["rick", "roll"]
  };
  contentItem6:Content = {
    id: 6,
    title:"Hello 6",
    description:"test 6",
    creator:"Jables",
    imgURL:"https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1",
    type:"Meme",
    tags:["rick", "roll"]
  };
  contentItem7:Content = {
    id: 7,
    title:"Hello 7",
    description:"test 7",
    creator:"Jables",
    imgURL:"https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1",
    type:"Serious",
    tags:["Serious", "stern"]
  };
  contentItem8:Content = {
    id: 8,
    title:"Hello 8",
    description:"test 8",
    creator:"Jables",
    imgURL:"https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1",
    type:"Serious",
    tags:["Serious", "stern"]
  };
  

  contentArray: Content[];
 
  
  constructor(){
    this.contentArray = [this.contentItem];
   /*  this.contentArray.push(this.contentItem); */
    this.contentArray.push(this.contentItem2);
    this.contentArray.push(this.contentItem3);
    this.contentArray.push(this.contentItem4);
    this.contentArray.push(this.contentItem5);
    this.contentArray.push(this.contentItem6);
    this.contentArray.push(this.contentItem7);
    this.contentArray.push(this.contentItem8);
  }

  ngOnInit(): void {
   
    }
    
} 
