import { Component, EventEmitter, OnInit, Output } from '@angular/core';
/* import { ContentList } from '../helper-files/content-list'; */
import { Content } from '../helper-files/content-interface';



@Component({
  selector: 'content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss']
})
export class ContentComponentComponent implements OnInit {
  filteredString:any = '';
  searchTerm: string = '';
  message: string = '';
  messageColor: string = '';



  contentItem:Content = {
    id: 1,
    title:"Most Errors on One Play",
    description:"On July 27 1988, Yankees starting pitcher Tommy John made not 1, not 2, but 3 errors on a single play. During  the top of the fourth inning, John faced Milwaukee left fielder Jeffrey Leonard with a man on first and one out. Leonard tapped one to the first-base side of the mound for what looked to be an easy out. John moved quickly, getting to the ball in plenty of time ... at which point the wheels started to come off.",
    creator:"Jables",
    imgURL:"https://media.wbur.org/wp/2019/09/Lead-photo-1000x700.jpg",
    type:"Blunders",
    tags:["Tommy John", "Blunder", "Errors", "MLB"]
  };
  contentItem2:Content = {
    id: 2,
    title:"Most Errors in a Game by a Single Player",
    description:"The most errors by a player in a game is 9 by 2nd baseman Andy Leonard of the Boston Red Caps in 1876.",
    creator:"Jables",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/c/c4/Andy_Leonard.jpg",
    type:"Blunders",
    tags:["MLB", "Blunder", "Boston Red Caps","Record", "Boston", "Andy Leonard", "Errors", "Most Errors in a Game"]
  };
  contentItem3:Content = {
    id: 3,
    title:"Most Steals in One Game",
    description:"In the modern era, Eddie Collins stole 6 bases in a game on two occasions, both in September 1912, a mark that stood alone for nearly eight decades before being tied by Otis Nixon (1991), Eric Young (1996), and Carl Crawford (2009).",
    creator:"Jables",
    imgURL:"https://img.mlbstatic.com/mlb-images/image/private/ar_16:9,g_auto,q_auto:good,w_1024,c_fill,f_jpg/mlb/po07nd34sro6cyqhscu3",
    type:"Achievement",
    tags:["Achievement", "MLB", "Record", "Stolen Bases","Eddie Collins", "Carl Crawford", "Otis Nixon", "Eric Young", "Most Stolen Bases", "Single Game"]
  };
  contentItem4:Content = {
    id: 4,
    title:"Most Homeruns in a Single Season",
    description:"Barry Bonds holds the overall single-season record with 73 home runs in 2001, topping the 70 hit by Mark McGwire and 66 by Sammy Sosa during the home run chase of 1998.",
    creator:"Jables",
    imgURL:"https://pbs.twimg.com/media/CUxN9kxU8AAoW5c.jpg",
    type:"Achievement",
    tags:["Achievement", "MLB", "Record","Homeruns","Barry Bonds", "Record", "Season"]
  };
  contentItem5:Content = {
    id: 5,
    title:"Most Hits in a Single Season",
    description:"The record for most MLB hits in a season belongs to Ichiro Suzuki, who amassed 262 hits during the 2004 season, winning the batting title for the second time in his career. At the time, George Sisler's record had stood for 84 years.",
    creator:"Jables",
    imgURL:"https://thumb.spokesman.com/BZ1_2LyYFzhkPuRKKVEsBhK-dT8=/400x0/media.spokesman.com/photos/2004/09/30/spt_30ichiro_pic_09-30-2004_0V2MKQ2.jpg",
    type:"Achievement",
    tags:["Achievement", "MLB", "Record","Hits","Ichiro", "Ichiro Suzuki", "Record", "Season"]
  };
  contentItem6:Content = {
    id: 6,
    title:"Most Hit Batters Ever",
    description:"Gus Weyhing (277) holds the dubious record for most hit batsmen in a career. ",
    creator:"Jables",
    imgURL:"https://sabr.org/wp-content/uploads/2012/01/WeyhingGus.jpg",
    type:"Blunders",
    tags:["Gus Weyhing", "Blunders", "Hit Batters", "Most hit batters", "MLB"]
  };
  contentItem7:Content = {
    id: 7,
    title:"Worst Defender of All Time",
    description:"Contrary to popular belief, Derek Jeter, the winner of 5 Gold Glove Awards for his 'outstanding' defense, is the actually the worst defender of all time with a -165 Defensive Runs Saved",
    creator:"Jables",
    imgURL:"https://imageio.forbes.com/blogs-images/kurtbadenhausen/files/2014/09/0325_new-york-yankees-shortstop-derek-jeter-running_650x455.jpg?format=jpg&width=1200",
    type:"Blunders",
    tags:["Derek Jeter", "Blunders", "Defense", "Worst Defender", "Overrated", "MLB"]
  };
  contentItem8:Content = {
    id: 8,
    title:"Most Saves in a Row",
    description:"Eric Gagne holds the record for the longest streak of saves without a blown save. His record is 84 consecutive saves without a blown save between the years 2002-2004.",
    creator:"Jables",
    imgURL:"https://a.espncdn.com/photo/2010/0419/la_g_gagne01_576.jpg",
    type:"Achievement",
    tags:["Achievement", "MLB", "Record","Saves","Most Consecutive Saves", "Eric Gagne", "Record"]
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
  search() {
    const content = this.contentArray.find(c => c.title.toLowerCase().substring(0,  this.searchTerm.length) === this.searchTerm.toLowerCase());
    console.log(this.searchTerm);
    if (content) {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" found.`;
      this.messageColor = 'green';
      
    } else {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" not found.`;
      this.messageColor = 'red';
    }
  }
  ngOnInit(): void {
   
    }
    
} 
