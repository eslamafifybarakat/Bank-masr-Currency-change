import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
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
    PagesRoutingModule,
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class PagesModule { }
