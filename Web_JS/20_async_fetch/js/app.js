export function app() {

  console.log('Cargada app')

  const usersURL = 'https://jsonplaceholder.typicode.com/users/'


  // Nodos del DOM
  let btn_01 = document.querySelector('#btn_01')
  let btn_02 = document.querySelector('#btn_02')
  let in_01 = document.querySelector('#in_01')

  let out_01 = document.querySelector('#out_01')

  // Manejadores de eventos
  btn_01.addEventListener('click', onClickBuscar2017)
  btn_02.addEventListener('click', onClickBorrar)



  // Inicialización de la App



  //Funciones del manejador
  function onClickBorrar() {
    in_01.value = ''
  }



  function onClickBuscar(ev) {

   
    let url = usersURL + in_01.value
    fetch(url).then(response => {
      console.log(response)
      if(response.status == 200){
         return response.json()
      } 
      console.log(response)
      throw(new Error(response.status))
    }).then(  (data)=> { 
            
            out_01.innerHTML = `Hola ${data.username}`
            })
    .catch( (error) => {
       out_01.innerHTML = 'Disculpa, no encontramos los datos que pides. '+ error
            }) 
    /* */


  }

  //ES 2017
  async function onClickBuscar2017(ev) {
    let url = usersURL + in_01.value
    
    try {
      let response = await fetch(url)
      if(response.status == 200){
         let data = await response.json()
         out_01.innerHTML = `Hola ${data.username}`
      } else {
        throw (new Error (response.status))
      }
    } catch (error) {
       out_01.innerHTML = 'Disculpa, no encontramos los datos que pides. '+ error
    }
    
    
    
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
           
        } else {
         
          
        }

    }
  


}


  

  // Función del evento readystatechange

  }

