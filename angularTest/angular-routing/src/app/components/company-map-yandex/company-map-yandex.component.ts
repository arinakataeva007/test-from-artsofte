import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../services/company';
import { CompanyServiceService } from '../../services/company-service.service';
@Component({
  selector: 'app-company-map-yandex',
  templateUrl: './company-map-yandex.component.html',
  styleUrls: ['./company-map-yandex.component.css'],
})
export class CompanyMapYandexComponent implements OnInit{
  companies: Company[] = []
  zoom: number = 10; 
  center: number[] = [0, 0];

  constructor(private companyService: CompanyServiceService){}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
      if (this.companies.length > 0) {
        this.center = [this.companies[0].latitude, this.companies[0].longitude]; // Устанавливаем центр только если массив не пустой
      }
    });
  }
}
