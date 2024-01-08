import { Component, OnInit } from '@angular/core';
import { Company } from '../../services/company';
import { CompanyServiceService } from '../../services/company-service.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit{
  //company: Company | undefined;
  public company: Company | null = null;

  constructor(
    private companyService: CompanyServiceService
  ) {}

  ngOnInit() {
    console.log(this.companyService.getCurrentCompany());//дать компании
    this.company = this.companyService.getCurrentCompany();
  }
}
