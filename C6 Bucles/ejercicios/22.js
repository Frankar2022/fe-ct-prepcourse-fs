function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var contador = 0;
  do {
    num = num + 5;
    contador++;
    console.log(num);
  } while (contador < 8);
}

doWhile(2);

module.exports = doWhile;