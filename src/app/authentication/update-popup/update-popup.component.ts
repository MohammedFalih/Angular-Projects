import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<UpdatePopupComponent>,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.service.getRole().subscribe((res) => {
      this.roleList = res;
    })
    if (this.data.usercode != null && this.data.usercode != '') {
      this.service.getDatabyCode(this.data.usercode).subscribe((res) => {
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

  UpdateUser() {
    if (this.updateform.valid) {
      this.service.updation(this.updateform.value.id, this.updateform.value).subscribe((res) => {
        this.toastr.success('Updated Successfully');
        console.log(res)
        this.dialog.close()
      })
    } else {
      this.toastr.warning('Invalid inputs')
    }
  }
}
