
import { Subscription } from 'rxjs';
import { Card } from 'src/app/utils/models/global-models';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { GlobalServicesService } from 'src/app/utils/services/global-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  listCards: Card[] = []
  private subscriptions: Subscription = new Subscription()
  constructor(private _globalServicesService: GlobalServicesService) { }

  ngOnInit() {
    this.getListCards();
  }

  private getListCards = () => {
    this.subscriptions.add(
      this._globalServicesService.getListCards()
        .subscribe((resp: Card[]) => { this.listCards = resp; console.log(this.listCards) })
    )
  }

  selectedCard(event: any) {
    console.log('componente manager', event)
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

}
