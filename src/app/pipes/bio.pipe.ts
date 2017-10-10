import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BioPipe',
  pure: false
})
export class BioPipe implements PipeTransform {

  transform() {
  	
  }
}

