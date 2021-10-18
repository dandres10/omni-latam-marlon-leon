import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewByMarkerComponent } from './view-by-marker.component';
import { HomeComponentModule } from '../components/home-component.module';
import { MaterialModule } from 'src/app/utils/config/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeComponentModule
  ],
  declarations: [ViewByMarkerComponent]
})
export class ViewByMarkerModule { }
