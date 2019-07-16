console.log('Hola, estoy aquí')
/* console.dir('Buscando nodos')
console.error('Esto es un error')
console.info('Dame datos')
console.table(['Hey esto ser tabla','Esto tambien','Esto tambien']) */



const onClick = () => {

    console.log('Al fin nos encontramos gracias a una FUNCIÓN')
}

console.log(document)
console.dir(document)

console.dir(document.querySelector('#btn_super'))

document.querySelector('#btn_super').onclick = onClick