
/* console.dir('Buscando nodos')
console.error('Esto es un error')
console.info('Dame datos')
console.table(['Hey esto ser tabla','Esto tambien','Esto tambien']) */



 function app() {
     console.log('cargar app')

    let btnLeave = document.querySelector('#btnLeave')
    let out = document.querySelector('#output')
    let btnCancel= document.querySelector('#cancel') 
    let diaCancel = document.querySelector('#diaCancel')
    let counter = document.querySelector('#counter')
    let handler 


    btnLeave.addEventListener('click', onClick)
    btnCancel.addEventListener('click',onCancel)


    function onClick () {
        let url = 'https://www.factmag.com/'
      
        handler = setTimeout(()=> {
            location.assign(url)
            },5000)
            let i = 6
        setInterval(()=> {
            counter.textContent = --i
            },1000)

            diaCancel.showModal()
        
              
       
      
    }

    function onCancel(){

        clearTimeout(handler)
        diaCancel.close()
    }
}
app()