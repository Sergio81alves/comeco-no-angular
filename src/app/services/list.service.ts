import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Animal } from '../Animal';
import { Produtos } from '../Produtos';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  remove(animais: Animal[], animal: Animal){
    return animais.filter((a) => animal.nome !== a.nome);
  }

  remover(produtos: Produtos[], produto: Produtos){
    return produtos.filter((b) => produto.name !== b.name )
  }

  numeroDaSorte(){
    
  }
}
