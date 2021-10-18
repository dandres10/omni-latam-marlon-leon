import { Router } from '@angular/router';
import { Header } from 'src/app/utils/models/global-models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() dataSource: Header = new Header();
  @Output() getHeader = new EventEmitter<Header>();
  value = '';

  constructor(private router: Router) { }

  ngOnInit() { }

  routeHome = () =>
    this.router.navigateByUrl('home')

  changeSearch = (value: string) =>
    this.getHeader.emit({ ...this.dataSource, search: value })

}


