import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Darcio';
  nome = 'Sergio Alves'
  email = 'Isaac@gatinho '
  userData = {
    email: 'darcio@gmail.com',
    role: 'adimi'
  }

  title = 'curso-angular';
}
