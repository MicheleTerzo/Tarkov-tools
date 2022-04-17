import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IBubbleChartData} from "../interfaces/IBubbleChartData";

@Injectable({
  providedIn: 'root'
})
export class AmmoDataProviderService {

  private _ammoData: BehaviorSubject<IBubbleChartData[]> = new BehaviorSubject<IBubbleChartData[]>([]);
  ammoData$: Observable<IBubbleChartData[]> = this._ammoData.asObservable();

  constructor(private _http: HttpClient) {
  }

  getAmmoData(filter?: string[]): void {
    this._http.get<IBubbleChartData[]>('assets/ammo.json').forEach((ammoData: IBubbleChartData[]) => {
      let tmpAmmoData: IBubbleChartData[] = [];
      if (filter && filter.length > 0) {
        filter.forEach((ammoType) => {
          const ammoCategory = ammoData.find((ammo) => {
            return ammo.name === ammoType
          })
          if (ammoCategory) {
            tmpAmmoData.push(ammoCategory)
          }
        })
      } else {
        tmpAmmoData = ammoData;
      }
      this._ammoData.next(tmpAmmoData);
    });
  }
}
