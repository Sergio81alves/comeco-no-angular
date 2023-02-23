import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Animal } from 'src/app/Animal';
import { Produtos } from 'src/app/Produtos';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animal?: Animal;
  produto?: Produtos;


  constructor(private listService: ListService){
    //faco primeiro essa função depois chamo ela lá em baixo.
    //chamo ela no meu constructor para construir no momento do site
    this.getAnimals()
    this.getProdutos()
  }

  animais: Animal[]=  [];

  produtos: Produtos[]= [];

  mostPreco = ''
  showPreco(produtos: Produtos){
    this.mostPreco = `O valor do ${produtos.name} é R$${produtos.preco } Reais`
  }
  removendoProduto(produtos: Produtos){
    this.produtos = this.produtos.filter( (b) => produtos.name !== b.name);
    this.listService.excluir(produtos.name).subscribe();
  }


  ngOnInit(): void {
    
  }
  

  animalDetails = ''
  showAge(animais: Animal){
    this.animalDetails = `O pet ${animais.nome} tem ${animais.age} Anos`
  }

  removendoAnimal(animal: Animal){
    /*essa função recebe o animal, depois vai lá em lista serviço e usa a função de remover, que por sua vez só faz um filtro retornando os outros itens menos o selecionado */
    
    this.animais = this.animais.filter((a) => animal.nome !== a.nome);
    this.listService.remove(animal.id).subscribe(); //o subscribe aqui é so para o angular falar que foi concretizado
  }
  //função que pega os animais do banco de dados
  getAnimals(): void{
    //esse cara (getAll) eu vou ter que ter la no servidor para pegar
    this.listService.getAll().subscribe((animals) => this.animais = animals);
    //subscribe fica esperando o evento ser concretizado
  }

  getProdutos(): void{
    this.listService.pegarTudo().subscribe((produtos) => this.produtos = produtos)
  }

}
