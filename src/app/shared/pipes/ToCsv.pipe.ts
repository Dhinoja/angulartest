import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'tocsv'
})
export class ToCsvPipe implements PipeTransform {
  transform(objArray: any[], column: string) {
    if (objArray.length > 0) {
      return objArray.map(o => o[column]).join(', ');
    }
    return '-';
  }
}
