import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
import { NgModule } from '@angular/core';
const primeNgModules = [
  DropdownModule,
  InputTextModule,
  SkeletonModule
];
@NgModule({
  declarations: [],
  imports: [
    ...primeNgModules
  ],
  exports: [
    ...primeNgModules
  ],
  providers: [MessageService, ConfirmationService],
})
export class PrimeNgModule { }
