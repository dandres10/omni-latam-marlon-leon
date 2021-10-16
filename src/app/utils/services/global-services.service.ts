import { Injectable } from '@angular/core';
import { Card } from '../models/global-models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalServicesService {

  constructor(private http: HttpClient) { }

  getListCards = () => (this.http.get<Card[]>('../assets/json/cards-data.json'))
  
  
}


