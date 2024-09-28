function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var producto = 1;
  if (a < b) {
    for (var i = a; i <= b; i++) {
      producto = producto * i;
    }
  } else if (b < a) {
    for (var i = b; i <= a; i++) {
      var producto = producto * i;
    }
  } else {
    var producto = a * b;
  }
  console.log(producto);
}

productoEntreNúmeros(1, 150);

module.exports = productoEntreNúmeros;