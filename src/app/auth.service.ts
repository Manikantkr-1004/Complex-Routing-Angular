import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth : boolean = false;

  getAuth(){
    return this.isAuth;
  }

  loginAuth(){
    this.isAuth = true;
  }

  logoutAuth(){
    this.isAuth = false;
  }
}
