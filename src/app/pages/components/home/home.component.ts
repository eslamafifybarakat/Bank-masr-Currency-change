import { AlertsService } from './../../../core/services/alerts/alerts.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { currencies } from './../../../shared/Ts-Files/dummy-data';
import { keys } from './../../../shared/configs/localstorage-key';
import { HomeService } from '../../services/home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private unsubscribe: Subscription[] = [];
  currentLanguage: any;

  currenciesList: any = [];
  isLoadingCurrencies: boolean = false;

  amount: any;
  currencyOne: any;
  currencyTwo: any;
  result: any = 0;
  currenciesData: any = [];
  isLoadingCurrenciesData: any = [];

  constructor(
    // private alertsService: AlertsService,
    private homeService: HomeService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.currentLanguage = window.localStorage.getItem(keys.language);
    this.getAllCurrencies();
  }

  getAllCurrencies(): void {
    this.isLoadingCurrencies = true;
    this.homeService?.getAllCurrencies()?.subscribe(
      (res: any) => {
        if (res?.code === 200) {
          let arr: any = [];
          res?.data ? res?.data?.forEach((item: any) => {
            arr?.push({
              id: item?.id,
              name: this.currentLanguage == 'ar' ? item?.arName : item?.enName
            })
          }) : '';
          this.isLoadingCurrencies = false;
          this.currencyOne = this.currenciesList[0];
          this.currencyOne = this.currenciesList[1];
        } else {
          // res?.message ? this.alertsService?.openSweetAlert('error', res?.message) : '';
          this.isLoadingCurrencies = false;
        }
      },
      (err: any) => {
        // err?.message ? this.alertsService?.openSweetAlert('error', err?.message) : '';
        this.isLoadingCurrencies = false;
      });
    this.cdr?.detectChanges();

    let arr: any = [];
    currencies?.forEach((item: any) => {
      arr?.push({
        id: item?.id,
        name: this.currentLanguage == 'ar' ? item?.arName : item?.enName,
        value: item?.value
      })
    });
    this.currenciesList = arr;
    this.currencyOne = this.currenciesList[0];
    this.currencyTwo = this.currenciesList[1];
  }
  changeCurrencies(): void {
    var tempValue = this.currencyOne;
    this.currencyOne = this.currencyTwo;
    this.currencyTwo = tempValue;
  }
  convert(): void {
    this.result = this.amount * this.currencyTwo?.value;
  }

  ngOnDestroy(): void {
    this.unsubscribe?.forEach((sb) => sb?.unsubscribe());
  }
}
