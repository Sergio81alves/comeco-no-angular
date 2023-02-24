import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from 'src/app/Produtos';
import { ListService } from 'src/app/services/list.service';



@Component({
  selector: 'app-detail-produtos',
  templateUrl: './detail-produtos.component.html',
  styleUrls: ['./detail-produtos.component.css']
})
export class DetailProdutosComponent implements OnInit {

  produtos?: Produtos;
  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getprodutos() //faco ele aqui e chamo ele la em baixo
   }

  ngOnInit(): void {
  }

  getprodutos(){
    const name = String(this.route.snapshot.paramMap.get('name'))
    this.listService.produtosget(name).subscribe((produtos) => (this.produtos = produtos))
    
  }

}
