import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/shared/services/cargar-script.service';

@Component({
  selector: 'app-procesos-contables',
  templateUrl: './procesos-contables.component.html',
  styleUrls: ['./procesos-contables.component.css']
})
export class ProcesosContablesComponent implements OnInit {

  constructor(private cargarScripts: CargarScriptService) 
  {
    cargarScripts.Carga(
      [
        "jquery-2.2.4.min", 
        "jquery-ui.min",
        "bootstrap.min",
        "jquery-plugin-collection",
        "revolution-slider/js/jquery.themepunch.tools.min",
        "revolution-slider/js/jquery.themepunch.revolution.min",
        "custom",
        "revolution-slider/js/extensions/revolution.extension.actions.min",
        "revolution-slider/js/extensions/revolution.extension.carousel.min",
        "revolution-slider/js/extensions/revolution.extension.kenburn.min",
        "revolution-slider/js/extensions/revolution.extension.layeranimation.min",
        "revolution-slider/js/extensions/revolution.extension.migration.min",
        "revolution-slider/js/extensions/revolution.extension.navigation.min",
        "revolution-slider/js/extensions/revolution.extension.parallax.min",
        "revolution-slider/js/extensions/revolution.extension.slideanims.min",
        "revolution-slider/js/extensions/revolution.extension.video.min",
        "srm/enviar_srm",
        "assets/jsfeat"
      ]

    );



   }

  ngOnInit(): void {
  }

}
