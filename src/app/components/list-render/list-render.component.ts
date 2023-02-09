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

  constructor(private listServe: ListService){

  }

  animais: Animal[]=  [
    {nome: 'bob', tipo: 'Dog', age: 22},
    {nome: 'felipe', tipo: 'hourse', age: 2},
    {nome: 'check', tipo: 'cat', age: 3},
    {nome: 'marcia', tipo: 'Dog"a"', age: 4},
  ]

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
  ngOnInit(): void {
  }

  animalDetails = ''
  showAge(animais: Animal){
    this.animalDetails = `O pet ${animais.nome} tem ${animais.age} Anos`
  }

  remopvendoAnimal(animal: Animal){
    console.log("Excluindo Animal")
    this.animais = this.listServe.remove(this.animais, animal)
  }
}
