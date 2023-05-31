import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  moduleType: string = '';

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.sharedService?.urlData?.subscribe((res: any) => {
      this.moduleType = res?.moduleType;
      console.log(this.moduleType);
    })
  }

}

