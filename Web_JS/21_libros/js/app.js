export function app() {

  console.log('Cargada app')

  const booksURL = 'https://www.googleapis.com/books/v1/volumes?q=%3Dintitle%3A'
  const fields = '&fields=items(volumeInfo(authors%2Ctitle))'

  // Nodos del DOM
  let btn_01 = document.querySelector('#btn_01')
  let btn_02 = document.querySelector('#btn_02')
  let in_01 = document.querySelector('#in_01')

  let out_01 = document.querySelector('#out_01')

  // Manejadores de eventos
  btn_01.addEventListener('click', onClickBuscar2017)
  



  // Inicialización de la App



  //Funciones del manejador




  function onClickBuscar(ev) {

    
    let url = usersURL + in_01.value + fields
    fetch(url).then(response => {
      console.log(response)
      if(response.status == 200){
         return response.json()
      } 
      console.log(response)
      throw(new Error(response.status))
    }).then(  (data)=> { 
            
      console.log(data)
            out_01.innerHTML = `Hola ${data.username}`
            })
    .catch( (error) => {
       out_01.innerHTML = 'Disculpa, no encontramos los datos que pides. '+ error
            }) 
    /* */


  }

  //ES 2017
  async function onClickBuscar2017(ev) {
    let url = booksURL + in_01.value + fields

    try {
      let response = await fetch(url)
      if(response.status == 200){
         let data = await response.json()
         console.log(data)
        data = data.items
        data = data.map((i) => { return {title: i.volumeInfo.title, authors: i.volumeInfo.authors}
         } )
         console.log(data)
       // data.items.map((i) => {juan += `<p>${i.volumeInfo.title}<p> <p><p>`} )      
       
       // out_01.innerHTML += `<p>${i.volumeInfo.title}<p> <p><p>`
         //out_01.innerHTML = `Hola ${data.username}`
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

