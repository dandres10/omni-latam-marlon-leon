import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/utils/config/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [
        CardComponent,
        HeaderComponent
    ],
    exports: [
        CardComponent,
        HeaderComponent
    ]
})
export class HomeComponentModule { }