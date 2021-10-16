import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/utils/models/global-models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() dataSource: Card[] = [];
  @Output() selectedCard = new EventEmitter<Card>();

  constructor() { }

  ngOnInit() { }

  seeDescription = (event: Card) =>
    (this.selectedCard.emit(event))



}
