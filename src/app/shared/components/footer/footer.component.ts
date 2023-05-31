import { SharedService } from '../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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

