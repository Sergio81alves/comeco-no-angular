import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sergio',
  templateUrl: './sergio.component.html',
  styleUrls: ['./sergio.component.css']
})
export class SergioComponent implements OnInit {

  @Input() email!: string ;
  @Input() nome: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
