import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface AuthResponseData {
  token: string;
  token_validity: Date;
  role: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  canAdmin = new BehaviorSubject<User>(null);
  private tokenExpiration: any;

  constructor(private http:HttpClient, private router: Router) { }

  signup(user:string, password:string, name: string, password_confirmation:string){
    const dinamicUrl = "auth/register";
   return this.http.post<AuthResponseData>(`${environment.API_URL}/${dinamicUrl}`,
    {
      user:user,
      password:password,
      name:name,
      password_confirmation:password
    }
    )
    .pipe(tap(resData => {
     this.handleAuthentication(resData.token, +resData.token_validity, resData.role);
    })
    );
  }

  login(user:string, password:string){
    const dinamicUrl = "auth/login";
    let formData = new FormData()
    formData.append('name', user)
    formData.append('pass', password)
   return this.http.post<AuthResponseData>(`${environment.API_URL}/${dinamicUrl}`,formData)
    .pipe(tap(resData => {
      this.handleAuthentication(resData.token, +resData.token_validity, resData.role);
     })
     );
  }

  autoLogin(){
   const userData: {
     _token:string;
   } = JSON.parse(localStorage.getItem('userData'));

   if (!userData) {
     return;
   }

   const loadedUser = new User(userData._token);

   if(loadedUser.token){
     this.user.next(loadedUser);
     }
  }

  logout(){
    this.user.next(null);
    this.canAdmin.next(null)
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpiration) {
      clearTimeout(this.tokenExpiration);
    }
    this.tokenExpiration = null;
  }

  autoLogout(expirationDuration: number){
    console.log(expirationDuration)
    this.tokenExpiration = setTimeout(() => {
      this.logout();
    }, expirationDuration)
  }

  private handleAuthentication(token: string, token_validity: number, role: number){
    const expirationDate = new Date(new Date().getTime() + +token_validity * 100);
    const user = new User(token);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
