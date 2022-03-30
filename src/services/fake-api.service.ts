import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FakeAPIService {
  jsonFile = '../assets/plans.json';
  constructor(private http: HttpClient) { }

  getDataAsPromise(): Promise<any> {
    return this.http.get(this.jsonFile)
      .toPromise()
  }

  getDataAsObservable(): Observable<any> {
    return this.http.get(this.jsonFile)
  }
}
