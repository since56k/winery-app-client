import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PricePipe',
  pure: false
})
export class PricePipe implements PipeTransform {

  transform(value, args?) {
    if(value && args){
    let minPrice = args;
    return value.filter(item => {
      return item.price <= minPrice;
    });
    }
  	
  }
}

