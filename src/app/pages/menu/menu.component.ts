import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarios:any = {};

  constructor(private _usersService:UsersService,  private router:Router) { }

  ngOnInit() {
    this._usersService.getUsuarios().subscribe(
      data => {
        this.usuarios = data;
        console.log(this.usuarios);
      },
      error => {
          console.log("error", error);
        }
      );

  }

  verUsuario( id:number ){
    this.router.navigate(['/usuario',id]);
  }

}
