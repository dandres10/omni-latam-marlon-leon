import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponentModule } from './components/home-component.module'
import { MaterialModule } from 'src/app/utils/config/material/material.module'
import { ViewByMarkerComponent } from './view-by-marker/view-by-marker.component'
import { ViewByMarkerModule } from './view-by-marker/view-by-marker.module'
import { DescriptionCarModule } from './description-car/description-car.module'
import { DescriptionCarComponent } from './description-car/description-car.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'view-marker',
    component: ViewByMarkerComponent
  },
  {
    path: 'view-description',
    component: DescriptionCarComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeComponentModule,
    ViewByMarkerModule,
    DescriptionCarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
