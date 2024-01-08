import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-loyaut',
  templateUrl: './company-loyaut.component.html',
  styleUrl: './company-loyaut.component.css'
})
export class CompanyLoyautComponent {
  constructor(private router: Router){};

  async openMap(){
    await this.router.navigate(['map']);
  }
   async openListCompany(){
    await this.router.navigate(['list']);
   }
}
