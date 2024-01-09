import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports:[FormsModule],
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

  constructor(private http: HttpClient) {}

  cadastrarUsuario() {
    this.http.post('http://localhost:8080/api/usuarios/cadastro', this.usuario).subscribe(
      (response: any) => {
        console.log('Usuário cadastrado com sucesso!', response);
        // Aqui você pode redirecionar para outra página ou mostrar uma mensagem de sucesso.
      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error.error);
      }
    );
  }
}
