import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {
  canShow = true;
  nome = 'Sergi';
  nome2 = '';

  @Output() hadRat: EventEmitter<any> = new EventEmitter();

  trocarNome(){
    this.hadRat.emit();
    this.nome2 = "Sergio"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
