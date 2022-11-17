import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/shared/services/cargar-script.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  constructor(private vs: ValidatorService,
    private emailValidator: EmailValidatorService,
    private cargarScripts: CargarScriptService) 
    {
      cargarScripts.Carga(
        [
          "js/jquery-2.2.4.min", 
          "js/jquery-ui.min",
          "js/bootstrap.min",
          "js/jquery-plugin-collection",
          "js/revolution-slider/js/jquery.themepunch.tools.min",
          "js/revolution-slider/js/jquery.themepunch.revolution.min",
          "js/custom",
          "js/revolution-slider/js/extensions/revolution.extension.actions.min",
          "js/revolution-slider/js/extensions/revolution.extension.carousel.min",
          "js/revolution-slider/js/extensions/revolution.extension.kenburn.min",
          "js/revolution-slider/js/extensions/revolution.extension.layeranimation.min",
          "js/revolution-slider/js/extensions/revolution.extension.migration.min",
          "js/revolution-slider/js/extensions/revolution.extension.navigation.min",
          "js/revolution-slider/js/extensions/revolution.extension.parallax.min",
          "js/revolution-slider/js/extensions/revolution.extension.slideanims.min",
          "js/revolution-slider/js/extensions/revolution.extension.video.min",
          "js/srm/enviar_srm"
        ]
  
      );

     }

  ngOnInit(): void {
  }

}
