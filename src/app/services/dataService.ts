//create a service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
    data = {
        labels: ['apple', 'banana', 'orange', 'blueberry', 'strawberry  '],
        values: [10, 20, 50, 40, 30],
    };



  
}