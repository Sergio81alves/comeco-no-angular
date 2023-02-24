import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Animal } from '../Animal';
import { Produtos } from '../Produtos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  //private só fica acessivel na class, não fica acessivel no component, isso é uma boa pratica para url por exemplo
  private apiUrl = 'http://localhost:3000/animais';
  private urlApi = 'http://localhost:3000/produtos';
 
  constructor(private http: HttpClient) { }
  remove(id: number){ //tenho que falar a entidade que estou deletando <Animal>
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  excluir(name: string){
    return this.http.delete<Produtos>(`${this.urlApi}/${name}`);
  }

  adiciona(animais: Animal[]){
    return this.http.post(this.apiUrl, animais)
  }

 
/*antes de usar essa função tem que importar funções do angular httpHeaders e httpClient */
  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl)
  }

  getItam(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }

  pegarTudo(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.urlApi)
  }

  produtosget(name: string): Observable<Produtos>{
    return this.http.get<Produtos>(`${this.urlApi}/${name}`)
  }
}
