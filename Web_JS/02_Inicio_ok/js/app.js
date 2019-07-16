console.log('Hola, estoy aquí')
/* console.dir('Buscando nodos')
console.error('Esto es un error')
console.info('Dame datos')
console.table(['Hey esto ser tabla','Esto tambien','Esto tambien']) */




//Nodos del DOM
const nodos = { 

    btnSuper : document.querySelector('#btn_super'),
    btnNormal : document.querySelector('#btn_normie'),
    inName : document.querySelector('#inName'),
    out1 : document.querySelector('#out1'),
    inName2 : document.querySelector('#inName2'),
    out2 : document.querySelector('#out2'),
}


//Manejadores de eventos
nodos.btnSuper.addEventListener('click',protesta)
nodos.btnNormal.addEventListener('click',saludar)
inName2.addEventListener('input', escribirContinuo)
//btnSuper.onclick = protesta
//btnNormal.onclick = saludar

//Funciones
function saludar  ()  {
    nodos.out1.textContent = `Hola ${nodos.inName.value}.`
  
}
function protesta()  {
nodos.out1.value = `Ay! No vuelvas a tocarme ${nodos.inName.value}.`
}

function escribirContinuo () {

    nodos.out2.value = nodos.inName2.value
}
