import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyMapYandexComponent } from './components/company-map-yandex/company-map-yandex.component';
import { CompanyItemComponent } from './components/company-item/company-item.component';
import { CompanySortComponent } from './components/company-sort/company-sort.component';
import { CompanyFilterComponent } from './components/company-filter/company-filter.component';
import { FormsModule } from '@angular/forms';
import { CompanyLoyautComponent } from './components/company-loyaut/company-loyaut.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';

const mapConfig: YaConfig = {
  apikey: '4fe0bf59-ec5e-4bae-b26b-e719e66bf5da',
  lang: 'ru_RU',
};
@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyMapYandexComponent,
    CompanyItemComponent,
    CompanySortComponent,
    CompanyFilterComponent,
    CompanyLoyautComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
