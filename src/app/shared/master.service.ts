import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  data = {
    Karnataka: ['Mangaluru', 'Bengaluru', 'Kolar'],
    Maharashtra: ['Pune', 'Mumbai', 'Thane'],
  };
  getState() {
    let state = Object.keys(this.data);
    return state;
  }
}
