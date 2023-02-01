import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  nome: string="Sergio Alves"
  age: number= 25
  job = "Programador"
  bolo=['farinha','acucar', 'milk']

  carro={
    marca: 'wolks',
    ano: 2020

  }

  constructor() { }

  ngOnInit(): void {
  }

}
