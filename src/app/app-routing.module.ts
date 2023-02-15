import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TwoWayComponent } from './components/two-way/two-way.component';


const routes: Routes = [
  {path: "", component: FirstComponentComponent},
  {path: "list", component: ListRenderComponent},
  {path: "emiter", component: EmitterComponent},
  {path: "two", component: TwoWayComponent},
  {path: "eventos", component: EventosComponent},
  {path: "if", component: IfRenderComponent},
  {path: "list/:id", component: ItemDetailComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
