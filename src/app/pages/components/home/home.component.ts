import { AlertsService } from './../../../core/services/alerts/alerts.service';
import { currencies, currenciesData } from './../../../shared/Ts-Files/dummy-data';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  result: any = 1;

  currenciesData: any = [];
  isLoadingCurrenciesData: boolean = false;

  constructor(
    private alertsService: AlertsService,
    private homeService: HomeService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.currentLanguage = window.localStorage.getItem(keys.language);
    this.getAllCurrencies();
    this.getCurrenciesData();
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
              name: this.currentLanguage == 'ar' ? item?.arName : item?.enName,
              conversions: item?.conversions ? item?.conversions : '',
              image: item?.image ? item?.image : '',
              base: item?.base ? item?.base : ''
            })
          }) : '';
          this.isLoadingCurrencies = false;
          this.currencyOne = this.currenciesList[0];
          this.currencyOne = this.currenciesList[1];
        } else {
          res?.message ? this.alertsService?.openSweetAlert('error', res?.message) : '';
          this.isLoadingCurrencies = false;
        }
      },
      (err: any) => {
        err?.message ? this.alertsService?.openSweetAlert('error', err?.message) : '';
        this.isLoadingCurrencies = false;
      });
    this.cdr?.detectChanges();

    let arr: any = [];
    currencies?.forEach((item: any) => {
      arr?.push({
        id: item?.id,
        name: this.currentLanguage == 'ar' ? item?.arName : item?.enName,
        conversions: item?.conversions ? item?.conversions : '',
        image: item?.image ? item?.image : '',
        base: item?.base ? item?.base : ''
      })
    });
    this.currenciesList = arr;
    this.currencyOne = this.currenciesList[0];
    this.currencyTwo = this.currenciesList[1];
  }
  changeCurrencies(): void {
    this.result = 0;
    var tempValue = this.currencyOne;
    this.currencyOne = this.currencyTwo;
    this.currencyTwo = tempValue;
  }
  convert(): void {
    this.result = this.amount * this.currencyOne?.conversions?.[this.currencyTwo?.base];
  }
  getCurrenciesData(): void {
    this.isLoadingCurrenciesData = true;
    this.homeService?.getCurrenciesData()?.subscribe(
      (res: any) => {
        if (res?.code === 200) {
          this.currenciesData = res?.data ? res?.data : [];
          this.isLoadingCurrenciesData = false;
        } else {
          res?.message ? this.alertsService?.openSweetAlert('error', res?.message) : '';
          this.isLoadingCurrenciesData = false;
        }
      },
      (err: any) => {
        err?.message ? this.alertsService?.openSweetAlert('error', err?.message) : '';
        this.isLoadingCurrenciesData = false;
      });
    this.cdr?.detectChanges();

    this.currenciesData = currenciesData;
    console.log(this.currenciesData);

  }

  ngOnDestroy(): void {
    this.unsubscribe?.forEach((sb) => sb?.unsubscribe());
  }
}
