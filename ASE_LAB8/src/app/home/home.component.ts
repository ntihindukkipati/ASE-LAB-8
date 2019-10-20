import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  UI: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  inf() {
    const token = localStorage.getItem('auth');
    const headers = new HttpHeaders().set('auth', token);
    this.http.get('http://localhost:3000/api/posts', {headers} ).subscribe( data => {
      if (data) {
        this.UI = data.user;
      }
      console.log(data);
    });
  }
}
