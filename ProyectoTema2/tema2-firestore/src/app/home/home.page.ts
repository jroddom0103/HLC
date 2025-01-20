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

  constructor(private firestoreService: FirestoreService) {
      // Crear un autor vacío
      this.autorEditando = {} as Autor;
  }

  clicBotonInsertar() {
    this.firestoreService.insertar("autores", this.autorEditando).then(() => {
      console.log('Autor creado correctamente!');
      this.autorEditando= {} as Autor;
    }, (error) => {
      console.error(error);
    });
  }

}
