import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'Prodromos',
    surname: 'Thomaidis',
    age: 0x19,
    email: 'prodromos@aueb.gr'
  }
}
