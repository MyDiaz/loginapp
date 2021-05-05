import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.models';
import { find, map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarios: Array<UsuarioModel>;

  userToken: string;

  constructor( private http: HttpClient ) { 
    this.usuarios = [{
      email: "correo@correo.com",
      password: "12345678"
    },{
      email: "correo1@correo.com",
      password: "asdfghjk"
    }]
  }

  login( usuario:UsuarioModel){  
    let findUser =  this.usuarios.findIndex(user => {
      return user.email === usuario.email && user.password === usuario.password
    })
    if(findUser == -1){
      return false;
    }else{
      this.guardarToken(usuario.email);
      return true;
    }
  }

  nuevoUsuario ( usuario:UsuarioModel ) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `/accounts:signUp?key`,
      authData
    ).pipe(
      map( resp => {
        console.log("entro en el map")
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  private guardarToken( idToken:string ){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken(){
    if (localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
      console.log("this.userToken",this.userToken);
    } else { 
      this.userToken = '';
    }

    return this.userToken;
  }

  //saber si el usuario esta autenticado
  estaAutenticado(): boolean{
    this.leerToken();
    if (this.userToken.length == 0) {
      return false;
    }else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token');
  }

}