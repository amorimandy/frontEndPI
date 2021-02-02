import { AlertService } from './../../service/alert.service';

import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from './../../service/categoria.service';
import { Categoria } from './../../Model/Categoria';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  categoria: Categoria = new Categoria()

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  atualizar(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp:Categoria)=>{
      this.categoria = resp
      this.alert.showAlertSuccess("Categoria atualizado com sucesso")
      this.router.navigate(['/cadastro-categoria'])
    })
  }


  
}
