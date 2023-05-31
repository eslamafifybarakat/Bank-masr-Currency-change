import { AlertsService } from './../../../core/services/alerts/alerts.service';
import { chartData, currencies, currenciesData } from './../../../shared/Ts-Files/dummy-data';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { keys } from './../../../shared/configs/localstorage-key';
import { HomeService } from '../../services/home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit {
  private unsubscribe: Subscription[] = [];
  currentLanguage: any;

  currenciesList: any = [];
  isLoadingCurrencies: boolean = false;

  amount: any;
  currencyOne: any;
  currencyTwo: any;
  result: any = 0;

  chartData: any;
  chartDataRates: any = [];
  months: any = [];
  isLoadingChartData: boolean = false;

  chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      },
      y: {
        ticks: {
          color: '#495057',
          stepSize: 3,
        },
        grid: {
          color: '#ebedef'
        }
      }
    }
  };
  constructor(
    private alertsService: AlertsService,
    private homeService: HomeService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.currentLanguage = window.localStorage.getItem(keys.language);
    this.getAllCurrencies();
    this.getChartData();
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
  getChartData(): void {
    this.isLoadingChartData = true;
    this.homeService?.getCurrenciesData()?.subscribe(
      (res: any) => {
        if (res?.code === 200) {
          res?.data ? res?.data?.forEach((item: any) => {
            this.months?.push(item?.month);
            this.chartDataRates?.push(item?.rate);
          }) : '';
          this.isLoadingChartData = false;
        } else {
          res?.message ? this.alertsService?.openSweetAlert('error', res?.message) : '';
          this.isLoadingChartData = false;
        }
      },
      (err: any) => {
        err?.message ? this.alertsService?.openSweetAlert('error', err?.message) : '';
        this.isLoadingChartData = false;
      });
    this.cdr?.detectChanges();
    chartData?.forEach((item: any) => {
      this.months?.push(item?.month);
      this.chartDataRates?.push(item?.rate);
    });

    this.chartData = {
      labels: this.months,
      datasets: [
        {
          label: 'EUR',
          data: this.chartDataRates,
          fill: true,
          borderColor: '#990d2c',
          tension: .4,
          backgroundColor: 'rgba(153,13,44,0.2)'
        }
      ]
    };
  }

  ngOnDestroy(): void {
    this.unsubscribe?.forEach((sb) => sb?.unsubscribe());
  }
}
