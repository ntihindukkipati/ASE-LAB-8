import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'JWT';
  un: any;
  pass: any;
  ngOnInit() {
  }
  constructor(private http: HttpClient, private router: Router) {}
  ln() {
    let u = {
      un : this.un,
      pass : this.pass
    };
    this.http.post('http://localhost:3000/api/login', u ).subscribe( data => {
      localStorage.setItem('auth', data);
      this.router.navigate(['/home']);
    });
  }
}
