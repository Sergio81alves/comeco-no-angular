import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Form, FormGroup } from '@angular/forms';
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

  id = parseFloat;
  nome = '';
  tipo = '';
  age = '';


  mostrarItem = "";
  items = ['joão', 'pedro', 'victor'];

  enviar(){
    this.items.push(this.mostrarItem)
  }
  constructor(private listService: ListService){
    //faco primeiro essa função depois chamo ela lá em baixo.
    //chamo ela no meu constructor para construir no momento do site
    this.getAnimals()
    this.getProdutos()
  }

  animais: Animal[]=  [];

  produtos: Produtos[] = [];

  mostPreco = ''
  showPreco(produtos: Produtos){
    this.mostPreco = `O valor do ${produtos.name} é R$${produtos.preco } Reais`
  }
  removendoProduto(produtos: Produtos){
    this.produtos = this.listService.excluir(this.produtos, produtos)
  }


  ngOnInit(): void {
    this.contato = {};
    this.contatos = Array<any>;
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

  getProdutos(): void{
    this.listService.pegarTudo().subscribe((produtos) => this.produtos = produtos)
  }

  contatos = Array<any>;
  contato: any;
  
  criar(frm: FormGroup){
    this.listService.criar(this.contato).subscribe((item) => {
      this.items.push(this.items);

      frm.reset
    });
  }
  item(item: any) {
    throw new Error('Method not implemented.');
  }
  adiciona(animais: Animal[]){
   
  }
}
