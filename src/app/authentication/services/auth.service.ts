import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user_Url: any = 'http://localhost:3000/user';
  role_Url: any = 'http://localhost:3000/role';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.user_Url);
  }

  getDatabyCode(code: any) {
    return this.http.get(this.user_Url + '/' + code);
  }

  getRole() {
    return this.http.get(this.role_Url)
  }

  registering(inputdata: any) {
    return this.http.post(this.user_Url, inputdata)
  }

  updation(code: any, inputData: any) {
    return this.http.put<any>(this.user_Url + code, inputData)
  }

  isLoggedIn() {
    return sessionStorage.getItem('username') !== null
  }

  GetUserRole() {
    return sessionStorage.getItem('userrole') !== null ? sessionStorage.getItem('userrole')?.toString() : '';
  }
}
