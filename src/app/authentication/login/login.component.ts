import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) { sessionStorage.clear() }

  loginForm = this.formBuilder.group({
    username: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required)
  })

  loginFunc() {
    this.authService.getDatabyCode(this.loginForm.value.username).subscribe((res) => {
      this.userData = res;
      if (this.userData.password == this.loginForm.value.password) {
        if (this.userData.isactive) {
          sessionStorage.setItem('username', this.userData.id);
          sessionStorage.setItem('userrole', this.userData.role)
          this.router.navigate(['auth', 'dashboard'])
        } else {
          this.toastr.error('In-active user, contact Admin');
        }
      } else {
        this.toastr.error('Invalid Credentials')
      }
    })
  }
}
