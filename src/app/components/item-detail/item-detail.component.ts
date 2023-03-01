import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

// ? quer dizerpode vir ou não
animal?: Animal;
  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal() //faco ele aqui e chamo ele la em baixo
   }

  ngOnInit(): void {
  }

  
  //apartir desse cara eu vou puxar o dado da rota
  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.listService.getItam(id).subscribe((animal) => (this.animal = animal))
    
  }
}
