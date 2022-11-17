import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalidadVirtualCunComponent } from '../programas/modalidad-virtual-cun/modalidad-virtual-cun.component';
import { InformacionModalidadvCunComponent } from './modalidad-virtual-cun/informacion-modalidadv-cun/informacion-modalidadv-cun.component';
import { CursosModalidadvCunComponent } from './modalidad-virtual-cun/cursos-modalidadv-cun/cursos-modalidadv-cun.component';
import { InformacionModalidadpCunComponent } from './modalidad-presencial-cun/informacion-modalidadp-cun/informacion-modalidadp-cun.component';
import { ModalidadPresencialCunComponent } from './modalidad-presencial-cun/modalidad-presencial-cun.component';
import { PagesRoutingModule } from '../../pages-routing.module';
import { CursosModalidadpCunComponent } from './modalidad-presencial-cun/cursos-modalidadp-cun/cursos-modalidadp-cun.component';
import { ModalidadDistanciaCunComponent } from './modalidad-distancia-cun/modalidad-distancia-cun.component';
import { InformacionDistanciaCunComponent } from './modalidad-distancia-cun/informacion-distancia-cun/informacion-distancia-cun.component';
import { CursosDistanciaCunComponent } from './modalidad-distancia-cun/cursos-distancia-cun/cursos-distancia-cun.component';
import { ProcesosContablesComponent } from './procesos-contables/procesos-contables.component';
import { InglesAtencionClienteComponent } from './ingles-atencion-cliente/ingles-atencion-cliente.component';
import { InformacionPcontablesComponent } from './procesos-contables/informacion-pcontables/informacion-pcontables.component';
import { Informacion1PcontablesComponent } from './procesos-contables/informacion1-pcontables/informacion1-pcontables.component';
import { InformacionInglesComponent } from './ingles-atencion-cliente/informacion-ingles/informacion-ingles.component';
import { Informacion1InglesComponent } from './ingles-atencion-cliente/informacion1-ingles/informacion1-ingles.component';



@NgModule({
  declarations: [
    ModalidadVirtualCunComponent,
    InformacionModalidadvCunComponent,
    CursosModalidadvCunComponent,
    ModalidadPresencialCunComponent,
    InformacionModalidadpCunComponent,
    CursosModalidadpCunComponent,
    ModalidadDistanciaCunComponent,
    InformacionDistanciaCunComponent,
    CursosDistanciaCunComponent,
    ProcesosContablesComponent,
    InglesAtencionClienteComponent,
    InformacionPcontablesComponent,
    Informacion1PcontablesComponent,
    InformacionInglesComponent,
    Informacion1InglesComponent,
    //cursos
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[
    ModalidadVirtualCunComponent,
    InformacionModalidadvCunComponent,
    CursosModalidadvCunComponent,
    ModalidadPresencialCunComponent,
    CursosModalidadpCunComponent,
    ModalidadDistanciaCunComponent,
    InformacionDistanciaCunComponent,
    CursosDistanciaCunComponent,
    ProcesosContablesComponent,
    InglesAtencionClienteComponent,
    InformacionInglesComponent,
    Informacion1InglesComponent,
    //cursos
    

  ]
})
export class ProgramasModule { }
