import { AppRoutes } from './../shared/configs/routes';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: '', component: HomeComponent },
      { path: AppRoutes?.pages?.home?.currencyDetails, component: CurrencyDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
