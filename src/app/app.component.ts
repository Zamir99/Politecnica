import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from './shared/services/cargar-script.service';
import { EmailValidatorService } from './shared/validator/email-validator.service';
import { ValidatorService } from './shared/validator/validator.service';
//var jsfeat = require("../assets/jsfeat.js");


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private cargarScripts: CargarScriptService) 
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
          "assets/jsfeat",
        ]

        
  
      );
      }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'Politecnica';
}
