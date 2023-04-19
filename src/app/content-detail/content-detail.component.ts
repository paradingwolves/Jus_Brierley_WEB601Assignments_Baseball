import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BaseballService } from '../services/baseball-service.service';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'contentDetail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  contentId: number;
  contentItem: Content | undefined;

  constructor(private route: ActivatedRoute, private baseballService: BaseballService) {
    this.contentId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.baseballService.getBaseballCard(id).subscribe(item => {
      this.contentItem = item;
    });
  }
}