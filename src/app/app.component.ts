import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Prodromos';
  // name: string = 'Prodromos';
  person = {
    givenName: 'Prodromos',
    surname: 'Thomaidis',
    age: 0x19,
    email: 'prodromos@aueb.gr'
  }
}

