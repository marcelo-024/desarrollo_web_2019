export function app() {

    console.log('Cargada app')

    const usersURL = 'https://jsonplaceholder.typicode.com/users/'
    const ajax = new XMLHttpRequest() //window.XMLHttpRequest
   
    // Nodos del DOM
    let btn_01 = document.querySelector('#btn_01')
    let btn_02 = document.querySelector('#btn_02')
    let in_01 = document.querySelector('#in_01')

    let out_01 = document.querySelector('#out_01')
 
    // Manejadores de eventos
    btn_01.addEventListener('click', onClickBuscar)
    btn_02.addEventListener('click', onClickBorrar)
   

    
    // Inicialización de la App

 

    //Funciones del manejador
    function onClickBorrar() {
        in_01.value = ''
      }

    function onClickBuscar(ev) {

    if(in_01.value < 0 || in_01.value > 10) {
      return
    } 
    let url = usersURL + in_01.value
    
    
    ajax.addEventListener('readystatechange', stateChange)
    
    ajax.open('GET', url)
    ajax.send()

    }

    function stateChange(ev) {
        if (ajax.readyState == 4 && ajax.status == 200) {
          let data =JSON.parse(ajax.responseText) 
          out_01.innerHTML = `Hola ${data.username}`
          console.log(ajax.responseText)
        } 
        

    }

  
    ///AJAX
    
 
    
    // Función del evento readystatechange

    
}
