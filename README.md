# Platzom

Es un idoma inventado para el [curso de fundamentos de javascript](https://platzi.com/js), [Platzi] (https://platzi.com/)

## Descripción del idioma

- Si la palabra termina en ar, se quitan esos dos caracteres
- Si la palabra comienza con Z, se añade pe al final
- Si la palabra tiene 10 o más letras, se parte a la mitad y separar con un guion
- Si la palabra original es un palindromo (igual de atras para adelante) ninguna regla se toma en cuenta.

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom('Programar') //Programar
platzom('Zorro') //Zorrope
platzom('Zarpar') //Zarppe
platzom('Abecedario') //abce-dario
platzom('Sometemos') //SoMeTeMoS
```

## Créditos

- [Antonio Bello](https://twitter.com/antoniojbello)

## license

[MIT](https://opensource.org/licenses/MIT)
