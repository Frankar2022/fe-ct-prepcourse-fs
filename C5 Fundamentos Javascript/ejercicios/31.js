// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:
  //Primera forma
  /*var cuadrado = num ** 2;*/
  //Segunda forma
  /*var cuadrado = num * num;*/
  //Tercera forma
  var cuadrado = Math.pow(num, 2);
  return cuadrado;
}

module.exports = elevarAlCuadrado;
