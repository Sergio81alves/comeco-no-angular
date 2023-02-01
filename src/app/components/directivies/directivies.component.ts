import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-directivies',
  templateUrl: './directivies.component.html',
  styleUrls: ['./directivies.component.css']
})
export class DirectiviesComponent implements OnInit {
  font = 50;
  color = "red";
  fontFamily = 'Arial';
  @Input() titulo = '';
  classes =['green-Title', 'small-title' ]

  constructor() { }

  ngOnInit(): void {
  }

}
