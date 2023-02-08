import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(contentArray: Content[], type?: string): Content[] {
    if (!contentArray ){
      return contentArray;
    }
    const baseballCards = [];
    for (const card of contentArray){
      if(card['type'] === type){
        baseballCards.push(card);
      }
    }
    return baseballCards;
  }

}
