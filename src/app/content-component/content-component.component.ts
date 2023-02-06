import { Component, OnInit } from '@angular/core';
/* import { ContentList } from '../helper-files/content-list'; */
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss']
})
export class ContentComponentComponent implements OnInit {
  /* contentItem:Content = {
    id:1,
    title:"Most Errors on one play",
    description:"Gareth Allen Made 4 Errors on one play",
    creator:"Justin",
    type:"Baseball Card"
  }
  contentItem2:Content = {
    id:2,
    title:"Joey Gallo strikes out against pitcher throwing literal beach balls",
    description:"Joey Gallo and his incredible bat-to-ball skills were on full display tonight when Sister Jean struck him out on 3 straight pitches. Yes. She was throwing a beach ball.",
    creator:"Justin",
    type:"Baseball Card"
  }
  contentItem3:Content = {
    id:3,
    title:"Largest Earthquake Caused by a Leftfielder",
    description:"Casey Carpenter (6'3, 320LBs) was pursuing a ball that was hit over his head. In his pursuit, he tripped and fell at full speed causing a magnitude 3 earthquake in the Riverside area. ",
    creator:"Justin",
    type:"Baseball Card"
  } */
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

  contentArray: Content[];
 
  
  constructor(){
    this.contentArray = [this.contentItem];
   /*  this.contentArray.push(this.contentItem); */
    this.contentArray.push(this.contentItem2);
    this.contentArray.push(this.contentItem3);
    this.contentArray.push(this.contentItem4);
    this.contentArray.push(this.contentItem5);
    this.contentArray.push(this.contentItem6);
  }

  ngOnInit(): void {
   
    }
    
} 
