import { setCookie, getCookie } from "./cookies.js";

export function app() {
    console.log('Cargada app') 

    // Nodos
    let aBotones = document.querySelectorAll('button')
    let output = document.querySelector('output')

    // Manejadores 
    aBotones.forEach(btn => {
        btn.addEventListener('click', onClick)
    });

    let numVisitas  = localStorage.getItem('visitas');
    console.log(numVisitas)
    if (numVisitas !== '') {
        localStorage.setItem('visitas',++numVisitas)
       /*  setCookie("visitas", ++numVisitas, 5); */
    }
    
    // Funciones manejadoras

    function onClick(ev) {
        switch (ev.target.textContent) {
            case 'Iniciar': 
                localStorage.setItem('visitas', 0)
                location.reload()
                break;
            case 'Eliminar':
                localStorage.removeItem('visitas')
                location.reload()
                break;
            case 'Mostrar':
                output.value = numVisitas
                break;
            case 'Recargar':
                location.reload()
                break;
        }
    }
 }