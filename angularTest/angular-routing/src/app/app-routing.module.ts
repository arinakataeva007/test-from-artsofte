import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyMapYandexComponent } from './components/company-map-yandex/company-map-yandex.component';
import { CompanyLoyautComponent } from './components/company-loyaut/company-loyaut.component';

const routes: Routes = [
  {path: '', component: CompanyLoyautComponent, children:[
    {path: '', redirectTo: '/list', pathMatch: 'full' },
    {path: 'list', component: CompanyListComponent},
    {path: 'detail/:id', component: CompanyDetailComponent},
    {path: 'map', component: CompanyMapYandexComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
