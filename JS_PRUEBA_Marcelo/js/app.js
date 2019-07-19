export class App {

    constructor() {

        //nodos
    this.input = document.querySelector('#input')
    this.btn = document.querySelector('#btn')
    this.output = document.querySelector('#output')
        //manejadores
    this.btn.addEventListener('click', this.onClick.bind(this))
    }
   

/**
 * @function
 *  contar
 * @description Función que cuenta el número de palabras en una frase
 * 
 * @param {string}: cadena
 * 
 * @returns {number}: total
 * 
 */

 contar(){
     let aStr = String(this.input.value).split(' ') 
     if ((aStr.length)-1 > 0) {
     
     return aStr.length}
      else {
         return 0
     }
     

 }



 /**
  * @description función que reconoce la longitud media de varias palabras
  * 
  * @param {string}: cadena
  * 
  * @returns {number}: media
  * 
  * Recoger el número total de caracteres QUE CONFORMAN LAS PALABRAS y dividirlo entre el número de ellas
  */
    mediaPa() {
        let aStr = String(this.input.value).split(' ') 
        let joint = aStr.join('').length
        return  joint / aStr.length
    }

  /**
   * @description función que cuenta el número de veces que aparece una letra en un string
   * 
   * @param {string}: cadena
   * 
   * @returns {array}: aVeces
   * 
   * 
   * Comparar cada letra 
   */


   /** ¡¡¡¡¡¡ FUNCION COMENTADA !!!!!!*/
/* howMany() {
   const abc = {
       a: 0 ,
       b: 0,
       c: 0,
       d: 0,
       e: 0,
       f: 0,
       g: 0,
       h: 0,
       i: 0,
       j: 0,
       k: 0,  
       l:0,
       m:0,
       n:0,
       o:0,
       p:0,
       q:0,
       r:0,
       s:0,
       t:0,
       u:0,
       v:0,
       w:0,
       x:0,
       y:0,
       z:0,


   }
   for (const key in abc) {
       if (abc.hasOwnProperty(key)) {
           //const element = abc[key];
           for (let i = 0; i < this.input.value.length; i++) {
              if (this.input.value[i].toLowerCase() === key)  {abc[key]};
               
           }
       }
   }
    }
} */
   




/**
    * @description función que devuelve la frecuencia de aparición de cada caracter en un string
    * 
    * @param {string}:cadena
    * 
    * @returns {array}: aFrec
     */


     /**
      * @description Función que responde ante el click y ejecuta e imprime el resultado de procesar el input mediante los distintos métodos
      * 
      * @returns {'string'}:message
      */
    onClick() {
        this.output.innerHTML = `<p>La cadena está compuesta de ${this.contar()} palabras</p>
                                    <p>las cuales tienen una longitud media de ${this.mediaPa()} </p>
                                    <button id="close">Cerrar</button>
                                `
        
        this.cerrar = document.querySelector('#close')
         this.cerrar.addEventListener('click', this.onClose.bind(this))
    }
    
    onClose() {
        
        
       
            this.output.innerHTML = ''
        }
}

