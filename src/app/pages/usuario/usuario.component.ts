import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  usuario:any = {};

  constructor(private activatedRoute:ActivatedRoute, private _usersService:UsersService,  private router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.usuario = params.get('id');
    });

    this._usersService.getUsuarios().subscribe(
      data => {
        this.usuario = data;
        console.log(this.usuario)
      },
      error => {
        
          console.log("errror", error);
        
      });
  }

}
