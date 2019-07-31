export function app() {


let aCursosFront = [{ code:'HTML-01', name: 'HTML 5'},{ code:'CSS-02', name: 'CSS3'},{ code:'JS-03', name: 'JavaScript'}]
let aCursosBack = [{ code:'Node-04', name: 'Node JS'},{ code:'PHP-05', name: 'PHP'}]
//Nodos del DOM

let aSelects = document.querySelectorAll('select')

//Manejadores
aSelects[0].addEventListener('change',onTech)
aSelects[1].addEventListener('change',onCurso)


function onTech(ev) {

    let aCursos = []

    switch (ev.target.value) {
        case 'f':
            aCursos = aCursosFront
            break;
    
        case 'b':
        aCursos = aCursosBack
            break;
    }
    let html = '<option value="">Elige un curso</option>'
    aCursos.forEach(item => {

    html +=`<option value="${item.code}">${item.name}</option>`
    })
    aSelects[1].innerHTML = html
    aSelects[1].disabled = false
   console.log() 

}


function onCurso(ev){

    console.log('Elegido el curso '+ ev.target.value)
}


}

