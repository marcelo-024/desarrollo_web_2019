#  Introducción a JS  #



JAVASCRIPT es un lenguaje de programación **imperativo** completo como C#, Java, PHP, etc.



JS se ejecuta siempre en un **entorno determinado** al ser un lenguaje interpretado.
El entorno proporciona el interprete o motor de JS.

Posibles entornos:

- Navegador (parseador,renderizador,**motor V8 de Chrome**).
- Node (también utiliza el motor V8 de Chrome).
- OS Móvil.



Como lenguaje de programación JS implica:
- Datos y variables.
    - Objetos y funciones.
- Sentencias y expresiones.
- Estructuras de control:
    - Iteraciones.
    - Condiciones.

Los lenguajes de programación pueden ser:
 - Tipado débil o fuerte.
   - Tipado Fuerte (Las variables tienen un tipo independiente del dato que van a contener).
- Tipado estático o dinámico.
    - Tipado estático (Una vez definido el tipo no puede cambiarse)



    En concreto JS es un lenguaje de **tipado** débil y dinámico.

    **Débil** (Las variables no tienen un tipo definido).
   ** Dinámico** (El tipo de dichas variables puede cambiar)

# Datos y variables #

 ## Tipos primitivos ##

```
20  //Tipo number//
'Alejandro' //Tipo string//
true //Tipo boolean//
undefined //tipo Undefined//
```
## Tipos complejos o referenciados ##

Object :
Contenedores de series de propiedades.


`{nombre: 'Pepe', edad: 27} //Tipo object`


Un objeto es una lista de **propiedades**. Objetos internos tb tienen tipos.

Un array es una **lista indexada** (cada item es referenciado por su posicion empezando x 0)


# Funciones


Declarar una variable.

`console.log(greet)`

Declarar una variable e inicializarla (darle valor) al mismo tiempo es lo más recomendable:

`let user = 'Pepe'
`

Es una mala práctica inicializar una variable sin antes declararla: 

`curso='JavaScript'`


## Function

Nos permite crear el cuerpo o declaración de una función.

Declaración de la función:
```
function saludar () {
    
    let saludo='Hola'

    console.log(saludo)
}
```
Invocación de la función:

```
saludar ()
```

En el ejemplo anterior la variable **_saludo_** es local a la función **_saludar_**

Podemos declarar variables dentro de los paréntesis utilizados al declarar la función. Estas condiciones se conocen como parámetros. A los parámetros es posible darles valor desde fuera.

