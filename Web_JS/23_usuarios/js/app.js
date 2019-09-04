import { USERS } from './api.js'
export function app() {
    console.log('Cargada app')
    let url = USERS
    let aUsers = []
    
    getDatos()
    // Nodos del DOM
    let aInputs = document.querySelectorAll('input')
    let signUp = document.querySelector('#sign')
    let outTab = document.querySelector('#tbusers')
    
 
    // Asociación de manejadores de eventos
    

    signUp.addEventListener('click', onClick)
    // Funciones manejadoras de eventos


    function onClick() {
        let oUser = { 
            name: aInputs[0].value, 
            age: aInputs[1].value }
            console.log(oUser)
            let cabecera = new Headers ({
                'Content-Type': 'application/json'
            })
            fetch(url, {method: 'POST', headers: cabecera ,body: JSON.stringify(oUser)})
    }

   function getDatos() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        aUsers = data
        console.log(aUsers)
        renderData()
    })
   }

    function renderData() {
        let html = `
        <tr>
            <th>Id</th>
            <th class="title">Nombre</th> |
            <th class="autor">Edad</th>
        </tr>` 
        aUsers.forEach(item => html += `
        <tr>
            <td>${item.id}</td>
            <td class="title">${item.name}</td> |
            <td class="autor">${item.age}</td>
        </tr>` );
        outTab.innerHTML = html

    } 

    function renderError(error) {
        pError.innerHTML = 'error de conexión: ' + error
    }
    
}