import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from 'src/app/redux/app-state';
import * as reduxActions from 'src/app/redux/actions/index';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card, Header } from 'src/app/utils/models/global-models';

@Component({
  selector: 'app-view-by-marker',
  templateUrl: './view-by-marker.component.html',
  styleUrls: ['./view-by-marker.component.scss']
})
export class ViewByMarkerComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription()
  public headerComponent: Header = new Header()
  listCards: Card[] = []
  listCardsHTML: Card[] = []

  constructor(
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.setHeader()
    this.getListCards()
  }

  private setHeader = () => {
    this.headerComponent = {
      title: 'Autos',
      message: 'Modelos',
      search: ''
    }
  }

  private getListCards = () =>
    this.subscriptions.add(
      this.store.select(data => data.global?.currentCarsByBrand)
        .subscribe((resp: any) => {
          this.listCards = resp; this.listCardsHTML = resp
        })
    )

  selectedCard = (event: Card) => {
    this.router.navigateByUrl('home/view-description')
    this.store.dispatch(reduxActions.setGlobalSelectedCar({ selectedCar: event }))
  }

  getHeader = (header: Header) => {
    this.listCardsHTML = []

    if (header.search == '')
      return this.listCardsHTML = this.listCards

    this.listCards.forEach((x: Card) => {
      if (x.model.toLowerCase().indexOf(header.search.toLowerCase()) != -1)
        this.listCardsHTML.push(x)
    })
    return
  }

  ngOnDestroy = () =>
    this.subscriptions.unsubscribe()

}
