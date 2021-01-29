import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatoComponent } from './contato/contato.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { ObjetivoOdsComponent } from './objetivo-ods/objetivo-ods.component';
import { MissaoVisaoValoresComponent } from './missao-visao-valores/missao-visao-valores.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreNosComponent,
    ContatoComponent,
    MenuComponent,
    FooterComponent,
    CadastrarComponent,
    EntrarComponent,
    CardapioComponent,
    PedidosComponent,
    CadastroProdutosComponent,
    ObjetivoOdsComponent,
    MissaoVisaoValoresComponent,
    MenuLogadoComponent,
    CadastroCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
