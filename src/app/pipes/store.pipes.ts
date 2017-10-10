import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PricePipe',
  pure: false
})
export class PricePipe implements PipeTransform {

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value, args?) {
  	console.log(value, args)
    // ES6 array destructuring
    let minPrice = args;
    return value.filter(item => {
    	console.log(item.price, minPrice)
      return item.price >= minPrice;
    });
  }
}

