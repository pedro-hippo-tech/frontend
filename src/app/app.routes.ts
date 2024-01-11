import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { AdminPainelComponent } from './admin-painel/admin-painel.component';
import { UserPainelComponent } from './user-painel/user-painel.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin-painel', 
    component: AdminPainelComponent,
    canActivate: [AuthGuard]  // Protegendo a rota
  },
  { 
    path: 'user-painel', 
    component: UserPainelComponent,
    canActivate: [AuthGuard]  // Protegendo a rota
  },
  { path: 'cadastro', component: CadastroComponent }
];