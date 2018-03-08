//Se exportará por defecto
export default function platzom(str){
  let translation = str;

  //Si la palabra termina en ar, se quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')){
    translation = str.slice(0, -2);
  }

  //Si la palabra comienza con Z, se añade pe al final
  if (str.toLowerCase().startsWith('z')){
    translation += 'pe';
  }

  //Si la palabra tiene 10 o más letras, se parte a la mitad y separar con un guion
  let lenght = translation.length;
  if (lenght >= 10){
    let half1; let half2;
    half1 = translation.slice(0, Math.round(lenght)/2);
    half2 = translation.slice(Math.round(lenght)/2);
    translation = half1 + '-' + half2;
  }

  const reverse = (str) => str.split('').reverse().join('');

  function minMay(){
    const length = str.length;
    let translation = '';
    let capitalize = true;
    for (let i = 0; i < lenght; i++){
      const char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  //Si la palabra original es un palindromo (igual de atras para adelante) ninguna regla se toma en cuenta.
  if (str== reverse(str)){
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
