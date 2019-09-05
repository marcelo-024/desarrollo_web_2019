import {database,sort} from './api.js'

export function app () {
console.log('App Loaded')
console.dir(document)
let aCountries = []
let country = {}
    //Nodos del Dom
    let select1 = document.querySelector('#continents')
    let select2 = document.querySelector('#countries')
    console.dir(select1)
    //Manejadores de evento
    select1.addEventListener('change', selectContinent)
    select2.addEventListener('change',selectCountry)
    //Funciones Manejadoras

    //Función que me permite elegir un continente de entre la lista y usa renderCountry para imprimir la lista correspondiente a mi seleccion
    function selectContinent(ev){
        console.dir(ev.target.value)
        
        let url = database + ev.target.value + sort
        fetch(url).then(response => response.json()).then(data =>{
            //console.log(data)
             aCountries = data
             console.log(aCountries)
              renderCountry()
        })
       // ev.target.value = ''
       
    }
    function selectCountry(ev) {
        console.dir(ev.target.value)
        console.dir(aCountries[0].name)
        country = aCountries.find(item => item.name == ev.target.value )
        console.log(country)
    }
    //Función que imprime la lista de paises elegidos.
    function renderCountry(){
        //select1.value = ''
        let html = ''

        aCountries.forEach(countrie => html += `<option value="${countrie.name}">${countrie.name}</option>`)

       select2.innerHTML = html 
    }



    /* function renderData() {
        let html = `
        <tr>
            <th>Nombre</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th></th>
            <th></th>
        </tr>`
        aUsers.forEach(item => html += `
        <tr>
            <td>${item.id}</td>
            <td>${item.nombre}</td>
            <td>${item.edad}</td>
            <td class='boton btn-editar' data-id="${item.id}">
                <i class="fas fa-edit"></i></td>
            <td class='boton btn-borrar' data-id="${item.id}">
                <i class="fas fa-trash-alt"></i></td>
        </tr>` );
        tbUsuarios.innerHTML = html
        actualizarBotones()
    }  */
}