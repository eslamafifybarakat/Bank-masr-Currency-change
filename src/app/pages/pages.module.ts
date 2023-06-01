import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CurrencyDetailsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    PagesRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    CoreModule
  ]
})
export class PagesModule { }
