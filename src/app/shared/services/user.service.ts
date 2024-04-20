import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user';

const API_URL = `${environment.apiURL}/user`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClient = inject(HttpClient);
  

  registerUser(user: User) {
    return this.httpClient.post<{msg: string}>(`${API_URL}/register`, user);
  }
}
