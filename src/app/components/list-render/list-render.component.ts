import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animais= [
    {nome: 'bob', tipo: 'Dog'},
    {nome: 'felipe', tipo: 'hourse'},
    {nome: 'check', tipo: 'cat'},
    {nome: 'marcia', tipo: 'Dog"a"'},
  ]

  ngOnInit(): void {
  }

}
