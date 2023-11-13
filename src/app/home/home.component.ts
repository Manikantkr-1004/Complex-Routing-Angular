import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = "";
  pass: string = "";

  constructor(private authService: AuthService){}

  ngOnInit(){
    console.log("It is a Home page")
  }

  onEmail(e:Event){
    this.email = (e.target as HTMLInputElement).value;
  }
  onPass(e:Event){
    this.pass = (e.target as HTMLInputElement).value;
  }

  onLogin(){
    if(this.email===""){
      alert("email should be filled");
      return;
    }

    if(this.pass===""){
      alert("Password should be filled");
      return;
    }

    if(this.email==='ram@gmail.com' && this.pass==='1234'){
      this.authService.loginAuth();
      alert("Login Successfull");
    }else{
      alert("Your credentials is wrong");
    }
  }
}
