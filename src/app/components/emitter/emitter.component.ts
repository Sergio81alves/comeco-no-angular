import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  myNumber = 0;
  newName = 'Sergio'

  onChangeNumber(){
    this.myNumber = Math.floor(Math.random()* 3)
  }
  onHadRat(){
    this.myNumber = Math.floor(Math.random()* 3)
    console.log(this.myNumber)
    this.newName = this.newName
  }
  constructor() { }

  ngOnInit(): void {
  }

}
