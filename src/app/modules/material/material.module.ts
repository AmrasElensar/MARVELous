import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {ClickOutsideModule} from 'ng-click-outside';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatButtonToggleModule,
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    NgxPaginationModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,
    ClickOutsideModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatButtonToggleModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    NgxPaginationModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,
    ClickOutsideModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatButtonToggleModule,
  ]
})

export class MaterialModule { }
