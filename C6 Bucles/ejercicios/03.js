function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if ( x > y){
    console.log(x);
  }else if ( x < y){
    console.log(y);
  }else{
    console.log(x);
  }
}

obtenerMayor(9,9);

module.exports = obtenerMayor;
