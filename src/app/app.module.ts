import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeDeDE from '@angular/common/locales/de-BE';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from 'src/pipe/filter.pipe';
registerLocaleData(localeDeDE);
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de-BE' // 'de-DE' for Germany, 'fr-FR' for France ...
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
