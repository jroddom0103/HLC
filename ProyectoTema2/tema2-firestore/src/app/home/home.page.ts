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

}
