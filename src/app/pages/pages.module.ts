import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from 'src/app/pages/pages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgramasModule } from 'src/app/pages/components/programas/programas.module';
import { InicioModule } from './components/inicio/inicio.module';
import { NosotrosModule } from './components/nosotros/nosotros.module';



@NgModule({
  declarations: [
   
    
    
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ProgramasModule,
    InicioModule,
    NosotrosModule,
    
    
  ],
  exports:[
   
  ]


})
export class PagesModule { }
