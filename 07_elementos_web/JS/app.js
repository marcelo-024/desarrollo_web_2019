



import dialogPolyfill from '../../node_modules/dialog-polyfill/index.js'


function main() {
    document.querySelector('#open_info').addEventListener('click', mostrar)
    document.querySelector('#close_info').addEventListener('click', cerrar)
     function mostrar (){
        document.querySelector('#_dial').open = true
     }
     function cerrar (){
        document.querySelector('#_dial').open = false
     }
}
function main2() {
    let modal = document.querySelector('#_dial')

    
    dialogPolyfill.registerDialog(modal);
    // Now dialog acts like a native <dialog>.
    modal.showModal();

    document.querySelector('#open_info').addEventListener('click', onClick)
    document.querySelector('#close_info').addEventListener('click', onClick)

   function onClick(){
       if (!modal.open) {
           modal.open = false
        }
       modal.open = !modal.open
   if (modal.open) {
       modal.showModal()
}


    }
}
document.addEventListener('DOMContentLoaded', main2)


document.addEventListener('DOMContentLoaded', canvas)


function canvas () {
  let c = document.querySelector('#cnv_01') .getContext('2d')

  c.fillRect(20, 20, 50, 75);

}


