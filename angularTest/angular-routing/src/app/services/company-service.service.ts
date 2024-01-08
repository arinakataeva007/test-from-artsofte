import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Company } from './company';
import { StringCompany } from './stringCompany';
import { Coordinates } from './coordinates';


@Injectable({
  providedIn: 'root'
})

export class CompanyServiceService {
  private apiUrl = 'http://random-data-api.com/api/company/random_company?size=100'; 
  private currentCompany: Company | null = null;
  private strCompanies: StringCompany[] = [];
  private coorinates: Coordinates[] = [];

  constructor(private http: HttpClient) {
  }
  setCurrentCompany(company: Company){
    this.currentCompany = company;
  }
  public getCurrentCompany(): Company | null{
    return this.currentCompany;
  }

  getCompanies(): Observable<Company[]> { 
    return this.http.get<Company[]>(this.apiUrl);
  }

  getTypeCompany(): Observable<string[]> {
    return this.http.get<StringCompany[]>(this.apiUrl).pipe(
      map((companies: StringCompany[]) => companies.map(company => company.type))
    );
  }

  getIndustryCompany(): Observable<string[]>{
    return this.http.get<StringCompany[]>(this.apiUrl).pipe(
      map((companies: StringCompany[])=> companies.map(company=> company.industry))
    );
  }
}

  

