import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from 'rxjs/operators';
import {Tariff} from "../models/tarifs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor(private http: HttpClient) { }
  getTariffs(): Observable<Tariff[]> {
    return this.http.get<{ tariffs: Tariff[] }>( `${environment.url}` ).pipe(
      map(result => {
        return result.tariffs;
      }),
      catchError((err: any) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
