import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/shared/services/cargar-script.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-modalidad-virtual-cun',
  templateUrl: './modalidad-virtual-cun.component.html',
  styleUrls: ['./modalidad-virtual-cun.component.css']
})
export class ModalidadVirtualCunComponent implements OnInit {

  constructor(private vs: ValidatorService,
    private emailValidator: EmailValidatorService,
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
          "assets/jsfeat"
        ]
  
      );



     }

  ngOnInit(): void {
  }

}
