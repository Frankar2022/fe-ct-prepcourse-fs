function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  if (numero <= 1) {
    console.log(false);
  } else {
    var esPotencia = numero;
    while (esPotencia % 2 === 0) {
      esPotencia /= 2;
    }
  }
  if (esPotencia === 1) {
    console.log(true);
  }else if (esPotencia > 1) {
    console.log(false);
  }
}


esPotenciaDeDos(2);

module.exports = esPotenciaDeDos;
