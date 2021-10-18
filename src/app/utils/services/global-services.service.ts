import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListMarkerByCard } from '../models/global-models';

@Injectable({
  providedIn: 'root'
})
export class GlobalServicesService {

  constructor(private http: HttpClient) { }

  getListCards = () => (this.http.get<ListMarkerByCard>('../assets/json/cards-data.json'))


}


