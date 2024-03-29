import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {AmmoDataProviderService} from "../../services/ammo-data-provider.service";
import {AmmoTypes} from "../../models/ammo-types";
import {FormControl, FormGroup} from "@angular/forms";
import {IBubbleChartData} from "../../interfaces/IBubbleChartData";

@Component({
  selector: 'app-ammo-chart',
  templateUrl: './ammo-chart.component.html',
  styleUrls: ['./ammo-chart.component.scss']
})
export class AmmoChartComponent implements AfterViewInit {
  @ViewChild('mainContainer') mainContainerRef: ElementRef;
  customColors: { name: string, value: string }[] = [];
  chartWidth: number = 1800;
  chartHeight: number = 700;
  chartData: IBubbleChartData[] = [];
  filtersData: IBubbleChartData[] = [];
  xLabel: string = 'Damage';
  yLabel: string = 'Penetration';
  ammoTypes = AmmoTypes;
  form: FormGroup = new FormGroup({});

  constructor(private _ammoService: AmmoDataProviderService) {
    _ammoService.ammoData$.forEach((data) => {
      this.populateCustomColors(data);
      this.chartData = data;
      if (this.filtersData.length < 1) {
        this.filtersData = data;
      }
    });
    _ammoService.getAmmoData();
    this.initializeForm();
    this.registerFormChange();
    // this.resizeChart();
  }

  ngAfterViewInit() {
    // this.chartWidth = this.mainContainerRef.nativeElement
    // console.log(this.mainContainerRef.nativeElement);
  }

  @HostListener('window:resize', ['$event'])
  resizeChart(): void {
    this.chartWidth = window.innerWidth - 100;
  }

  populateCustomColors(ammoData: IBubbleChartData[]): void {
    ammoData.forEach((ammo) => {
      this.customColors.push({
        name: ammo.name,
        value: ammo.color
      })
    })
  }


  initializeForm(): void {
    this.ammoTypes.forEach((type) => {
      this.form.addControl(type, new FormControl(true));
    })
  }

  registerFormChange(): void {
    this.form.valueChanges.forEach((ammoTypesSelected) => {
      const filtersArray: string[] = [];
      for (const [key, value] of Object.entries(ammoTypesSelected)) {
        if (value) {
          filtersArray.push(key)
        }
      }
      this._ammoService.getAmmoData(filtersArray);
    });
  }

  resetFilters(): void {
    Object.entries(this.form.controls).forEach((value) => {
      if (!value[1].value)
        value[1].patchValue(true);
    });
  }


}
