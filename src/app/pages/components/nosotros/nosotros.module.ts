import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros.component';
import { FotoComponent } from './foto/foto.component';
import { InformacionComponent } from './informacion/informacion.component';
import { LogosComponent } from './logos/logos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PagesRoutingModule } from '../../pages-routing.module';



@NgModule({
  declarations: [
    NosotrosComponent,
    FotoComponent,
    InformacionComponent,
    LogosComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    NosotrosComponent,
    FotoComponent,
    InformacionComponent,
    LogosComponent,
    FormularioComponent
  ]
})
export class NosotrosModule { }
