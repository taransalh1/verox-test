import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { FakeAPIService } from 'src/services/fake-api.service';
import { Plan } from 'src/models/plan';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'verox-test';
  isMobile = false;
  data: Plan[] = [];
  isTablet = false;
  filtercolumnName: string = '';
  isAsc=true;
  constructor(
    public breakpointObserver: BreakpointObserver,
    private fakeApi: FakeAPIService
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches;
      });
    this.breakpointObserver
      .observe([Breakpoints.Tablet])
      .subscribe((state: BreakpointState) => {
        this.isTablet = state.matches;
      });
    this.getDataForDisplay();
  }
  getDataForDisplay() {
    this.fakeApi.getDataAsObservable().subscribe((res) => {
      this.data = res;
    });
  }

  sort(column: string) {
    if(this.filtercolumnName===column)
    {
      this.isAsc=!this.isAsc;
    }
    else
    {
      this.isAsc=true;
    }
    this.filtercolumnName = column;
  }
}
