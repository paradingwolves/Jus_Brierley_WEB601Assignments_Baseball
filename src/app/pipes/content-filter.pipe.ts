import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(contentArray: Content[], type?: string) {
    // Check if the contentArray argument is null or undefined
    if (!contentArray ){
      return contentArray;
    } 
    else {
      // Use the filter method of array to filter out only the cards of matching type
      return contentArray.filter((card)=> 
      { 
        return card.type?.toLowerCase() === type?.toLowerCase()
      });
    }

  }

}
