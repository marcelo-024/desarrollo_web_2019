export class App {

    constructor () {
        //Nodos del DOM
        this.aBtns = document.querySelectorAll ('.btn')
        this.baseSQ = document.querySelector('#baseSQ')
        this.alturaSQ = document.querySelector('#alturaSQ')
        this.outSQ = document.querySelector('#outSQ')
        this.baseT = document.querySelector('#baseT')
        this.alturaT = document.querySelector('#alturaT')
        this.outT = document.querySelector('#outT')
        this.radius = document.querySelector('#radius')
        this.outC = document.querySelector('#outC')
        
        //Manejadores de eventos

        this.aBtns.forEach(btn =>  btn.addEventListener('click', this.onBtnClick.bind(this)));
    }

        

    onBtnClick(ev) {

        switch (ev.target.id) {
            case 'btnSQ':
                this.outSQ.value = this.calcSQ()
                break;
            case 'btnT':
                this.outT.value = this.calcT()
                break;
            case 'btnC':
                this.outC.value = this.calcC().toFixed(2)
                
        }
    }

    calcSQ() {
        return Number(this.baseSQ.value) * Number(this.alturaSQ.value)
    }

    calcT(){
        return (Number(this.baseSQ.value) * Number(this.alturaSQ.value))/2
    }

    calcC() {
        return (Number(this.radius.value) * Number(this.radius.value))*Math.PI
    }


}