import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
  ],
  imports: [
    ReactiveFormsModule,
    PagesRoutingModule,
    AgmCoreModule,
    CommonModule,
    SharedModule,
    FormsModule,
    CoreModule
  ]
})
export class PagesModule { }
