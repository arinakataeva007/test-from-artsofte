import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {  FormControl, FormGroup} from '@angular/forms';
import { CompanyServiceService } from '../../services/company-service.service';

@Component({
  selector: 'app-company-filter',
  templateUrl: 'company-filter.component.html',
  styleUrl: 'company-filter.component.css'
})
export class CompanyFilterComponent implements OnInit{

  @Output() filterEvent = new EventEmitter<any>();//отправляем это событие в родительскую компоненту

  filterForm: FormGroup = new FormGroup({
    companyName: new FormControl(""),
    companyType: new FormControl(""),
    companyIndustry: new FormControl("")
  });

  typeArray: string[] = [];
  
  industryAray: string[] = [];

  constructor(private companyService: CompanyServiceService){};
  ngOnInit(){
    this.companyService.getTypeCompany().subscribe(types => {
      this.typeArray = types;

    });

    this.companyService.getIndustryCompany().subscribe(industrys => {
      this.industryAray = industrys;

    });

    this.typeArray.push('');
    this.industryAray.push('');
  }

  public applyForm() {
    this.filterEvent.emit(this.filterForm.value);
  }
}
