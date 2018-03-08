'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
//Se exportará por defecto
function platzom(str) {
  var translation = str;

  //Si la palabra termina en ar, se quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  //Si la palabra comienza con Z, se añade pe al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  //Si la palabra tiene 10 o más letras, se parte a la mitad y separar con un guion
  var lenght = translation.length;
  if (lenght >= 10) {
    var half1 = void 0;var half2 = void 0;
    half1 = translation.slice(0, Math.round(lenght) / 2);
    half2 = translation.slice(Math.round(lenght) / 2);
    translation = half1 + '-' + half2;
  }

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay() {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < lenght; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  //Si la palabra original es un palindromo (igual de atras para adelante) ninguna regla se toma en cuenta.
  if (str == reverse(str)) {
    return minMay();
  }

  return translation;
}
//
// console.log ('Resultado: ', platzom('administrar'));
// console.log ('Resultado: ', platzom('zorro'));
// console.log ('Resultado: ', platzom('zarpar'));
// console.log ('Resultado: ', platzom('abecedario'));
// console.log ('Resultado: ', platzom('caminarpoer'));
// console.log ('Resultado: ', platzom('sometemos'));
// console.log ('Resultado: ', platzom('arepera'));