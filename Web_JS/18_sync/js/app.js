export function app() {


    console.log('Cargada app')
    const storage = 'userName'
    
    // Nodos del DOM
    let btn_01 = document.querySelector('#btn_01')
    let btn_02 = document.querySelector('#btn_02')
    let in_01 = document.querySelector('#in_01')

    let out_01 = document.querySelector('#out_01')
 

    // Manejadores de eventos
    btn_01.addEventListener('click', onClickBorrar)
    btn_02.addEventListener('click', onClickGuardar)
    in_01.addEventListener('input',onInput)
    //in_01.addEventListener('change',onChangeNombre)

    
    // Inicialización de la App

    let initialName = localStorage.getItem(storage)

    if (initialName) {
        in_01.value = initialName
        out_01.innerHTML = `Hola ${initialName}`
    }

    //Funciones del manejador

    function onClickBorrar(ev) {

      in_01.value = ''
      out_01.innerHTML = `${ev.target.value}`

    }
    function onClickGuardar() {

      localStorage.setItem(storage, in_01.value)
        
    }
    function onInput(ev) {
       /*  console.log(ev.target) */
   
        out_01.innerHTML = `Hola ${ev.target.value}`
    }
   /*  function onChangeNombre(ev) {
        if (ev.target.value) {
               console.log('Change', ev.target.value)
        }
     
    } */
}
