import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',

  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = {
    nome: '',
    email: '',
    cargo: '',
    tempoNaEmpresa: '',
    competencias: '',
    senha: ''
  };

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  cadastrarUsuario(): void {
    const headers = {
      'Content-Type': 'application/json'
    };

    this.http.post('http://localhost:8080/api/usuarios/cadastro', this.usuario, { headers }).subscribe(
      (response: any) => {
        console.log('Usuário cadastrado com sucesso!', response);
        
        this.authService.setToken(response.token);
        this.router.navigate(['/login']);  // Redirecionar para a página de login após o cadastro

      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error.error);
      }
    );
  }
}
