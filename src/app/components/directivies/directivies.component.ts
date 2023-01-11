import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-directivies',
  templateUrl: './directivies.component.html',
  styleUrls: ['./directivies.component.css']
})
export class DirectiviesComponent implements OnInit {
  font = 50;
  color = "red";
  fontFamily = 'Arial';

  classes =['green-Title', 'small-title' ]

  constructor() { }

  ngOnInit(): void {
  }

}
