function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if (letra === 'a'){
    console.log("Es vocal");
  }else if (letra === 'e'){
    console.log("Es vocal");
  }else if (letra === 'i'){
    console.log("Es vocal");
  }else if (letra === 'o'){
    console.log("Es vocal");
  }else if (letra === 'u'){
    console.log("Es vocal");
  }else {
    console.log("Dato incorrecto");
  }
}

esVocal('texto largo');

module.exports = esVocal;
