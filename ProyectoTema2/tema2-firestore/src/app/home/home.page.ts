import { Component } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Autor } from '../autor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {

  autorEditando: Autor;

  arrayColeccionAutores: any = [{
    id: "",
    data: {} as Autor
  }];

  idAutorSelec: string;

  selecAutor(autorSelec) {
    console.log("Autor seleccionado: ");
    console.log(autorSelec);
    this.idAutorSelec = autorSelec.id;
    this.autorEditando.nombreCompleto = autorSelec.data.nombreCompleto;
    this.autorEditando.lugarNacimiento = autorSelec.data.lugarNacimiento;
    this.autorEditando.obrasNotables = autorSelec.data.obrasNotables;
  }

  constructor(private firestoreService: FirestoreService) {
      // Crear un autor vacío
      this.autorEditando = {} as Autor;
      this.obtenerListaAutores();
  }

  clicBotonInsertar() {
    this.firestoreService.insertar("autores", this.autorEditando).then(() => {
      console.log('Autor creado correctamente!');
      this.autorEditando= {} as Autor;
    }, (error) => {
      console.error(error);
    });
  }

  obtenerListaAutores(){
    this.firestoreService.consultar("autores").subscribe((resultadoConsultaAutores) => {
      this.arrayColeccionAutores = [];
      resultadoConsultaAutores.forEach((datosAutor: any) => {
        this.arrayColeccionAutores.push({
          id: datosAutor.payload.doc.id,
          data: datosAutor.payload.doc.data()
        });
      })
    });
  }

  clicBotonBorrar() {
    this.firestoreService.borrar("autores", this.idAutorSelec).then(() => {
      // Actualizar la lista completa
      this.obtenerListaAutores();
      // Limpiar datos de pantalla
      this.autorEditando = {} as Autor;
    })
  }

}
