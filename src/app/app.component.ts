import { Component } from '@angular/core';
import { Content } from '../app/helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

}
