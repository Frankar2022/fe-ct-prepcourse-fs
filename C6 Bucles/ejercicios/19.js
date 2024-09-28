function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var suma = 0;
  for (var i = 1; i <= n; i++) {
    suma += i;
  }
  console.log(suma);
}

  sumarHastaN(3);

  module.exports = sumarHastaN;
