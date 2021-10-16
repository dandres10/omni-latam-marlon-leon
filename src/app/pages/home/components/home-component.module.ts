import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialModule } from 'src/app/utils/config/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent
    ]
})
export class HomeComponentModule { }