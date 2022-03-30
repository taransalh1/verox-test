import { Pipe, PipeTransform } from '@angular/core';
import { Plan } from 'src/models/plan';
import * as _ from 'lodash';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // filter based on tribe member name
  currentColumn="";
  isAscending=false;
  transform(items: Plan[], column: string,isAsc:boolean): Plan[] {
    if(!items) return [];
    if(column=="string") return items;
      this.currentColumn=column;
      let output=_.orderBy(items,[column],[isAsc?'asc':'desc']);
      this.isAscending=!this.isAscending;
      return output;
  }



}
