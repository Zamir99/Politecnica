import { NgModule } from '@angular/core';

import { NosotrosComponent } from 'src/app/pages/components/nosotros/nosotros.component';
import { Routes,RouterModule } from '@angular/router';
import { ModalidadVirtualCunComponent } from './components/programas/modalidad-virtual-cun/modalidad-virtual-cun.component';
import { ModalidadPresencialCunComponent } from './components/programas/modalidad-presencial-cun/modalidad-presencial-cun.component';
import { ModalidadDistanciaCunComponent } from './components/programas/modalidad-distancia-cun/modalidad-distancia-cun.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProcesosContablesComponent } from './components/programas/procesos-contables/procesos-contables.component';
import { InglesAtencionClienteComponent } from './components/programas/ingles-atencion-cliente/ingles-atencion-cliente.component';

const routes: Routes = [
  {
    path: '',
    children:[
      //raiz
      {path: 'inicio', component: InicioComponent},   
      //nosotros
      {path: 'nosotros', component: NosotrosComponent},
      //Programas
      {path: 'modalidad-virtual-cun', component: ModalidadVirtualCunComponent},
      {path: 'modalidad-presencial-cun', component: ModalidadPresencialCunComponent},
      {path: 'modalidad-distancia-cun', component: ModalidadDistanciaCunComponent},
      {path: 'procesos-contables', component: ProcesosContablesComponent},
      {path: 'ingles-atencion-cliente',component: InglesAtencionClienteComponent},
      //{path: '**', redirectTo:'inicio'},
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
