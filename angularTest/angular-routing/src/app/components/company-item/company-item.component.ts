import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../services/company';
import { Router } from '@angular/router';
import { CompanyServiceService } from '../../services/company-service.service';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit{
  constructor(private router: Router, private companyService: CompanyServiceService){};
  @Input() company: Company = {} as Company;
  ngOnInit(): void {
  }
  async openDetailsAboutCompany(company: Company){
    await this.router.navigate(['detail/:id']);
    this.companyService.setCurrentCompany(company);
  }
}
