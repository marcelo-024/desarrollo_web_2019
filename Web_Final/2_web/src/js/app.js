export class App {

    constructor () {
        this.button = document.querySelector('#saludar')
        this.output = document.querySelector('output')

        this.button.addEventListener('click', this.onClick.bind(this))
    }
   

onClick(){
    let txt = '<p class="mamawebo">Hola Mamawebo</p>'
    this.output.innerHTML = txt
}

}