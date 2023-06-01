import { SharedService } from '../../services/shared.service';
import { keys } from './../../configs/localstorage-key';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsedMenu: boolean = false;
  currentTheme = window?.localStorage?.getItem(keys?.theme);

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
  }

}

