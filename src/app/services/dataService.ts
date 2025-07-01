//create a service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

//   data = {
//     labels: ['apple', 'banana', 'orange', 'blueberry', 'strawberry  '],
//     values: [10, 20, 50, 40, 30],
//   };

  // Get top 6 product prices from DummyJSON
  getChartData(): Observable<{ labels: string[], values: number[] }> {
    return this.http.get<any>('https://dummyjson.com/products')
      .pipe(
        map(res => {
          const topProducts = res.products.slice(0, 6);
          const labels = topProducts.map((p: any) => p.title);
          const values = topProducts.map((p: any) => p.price);
          return { labels, values };
        })
      );
  }
    // Get top 6 product prices from DummyJSON
}
