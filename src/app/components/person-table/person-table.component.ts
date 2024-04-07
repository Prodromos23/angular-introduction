import { Component, Input } from '@angular/core';
import { EPerson, Person } from 'src/app/shared/interfaces/person';

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

  @Input() person : Person | EPerson | undefined;

  // differentiate the type of person
  isPerson(){
    return this.person && 'address' in this.person
  }
  // differentiate the type of EPerson
  isEPerson(){
    return this.person && 'education' in this.person
  }

  // {
  //   givenName: 'Prodromos',
  //   surName: 'Thomaidis',
  //   age: 0x19,
  //   email: 'prodromos@aueb.gr',
  //   address:'Thessaloniki, Greece'
  // }

}
