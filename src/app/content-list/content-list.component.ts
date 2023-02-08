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
      title:"Most Errors on One Play",
      description:"On July 27 1988, Yankees starting pitcher Tommy John made not 1, not 2, but 3 errors on a single play. During  the top of the fourth inning, John faced Milwaukee left fielder Jeffrey Leonard with a man on first and one out. Leonard tapped one to the first-base side of the mound for what looked to be an easy out. John moved quickly, getting to the ball in plenty of time ... at which point the wheels started to come off.",
      creator:"Jables",
      imgURL:"https://media.wbur.org/wp/2019/09/Lead-photo-1000x700.jpg",
      type:"Blunders",
      tags:["Tommy John", "Blunder", "Errors", "MLB"]
    },
    {
        id: 2,
        title:"Most Errors in a Game by a Single Player",
        description:"The most errors by a player in a game is 9 by 2nd baseman Andy Leonard of the Boston Red Caps in 1876.",
        creator:"Jables",
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/c/c4/Andy_Leonard.jpg",
        type:"Blunders",
        tags:["MLB", "Blunder", "Boston Red Caps","Record", "Boston", "Andy Leonard", "Errors", "Most Errors in a Game"]
    };
  }
  

  ngOnInit(): void {
  

  }
  imageText() {
    console.log("image url: " + this.content.imgURL + "Image Title:" + this.content.title);
  }
 
}
