import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePopupComponent } from '../update-popup/update-popup.component';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrl: './user-listing.component.css'
})
export class UserListingComponent {
  usersData!: any;
  dataSource: any;
  displayedColumns: string[] = ['username', 'name', 'email', 'role', 'status', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private auth: AuthService, private dialog: MatDialog) {
    this.getAllUser();
  }

  getAllUser() {
    this.auth.getData().subscribe((res) => {
      this.usersData = res;
      this.dataSource = new MatTableDataSource(this.usersData)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  updateUser(code: any) {
    this.dialog.open(UpdatePopupComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data: {
        usercode: code
      }
    })

  }
}
