import { Component, OnInit, Input} from '@angular/core';
import { Company } from '../../services/company';
import { CompanyServiceService } from '../../services/company-service.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})

export class CompanyListComponent implements OnInit {
  
  constructor(private companyService: CompanyServiceService){};

  filteredCompanies: Company[] = [];
  companies: Company[] = [];
  staticCompanies: Company[] = [];
  typeArry: string[] = [];

  ngOnInit() {
    this.companyService.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
    });

    this.companyService.getCompanies().subscribe((data: Company[]) => {
      this.filteredCompanies = data;
    });

  }

  sortCompanies(field: string) {
    console.log("Clicked  " + field); 
    this.filteredCompanies.sort((a: any, b: any) => (a[field] > b[field] ? 1 : -1));
  }

  onFilterChange(filters: { companyName: string; companyType: string; companyIndustry: string; }) {
    if (!filters.companyName && !filters.companyType && !filters.companyIndustry) {
        this.filteredCompanies = [...this.companies];
        return;
    }

    let filteredCompanies = [];
    for (let i = 0; i < this.companies.length; i++) {
        let company = this.companies[i];
        let isMatch = true;

        if (filters.companyName) {
            if (!company.suffix.includes(filters.companyName)) {
                isMatch = false;
            }
        }

        if (filters.companyType) {
            if (company.type !== filters.companyType) {
                isMatch = false;
            }
        }

        if (filters.companyIndustry) {
            if (company.industry !== filters.companyIndustry) {
                isMatch = false;
            }
        }

        if (isMatch) {
            filteredCompanies.push(company);
        }
    }
    
    this.filteredCompanies = filteredCompanies;
  }

}
