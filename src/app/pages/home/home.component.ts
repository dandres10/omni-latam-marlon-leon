
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from '../../redux/app-state';
import * as reduxActions from 'src/app/redux/actions/index';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card, Header } from '../../utils/models/global-models';
import { ListMarkerByCard } from 'src/app/utils/models/global-models';
import { GlobalServicesService } from 'src/app/utils/services/global-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private listMarkerByCard: ListMarkerByCard = new ListMarkerByCard()
  private subscriptions: Subscription = new Subscription()
  public listByMaker: Array<Array<Card>> = new Array<Array<Card>>()
  public headerComponent: Header = new Header()


  constructor(
    private router: Router,
    private store: Store<AppState>,
    private _globalServicesService: GlobalServicesService) { }


  ngOnInit() {
    this.setHeader()
    this.getListCards()
  }

  private getListCards = () => {
    this.subscriptions.add(
      this._globalServicesService.getListCards()
        .subscribe((resp: ListMarkerByCard) => {
          this.listMarkerByCard = resp
          this.listByMaker = Object.values(resp)
          console.log(this.listByMaker)
        })
    )
  }

  private setHeader = () => {
    this.headerComponent = {
      title: 'Autos',
      message: 'Nunca fue tan facil escoger tu estilo...',
      search: ''
    }
  }

  public selectedCard = (event: Card) => {
    this.router.navigateByUrl('home/view-description')
    this.store.dispatch(reduxActions.setGlobalSelectedCar({ selectedCar: event }))
  }

  public viewByMarker = (marker: Card[]) => {
    this.store.dispatch(reduxActions.setGlobalCurrentCarsByBrand({ currentCarsByBrand: marker }))
    this.router.navigateByUrl('home/view-marker')
  }

  public getMarker = (item: Card[]) =>
    item[0].marker

  public getHeader = (header: Header) => {
    this.listByMaker = []

    if (header.search == '')
      return this.listByMaker = Object.values(this.listMarkerByCard)

    let data = Object.entries(this.listMarkerByCard)
    data.forEach((x, index) => {
      if (x[0].toLowerCase().indexOf(header.search.toLowerCase()) != -1)
        this.listByMaker.push(...[data[index][1]])
    })
    return
  }


  ngOnDestroy = () =>
    this.subscriptions.unsubscribe()

}
