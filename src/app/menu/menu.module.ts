import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {MatMenuModule} from '@angular/material';
import {MaterialModule} from '../modules/material/material.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
