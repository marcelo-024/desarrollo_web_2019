function cuantas (string = '') {

    string.split(' ').join('').toLowerCase()
let pusher = []
    const aDatos = []
    for (let i = 0; i < string.length; i++) {
        
     pusher[i] = string.split(string[i])
        aDatos[i] = pusher.length -1
    }
    console.log(aDatos.length,pusher)
}


 console.log (cuantas('Hola me hago los deberes'))