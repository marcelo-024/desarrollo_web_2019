import {database,sort} from './api.js'

export function app () {
console.log('App Loaded')
console.dir(document)
let aCountries = []
let country = {}
    //Nodos del Dom
    let select1 = document.querySelector('#continents')
    let select2 = document.querySelector('#countries')
    let output = document.querySelector('#show')
    let outputL = document.querySelector('#showL')
    console.dir(select1)
    //Manejadores de evento
    select1.addEventListener('change', selectContinent)
    select2.addEventListener('change',selectCountry)
    //Funciones Manejadoras

    //Función que me permite elegir un continente de entre la lista y usa renderCountry para imprimir la lista correspondiente a mi seleccion
    function selectContinent(ev){
        console.dir(ev.target.value)
        console.log()
        if (ev.target.value) {
            select1.nextElementSibling.removeAttribute('hidden')
            let url = database + ev.target.value + sort
                fetch(url).then(response => response.json()).then(data =>{
                    //console.log(data)
                    aCountries = data
                    console.log(aCountries)
                    renderCountry()
                })
        }else {
            output.innerHTML = ""
        outputL.innerHTML = ""
        }
        
       // ev.target.value = ''
       
    }
      //Función que imprime la lista de paises elegidos.
      function renderCountry(){
        //select1.value = ''
        let html = '<option value=""></option>'

        aCountries.forEach(countrie => html += `<option value="${countrie.name}">${countrie.name}</option>`)

       select2.innerHTML = html 

       
    }
    //Función que selecciona un país y almacena los datos de este para luego utilizar renderData y mostrarlos por pantalla
    function selectCountry(ev) {
        console.dir(ev.target.value)
       // console.dir(aCountries[0].name)
        country = aCountries.find(item => item.name == ev.target.value )
        console.dir(country)
        renderData()
    }
  



    function renderData() {
       let languages = country.languages.map (lang => lang.name)
       languages = languages.toString().replace(',',', ')
       console.log(languages)
       let currencies = country.currencies.map(coin => coin.name)
       currencies = currencies.toString().replace(',',', ')
       
        //country.languages.find(att => att.name)
        let left = ` <p>${country.name}</p>
        <img src="${country.flag}" alt="${country.name}">`
        let right =   `
        <ul>
        <li><span class="bold">Subregion: </span> ${country.subregion}</li>
        <li><span class="bold">Language: </span> ${languages}</li>
        <li><span class="bold">Population: </span> ${country.population}</li>
        <li><span class="bold">Capital: </span> ${country.capital}</li>
        <li><span class="bold">Currency: </span> ${currencies}</li>
        </ul>
        `
        /* let right =   `
        <dl class="list">
        <dt>Subregion: </dt><dd> ${country.subregion}</dd>
        <dt>Language: </dt><dd> ${languages}</dd>
        <dt>Population: </dt><dd> ${country.population}</dd>
        <dt>Capital: </dt><dd> ${country.capital}</dd>
        <dt>Currency:      </dt><dd> ${currencies}</dd>
        </dl>
        ` */
        output.innerHTML = right
        outputL.innerHTML = left
       //name;capital;currency;subregion;flag;population;
    } 
}