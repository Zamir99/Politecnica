import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from '../services/cargar-script.service';


interface MenuItem {
  texto: string;
  ruta: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
    li{
        cursor: pointer;
      }
    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor( 
    private cargarScripts: CargarScriptService ) 
    
{ 
cargarScripts.Carga(
[
  

]
);
}


ngOnInit(): void {
}

     [x: string]: any;   
     inicioMenu: MenuItem[] = [
       {
         texto: 'Inicio',
         ruta: './pages/inicio'
       }
     ];
   
     pagesMenu: MenuItem[] = [
    
       {
         texto: 'Nosotros',
         ruta: '../pages/nosotros'
       },
    
   
     ];

  

}

