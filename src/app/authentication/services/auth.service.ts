import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: any = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.apiUrl);
  }

  getDatabyCode(code: any) {
    return this.http.get(this.apiUrl + '/' + code);
  }

  registering(inputdata:any){
    return this.http.post(this.apiUrl,inputdata)
  }

  updation(code: any, inputData: any) {
    return this.http.put<any>(this.apiUrl + code, inputData)
  }
}
