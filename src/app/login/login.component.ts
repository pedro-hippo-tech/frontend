import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface LoginResponse {
  token: string;
  role: string;
}

@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  
  

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    const payload = { email: this.email, senha: this.senha };
    this.http.post<LoginResponse>('http://localhost:8080/api/usuarios/login', payload).subscribe(
    response => {
      const token = response.token;
      const role = response.role;

      if (token && role) {
        this.authService.setToken(token);
        this.authService.setRole(role); // Armazena a role

        if (role === 'ADMIN') {
          this.router.navigate(['/admin-painel']);
        } else {
          this.router.navigate(['/user-painel']);
        }
      }
    },
    error => {
      console.error('Erro ao fazer login:', error);
    }
  );
  }
}
