import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  myNumber = 0;
  newName = ''

  onChangeNumber(){
    this.myNumber = Math.floor(Math.random()* 10)
  }
  onHadRat(){
    console.log('Deu certo! ')
    this.newName = 'Sergio'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
