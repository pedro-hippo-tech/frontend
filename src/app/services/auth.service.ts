import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  setRole(role: string): void {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  clearRole(): void {
    localStorage.removeItem('role');
  }

  login(email: string, senha: string) {
    return this.http.post<any>('http://localhost:8080/api/usuarios/login', { email, senha })
      .pipe(tap(response => {
        this.setToken(response.token);
        this.setRole(response.role);
      }));
  }

  cadastrar(usuario: any) {
    return this.http.post('http://localhost:8080/api/usuarios/cadastro', usuario);
  }
}
