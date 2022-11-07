/* Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas 
butacas desocupadas hay Suponga que para modelar este problema, se utiliza un arreglo 
con valores lógicos. La presencia de un valor verdadero (true) en el arreglo indica 
que la butaca está ocupada. La presencia de un valor falso (false) en el arreglo 
indica que la butaca está desocupada. */

let FilaLength: number = Number(
  prompt("ingrese la cantidad de filas que tendra su cine")
);
let Fila: boolean[] = new Array(FilaLength);
let ButacaLength: number = Number(
  prompt("ingrese la cantidad de butacas que tendra su cine")
);
let Butacas: boolean[] = new Array(ButacaLength);

for (let i: number = 0; i < FilaLength; i++) {
  for (let j: number = 0; j < ButacaLength; j++) {
    let Asientos: number = Math.random();
    if (Asientos <= 0.5) {
      Fila[i] = true;
      Butacas[j] = true;

      console.log(`El asiento ${j + 1}, de la fila ${i + 1} está desocupado`);
    } else {
      Fila[i] = false;
      Butacas[j] = false;
      console.log(`El asiento ${j + 1}, de la fila ${i + 1} está ocupado`);
    }
  }
}
