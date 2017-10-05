import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
@Injectable()
export class ProductService {
  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  public getProduct(id: number): Observable<Product> {
    return this
      .products()
      .map(data => {
        return data.find((item: Product) => {
          return item.id === id;
        });
      });
  }

  private products(): Observable<Product[]> {
    return of(<Product[]>[
      <Product>{id: 7, name: 'Gray', price: 99.09, colors: ['gray']},
      <Product>{id: 8, name: 'Blue', price: 99.09, colors: ['blue']},
      <Product>{id: 9, name: 'All colors', price: 99.09, colors: ['gray', 'blue', 'green']},
    ]);
  }
}
