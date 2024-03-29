import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  // person = {
  //   givenName: 'Prodromos',
  //   surname: 'Thomaidis',
  //   age: 0x19,
  //   email: 'prodromos@aueb.gr'
  // }

  @Input() person : Person | undefined;

  // {
  //   givenName: 'Prodromos',
  //   surName: 'Thomaidis',
  //   age: 0x19,
  //   email: 'prodromos@aueb.gr',
  //   address:'Thessaloniki, Greece'
  // }

}
