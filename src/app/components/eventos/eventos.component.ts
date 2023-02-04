import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show = true
  mensagem(): void {
    this.show = !this.show //toggle o nome desse recurso que muda ele para diferente dele mesmo
  }
  constructor() { }

  ngOnInit(): void {
  }

}
