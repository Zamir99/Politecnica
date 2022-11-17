import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/shared/services/cargar-script.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-ingles-atencion-cliente',
  templateUrl: './ingles-atencion-cliente.component.html',
  styleUrls: ['./ingles-atencion-cliente.component.css']
})
export class InglesAtencionClienteComponent implements OnInit {

  constructor(private cargarScripts: CargarScriptService) 
    {
      cargarScripts.Carga(
        [
          "jquery-2.2.4.min", 
          "jquery-ui.min",
          "bootstrap.min",
          "jquery-plugin-collection",
          "jquery.themepunch.tools.min",
          "jquery.themepunch.revolution.min",
          "custom",
          "revolution.extension.actions.min",
          "revolution.extension.carousel.min",
          "revolution.extension.kenburn.min",
          "revolution.extension.layeranimation.min",
          "revolution.extension.migration.min",
          "revolution.extension.navigation.min",
          "revolution.extension.parallax.min",
          "revolution.extension.slideanims.min",
          "revolution.extension.video.min",
          "srm/enviar_srm",
          "jsfeat"
        ]
  
      );



     }

  ngOnInit(): void {
  }

}
