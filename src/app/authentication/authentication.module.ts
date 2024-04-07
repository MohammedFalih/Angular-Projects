import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UpdatePopupComponent } from './update-popup/update-popup.component';


@NgModule({
  declarations: [
    AuthFormComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    UserListingComponent,
    UpdatePopupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule
  ],
  exports: [
    AuthFormComponent,
    RegisterComponent
  ]
})
export class AuthenticationModule { }
