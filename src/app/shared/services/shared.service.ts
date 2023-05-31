import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit {
  urlData = new BehaviorSubject<any>({});

  constructor() {
  }

  ngOnInit(): void {

  }

}
