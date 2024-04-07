import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css'
})
export class AuthFormComponent implements DoCheck, OnInit {
  showNavbar = true;
  isAdmin = false;

  constructor(private router: Router, private service: AuthService) {

  }
  ngOnInit(): void {
    this.router.navigate(['auth', 'login'])
  }

  ngDoCheck() {
    const currentUrl = this.router.url;
    // console.log("Current: ", currentUrl)
    if (currentUrl == '/auth/login' || currentUrl == '/auth/register' || currentUrl == '/auth') {
      this.showNavbar = false;
    } else {
      this.showNavbar = true;
    }
    if (this.service.GetUserRole() === 'Admin') {
      this.isAdmin = true
    } else {
      this.isAdmin = false;
    }
  }

}
