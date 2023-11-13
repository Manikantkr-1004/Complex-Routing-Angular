import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'complex-routing';

  constructor(private authService: AuthService){}

  onLogout(){
    this.authService.logoutAuth();
    window.location.reload();
  }

  checkAuth(){
    if(this.authService.getAuth()){
      return true;
    }else{
      return false;
    }
  }
}
