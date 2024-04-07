import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrl: './update-popup.component.css'
})
export class UpdatePopupComponent implements OnInit {
  roleList: any;
  editData: any;
  constructor(
    private service: AuthService,
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit(): void {
    this.service.getRole().subscribe((res) => {
      this.roleList = res;
    })
    if (this.data.usercode != null && this.data.usercode != '') {
      this.service.getDatabyCode(this.data.code).subscribe((res) => {
        this.editData = res;
        this.updateform.setValue({
          id: this.editData.id,
          name: this.editData.name,
          password: this.editData.password,
          email: this.editData.email,
          gender: this.editData.gender,
          role: this.editData.role,
          isactive: this.editData.isactive
        })
      })
    }
  }


  updateform = this.formbuilder.group({
    id: this.formbuilder.control(''),
    name: this.formbuilder.control(''),
    password: this.formbuilder.control(''),
    email: this.formbuilder.control(''),
    gender: this.formbuilder.control('male'),
    role: this.formbuilder.control('', Validators.required),
    isactive: this.formbuilder.control(false)
  });

  UpdateUser() { }
}
