import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person ={
    givenName: 'Prodromos',
    surName: 'Thomaidis',
    age: 0x19,
    email: 'prodromos@aueb.gr',
    address:'Thessaloniki, Greece'
}

person1 ={
  givenName: 'John',
  surName: 'Doe',
  age: 0x23,
  email: 'johndoe@aueb.gr',
  address:'New York, USA'
};
}
