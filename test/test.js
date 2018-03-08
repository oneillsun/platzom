
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
  it('Si la palabra termina en ar, se quitan esos dos caracteres', function(){
    const translation = platzom('Programar');
    expect(translation).to.equal('Program'); //Programar
  })
  it('Si la palabra comienza con Z, se añade pe al final', function(){
    const translation = platzom('Zorro');
    expect(translation).to.equal('Zorrope');

    const translation2 = platzom('Zarpar') //Zarppe
    expect(translation2).to.equal('Zarppe');
  })
  it('Si la palabra tiene 10 o más letras, se parte a la mitad y separar con un guion', function(){
    const translation = platzom('Abecedario');
    expect(translation).to.equal('Abece-dario');
  })
  it('Si la palabra original es un palindromo (igual de atras para adelante) ninguna regla se toma en cuenta.', function(){
    const translation = platzom('sometemos');
    expect(translation).to.equal('SoMeTeMoS');
  })

})
