let handler = setTimeout(()=> {
    console.log('Hola')
}, 4000)

setTimeout(()=>{clearTimeout(handler)},2000)

let i = 0
setInterval(()=> {
    console.log(++i)

},100)