import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { Component, OnInit } from '@angular/core';

@Pipe({
  name: 'filterContentByType'
})
export class FilterContentByTypePipe implements PipeTransform {
  transform(contentArray: Array<Content>, type?: string): Array<Content> {
    if (!type) {
      return contentArray.filter(contentItem => !contentItem.type);
    }
    return contentArray.filter(contentItem => contentItem.type === type);
  }
}
