import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from './models/user.interface';
import { map, Observable } from 'rxjs';
//import { environment } from 'src/environments/environment.prod';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:3000/users";
 
  constructor(private http: HttpClient) { }
 
  // Register user
  register(user: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(this.apiUrl, user);  // Correct URL
  }
  
 
  // Login user
  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
      .pipe(map(users => users.length ? users[0] : null)); // Correct URL
  }
  
  adminLogin(email: string, password: string): Observable<any> { return this.http.get(this.apiUrl).pipe( map((data: any) => { return data.users.find((user: any) => user.email === email && user.password === password && user.isAdmin); }) ); }
}
