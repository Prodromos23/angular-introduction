import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Prodromos';
  // name: string = 'Prodromos';

  person0 ={
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
  }
}

