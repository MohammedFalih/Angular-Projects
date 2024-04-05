import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(
    private formbuilder: FormBuilder,
    private toastr: ToastrService,
    private authentication: AuthService,
    private router: Router
  ) { }

  registerform = this.formbuilder.group({
    id: this.formbuilder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.formbuilder.control('', Validators.required),
    password: this.formbuilder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.formbuilder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.formbuilder.control('male'),
    role: this.formbuilder.control(''),
    isactive: this.formbuilder.control(false)
  });

  proceedregister() {
    if (this.registerform.valid) {
      this.authentication.registering(this.registerform.value).subscribe((result) => {
        this.toastr.success('Please contact admin for enable access.', 'Registered successfully')
        // this.router.navigate(['login'])
      }), (error: any) => {
        console.log(error);
      }
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }

}
