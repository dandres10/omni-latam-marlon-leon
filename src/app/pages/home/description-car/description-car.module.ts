import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionCarComponent } from './description-car.component';
import { MaterialModule } from 'src/app/utils/config/material/material.module';
import { HomeComponentModule } from '../components/home-component.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeComponentModule
  ],
  declarations: [DescriptionCarComponent]
})
export class DescriptionCarModule { }
