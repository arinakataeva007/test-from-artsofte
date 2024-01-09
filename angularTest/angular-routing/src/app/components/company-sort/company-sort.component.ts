import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrl: './company-sort.component.css'
})
export class CompanySortComponent {
  
  @Output() sortEvent = new EventEmitter<string>();

  sort(field: string) {
    this.sortEvent.emit(field);
  }
}
