import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrl: './company-sort.component.css'
})
export class CompanySortComponent {
  
  @Output() sortEvent = new EventEmitter<string>();//передает значение sortEvent родительской компоненте

  sort(field: string) {
    this.sortEvent.emit(field);//когда вызывается метод sort, то он посылает род.компоненте действие sort(field) т.е сортируй по такому-то полю
  }
}
