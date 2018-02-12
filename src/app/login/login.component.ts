import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService, User } from '../services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


theUser = new User();

  constructor(
    private userThang: UserApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }
  startLoginAjax(){
    this.userThang.postLogin(this.theUser)
      .then(()=>{
        this.routerThang.navigate(['/tasks']);
      })
      .catch((err)=>{
        console.log('hey fuck you bro');
      });
  }

}
