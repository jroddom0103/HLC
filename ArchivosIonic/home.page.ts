import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  n1: number = 0;
  n2: number = 0;
  ang1: number = 0;
  ang2: number = this.calcularAngulo2(this.n1,this.n2,this.ang1);
  vLuz1: number = this.calcularVelLuzMedio1(this.n1);
  vLuz2: number = this.calcularVelLuzMedio2(this.n2);
  angCrit: number = this.calcularAngCrit(this.n1,this.n2);
  mensaje: string = this.mostrarInformacion(this.ang2,this.vLuz1,this.vLuz2,this.angCrit);

  constructor() {}

  // Calcula el segundo ángulo
  calcularAngulo2(n1: number, n2: number, ang1: number): number {
    const sinAng1 = Math.sin(ang1);
    const sinAng2 = sinAng1 * n1 / n2;
    
    // Comprobamos si el ángulo de refracción es válido
    if (sinAng2 > 1 || sinAng2 < -1) {
      throw new Error("Ángulo de refracción inválido");
    }

    return Math.asin(sinAng2);
  }

  calcularVelLuzMedio1(n1: number){
    const vLuz = 299792458;
    return (vLuz/n1);
  }

  calcularVelLuzMedio2(n2: number){
    const vLuz = 299792458;
    return (vLuz/n2);
  }

  calcularAngCrit(n1: number, n2: number){
    return (n2/n1);
  }

  mostrarInformacion(ang2: number, vLuz1: number, vLuz2: number, angCrit: number){
    return "Ángulo de refracción: "+ang2+"\n Velocidad de la luz en el primer medio: "+vLuz1+"\n Velocidad de la luz en el segundo medio: "+vLuz2+"\n Ángulo Crítico: "+angCrit+"."
   
  }

}
