import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url:string =  "https://jsonplaceholder.typicode.com/users";  
  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(this.url);
}

}
