import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SergioComponent } from './teste/sergio/sergio.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectiviesComponent } from './components/directivies/directivies.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SergioComponent,
    ParentDataComponent,
    DirectiviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
