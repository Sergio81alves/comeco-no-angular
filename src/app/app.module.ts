import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ChangeNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
