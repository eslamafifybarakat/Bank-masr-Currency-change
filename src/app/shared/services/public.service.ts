import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Validators, AbstractControl } from '@angular/forms';
import { keys } from '../configs/localstorage-key';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  pushUrlData = new BehaviorSubject<boolean>(false);
  show_loader = new Subject<boolean>();

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
