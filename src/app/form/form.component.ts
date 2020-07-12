import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormService } from "src/app/services/form.service";
import { HttpClient } from "@angular/common/http"



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

get nombre(){
  return this.registrationForm.get('nombre');
}
get primerApellido(){
  return this.registrationForm.get('primerApellido');
}
get segundoApellido(){
  return this.registrationForm.get('segundoApellido');
}
get fechaNacimiento(){
  return this.registrationForm.get('fechaNacimiento');
}
get primerTelefono(){
  return this.registrationForm.get('primerTelefono');
}
get segundoTelefono(){
  return this.registrationForm.get('segundoTelefono');
}
get correo(){
  return this.registrationForm.get('correo');
}
get provincia(){
  return this.registrationForm.get('provincia');
}
get canton(){
  return this.registrationForm.get('canton');
}
get distrito(){
  return this.registrationForm.get('distrito');
}
get usuario(){
  return this.registrationForm.get('usuario');
}
get contrasena(){
  return this.registrationForm.get('contrasena');
}
get nombreProfesion(){
  return this.registrationForm.get('nombre');
}
get anosProfesion(){
  return this.registrationForm.get('anosProfesion');
}
get descripcionProfesion(){
  return this.registrationForm.get('descripcionProfesion');
}
get costoHora(){
  return this.registrationForm.get('costoHora');
}
get horarioDisponible(){
  return this.registrationForm.get('horarioDisponible');
}
get zonaTrabajo(){
  return this.registrationForm.get('zonaTrabajo');
}
get nombreReferencia(){
  return this.registrationForm.get('nombreReferencia');
}
get telefonoReferencia(){
  return this.registrationForm.get('telefonoReferencia');
}

registrationForm = this.formBuilder.group({
  nombre:[''],
  primerApellido:[''],
  segundoApellido:[''],
  fechaNacimiento:[''],
  primerTelefono:[''],
  segundoTelefono:[''],
  correo:[''],
  provincia:[''],
  canton:[''],
  distrito:[''],
  usuario:[''],
  contrasena:[''],
  nombreProfesion:[''],
  anosProfesion:[''],
  descripcionProfesion:[''],
  costoHora:[''],
  horarioDisponible:[''],
  zonaTrabajo:[''],
  nombreReferencia:[''],
  telefonoReferencia:['']
});

  constructor(
    private formBuilder: FormBuilder,
     private formService:FormService,
     public alertController: AlertController
     ) { }

  ngOnInit() {}

  submit(){
    const cons = {
      nombre: this.nombre.value,
      primerApellido: this.primerApellido.value,
      segundoApellido: this.segundoApellido.value,
      fechaNacimiento: this.fechaNacimiento.value,
      primerTelefono: this.primerTelefono.value,
      segundoTelefono: this.segundoApellido.value,
      correo: this.correo.value,
      provincia: this.provincia.value,
      canton: this.canton.value,
      distrito: this.distrito.value,
      usuario: this.usuario.value,
      contrasena: this.contrasena.value,
      nombreProfesion: this.nombreProfesion.value,
      anosProfesion: this.anosProfesion.value,
      descripcionProfesion: this.descripcionProfesion.value,
      costoHora: this.costoHora.value,
      horarioDisponible: this.horarioDisponible.value,
      zonaTrabajo: this.zonaTrabajo.value,
      nombreReferencia: this.nombreReferencia.value,
      telefonoReferencia: this.telefonoReferencia.value
    }
    this.formService.agregarOferta(cons).subscribe(array =>{
      console.log(array); 
      this.presentAlert();
      this.registrationForm.reset();
    },
    err=>{
      return false;
    });
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SALIR',
      //subHeader: 'Subtitle',
      message: 'La oferta de trabajo se ha registrado con éxito.',
      buttons: ['ok']
    });

    await alert.present();
  }

}
