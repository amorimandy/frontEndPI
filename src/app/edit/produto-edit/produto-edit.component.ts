import { CategoriaService } from './../../service/categoria.service';
import { ProdutoService } from './../../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Model/Produto';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from 'src/app/Model/Categoria';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto = new Produto()
  categoria: Categoria = new Categoria()

  listaCategorias: Categoria[]

  idCategoria: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService : CategoriaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') /* ARRUMAR CASO SEJA PRODUTOR OU USUARIO*/ {
      this.router.navigate(['/entrar']) /* ARRUMAR ESSE LINK */
    }
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
    this.findAllCategorias()
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp : Categoria) =>{
      this.categoria = resp
    })

  }

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp : Categoria[]) =>{
      this.listaCategorias = resp
    })
  }

  atualizar() {
    this.categoria.id = this.idCategoria

    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      alert('Produto atualizado com sucesso!')
      this.router.navigate(['/cadastro-produtos'])
    })
  }
}