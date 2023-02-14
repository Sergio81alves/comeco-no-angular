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
  private apiUrl = 'http://localhost:3000/animais'
  constructor(private http: HttpClient) { }
  remove(animais: Animal[], animal: Animal){
    return animais.filter((a) => animal.nome !== a.nome);
  }

  remover(produtos: Produtos[], produto: Produtos){
    return produtos.filter((b) => produto.name !== b.name )
  }

  numeroDaSorte(){
    
  }
/*antes de usar essa função tem que importar funções do angular httpHeaders e httpClient */
  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl)
  }
}
