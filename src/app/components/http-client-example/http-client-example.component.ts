import { Component, OnInit, inject } from '@angular/core';
import { ChuckNorrisJoke, DadJoke } from 'src/app/shared/interfaces/jokes';
import { JokesService } from 'src/app/shared/services/jokes.service';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit{
  ngOnInit(): void {
    this.jokesService.getDadJoke().subscribe((joke:DadJoke) => {
      // console.log(joke);
      this.dadJoke = joke.joke
    })
    this.jokesService.getChuckNorrisJoke().subscribe((joke:ChuckNorrisJoke) => {
      // console.log(joke);
      this.chuckNorrisJoke = joke.value
    })
  }
  refreshDadJoke() {
    this.jokesService.getDadJoke().subscribe((joke: DadJoke) => {
      // console.log(joke);
      this.dadJoke = joke.joke
    })
  }
  refreshChuckNorrisJoke() {
    this.jokesService.getChuckNorrisJoke().subscribe((joke: ChuckNorrisJoke) => {
      // console.log(joke);
      this.chuckNorrisJoke = joke.value
    })
  }

  jokesService = inject(JokesService);
  dadJoke = '';
  chuckNorrisJoke = '';
  // dadJoke$ = this.jokesService.getDadJoke();
  // chuckNorrisJoke$ = this.jokesService.getChuckNorrisJoke();
}
