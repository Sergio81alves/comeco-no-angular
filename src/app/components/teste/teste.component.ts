import { Component, OnInit } from '@angular/core';
import { Teste } from 'src/app/TesteInterface';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Clientes: Teste[] = [
    {nome:'Cezar', idade: 24, peso: 65 },
    {nome:'Marcos', idade: 12, peso: 45 },
    {nome:'Junior', idade: 45, peso: 55 },
    {nome:'Vinicios', idade: 22, peso: 80 },
    {nome:'Carlinhos', idade: 26, peso: 75 },
  ]
  
  showPeso = ''

  mostrarPeso(Clientes: Teste){
    this.showPeso = `O peso do ${Clientes.nome} é ${Clientes.peso}Kg`
  }
}
