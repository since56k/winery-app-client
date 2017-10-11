import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BioPipe',
  pure: false
})
export class BioPipe implements PipeTransform {

  transform(products, args){
    if(products){
      let bool = args;
      if(bool){
        return products.filter(item => {
          if(item.organic === bool){
            return item;
          } 
        })
      } return products   
    }
  }
}


