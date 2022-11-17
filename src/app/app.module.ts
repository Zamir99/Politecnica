import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//servicio
import { CargarScriptService } from './shared/services/cargar-script.service';
//fin servicio

import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';

//rutas principales
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    
  
  ],
  providers: [
    CargarScriptService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
