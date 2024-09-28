function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if (numero > 1) {
    var contador = 0;
    for (var i = 2; i < numero; i++) {
      var resto = numero % i;
      if (resto === 0) {
        contador++;
      }
    }
    if (contador === 0) {
      console.log(true);
    } else {
      console.log(false);
    }

  } else {
    console.log(false);
  }
}

esNumeroPrimo(7);

module.exports = esNumeroPrimo;
