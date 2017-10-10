import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PricePipe',
  pure: false
})
export class PricePipe implements PipeTransform {

  transform(value, args?) {
    if(value && args){
    console.log(value, args)
    let minPrice = args;
    return value.filter(item => {
      console.log(item.price, minPrice)
      return item.price >= minPrice;
    });
    }
  	
  }
}

