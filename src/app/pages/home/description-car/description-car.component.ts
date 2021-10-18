import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app-state';
import { Card, Header } from '../../../utils/models/global-models';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-car',
  templateUrl: './description-car.component.html',
  styleUrls: ['./description-car.component.scss']
})
export class DescriptionCarComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription()
  public headerComponent: Header = new Header()
  public panelOpenState = false
  public car: Card = new Card()

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.setHeader()
    this.getCardActive()
  }

  private setHeader = () => {
    this.headerComponent = {
      title: 'Autos',
      message: 'Descripción',
      search: ''
    }
  }

  public getCardActive = () => {
    this.subscriptions.add(
      this.store.select(data => data.global?.selectedCar)
        .subscribe((resp: any) => { this.car = resp })
    )
  }

  public getHeader = (header: Header) => {
    //por si se necesita el buscardor
  }

  ngOnDestroy = () =>
    this.subscriptions.unsubscribe()

}
