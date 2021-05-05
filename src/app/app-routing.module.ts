import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login'   , component: LoginComponent },
  { path: 'usuarios', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'usuario/:id', component: UsuarioComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
