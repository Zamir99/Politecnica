import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiePaginaComponent } from 'src/app/shared/pie-pagina/pie-pagina.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PiePaginaComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PiePaginaComponent
  ],
  providers:[]
})
export class SharedModule { }
