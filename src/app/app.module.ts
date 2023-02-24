import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SergioComponent } from './teste/sergio/sergio.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectiviesComponent } from './components/directivies/directivies.component';
import { ComponentsEventosComponent } from './components-eventos/components-eventos.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TesteComponent } from './components/teste/teste.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { DetailProdutosComponent } from './components/detail-produtos/detail-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SergioComponent,
    ParentDataComponent,
    DirectiviesComponent,
    ComponentsEventosComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    TesteComponent,
    PipesComponent,
    TwoWayComponent,
    ItemDetailComponent,
    DetailProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
