import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {
  transform(contents: Content[], category: string): Content[] {
    if (!category || category === 'All') {
      return contents;
    }
    return contents.filter(content => content.type === category);
  }
}
