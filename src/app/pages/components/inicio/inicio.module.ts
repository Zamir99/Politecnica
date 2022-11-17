import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from 'src/app/pages/components/inicio/inicio.component';
import { LogosComponent } from 'src/app/pages/components/inicio/logos/logos.component';
import { AboutComponent } from 'src/app/pages/components/inicio/about/about.component';
import { FormularioComponent } from 'src/app/pages/components/inicio/formulario/formulario.component';
import { MisionComponent } from 'src/app/pages/components/inicio/mision/mision.component';
import { CursosComponent } from 'src/app/pages/components/inicio/cursos/cursos.component';
import { InformacionComponent } from 'src/app/pages/components/inicio/informacion/informacion.component';
import { Informacion1Component } from 'src/app/pages/components/inicio/informacion1/informacion1.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesRoutingModule } from '../../pages-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
    LogosComponent,
    AboutComponent,
    FormularioComponent,
    MisionComponent,
    CursosComponent,
    InformacionComponent,
    Informacion1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
    
  
  ],
  exports:[
    LogosComponent,
    AboutComponent,
    MisionComponent,
    CursosComponent,
    InformacionComponent,
    Informacion1Component,

  ]
})
export class InicioModule { }
