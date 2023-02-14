import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { Produtos } from 'src/app/Produtos';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  constructor(private listService: ListService){
    //faco primeiro essa função depois chamo ela lá em baixo.
    //chamo ela no meu constructor para construir no momento do site
    this.getAnimals()
  }

  animais: Animal[]=  [];

  animal: Animal =  {
    nome: 'teste', 
    tipo: 'Dragão', 
    age: 10,
  }
  produtos: Produtos[] = [
    {name: "Dipirona", ml: "20ml", tarja: "Branca", preco: "15"},
    {name: "Novalgina", ml: "15ml", tarja: "Branca", preco: "16"},
    {name: "Paracetamol", ml: "25ml", tarja: "Branca", preco: "20"},
    {name: "Decadrom", ml: "20ml", tarja: "Preta", preco: "45"},
    {name: "defratr", ml: "10ml", tarja: "vermelha", preco: "100"},
  ]

  mostPreco = ''
  showPreco(produtos: Produtos){
    this.mostPreco = `O valor do ${produtos.name} é R$${produtos.preco } Reais`
  }
  excluindoProduto(produtos: Produtos){
    this.produtos = this.listService.remover(this.produtos, produtos)
  }

  ngOnInit(): void {
  }

  animalDetails = ''
  showAge(animais: Animal){
    this.animalDetails = `O pet ${animais.nome} tem ${animais.age} Anos`
  }

  remopvendoAnimal(animal: Animal){
    /*essa função recebe o animal, depois vai lá em lista serviço e usa a função de remover, que por sua vez só faz um filtro retornando os outros itens menos o selecionado */
    this.animais = this.listService.remove(this.animais, animal)
  }
  //função que pega os animais do banco de dados
  getAnimals(): void{
    //esse cara (getAll) eu vou ter que ter la no servidor para pegar
    this.listService.getAll().subscribe((animals) => this.animais = animals);
    //subscribe fica esperando o evento ser concretizado
  }
}
