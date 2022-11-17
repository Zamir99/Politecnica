import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { InicioComponent } from './pages/components/inicio/inicio.component';

const routes: Routes = [  

  {path: '', redirectTo: 'pages/inicio',pathMatch:'prefix'},

  {
    path:'pages',
    loadChildren:() => import ('src/app/pages/pages.module').then(m => m.PagesModule)
  },
  
  //{path: '', component:InicioComponent },   
]; 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
