export function app() {

  console.log('Cargada app')

  const usersURL = 'https://jsonplaceholder.typicode.com/users/'


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

   
    let url = usersURL + in_01.value

    ajax('GET', url, stateChange)


  }





  ///AJAX


  function stateChange(http) {
  
/*     if ( && ) {
      
    } else if (http.readyState == 4) {
      
      } 
      //out_01.innerHTML = 'Disculpa, tenemos un problema interno'
      
     */
    if (http.readyState == 4) {

        if (http.status == 200) {
        let data = JSON.parse(http.responseText)
        console.log('datos',data)
        out_01.innerHTML = `Hola ${data.username}`
    } else {
      //out_01.innerHTML = 'Disculpa, no encontramos los datos que pides'
      location.assign('./error.html')
    }
    }
  


}


  function ajax(metodo, url, callback) {
    const http = new XMLHttpRequest() //window.XMLHttpRequest
    http.addEventListener('readystatechange', () => { callback(http) })//callback)
    //onreadystatechange = stateChange
    http.open(metodo, url)
    http.send()
  }


  // Función del evento readystatechange

  }

