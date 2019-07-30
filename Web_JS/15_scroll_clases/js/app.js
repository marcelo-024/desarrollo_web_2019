import ARBOLES from './imagenes.json.js'

export class App {
    
constructor () {
    console.log('Cargada app') 

    //PROPIEDADES

    this.aImagenes = ARBOLES.map( item => {
        const img = new Image()
        img.alt = item.nombre
        img.src = './assets/' + item.source
        return img
    })
    this.isSticky = false;
    this.aOffsets = []
    //NODOS DEL DOM
    this.header = document.querySelector('body>header')
    this.divTop = document.querySelector('div.top')
    this.aSections = document.querySelectorAll('section')
    this.aEnlaces = document.querySelectorAll('nav a')
    this.aImgWrappers = document.querySelectorAll('.img-wrapper')
    //Nodos del DLG
    this.dlgImg = document.querySelector('#dlg-img')
    this.dlgBtn = document.querySelector('#dlg-img button')
    //console.log(this.aImagenes)

    //MANEJADORES DE EVENTOS

    window.addEventListener('scroll', this.onScroll.bind(this))
    window.addEventListener('resize', this.calcularOffset.bind(this))

    this.aEnlaces.forEach((enlace, i) => enlace.addEventListener(
        'click', (ev) => {this.onClickMenu.bind(this)(ev, i) }
    ))
    //Manejador de Eventos del DLG
    this.dlgBtn.addEventListener('click', this.onClickClose.bind(this))

    //Incorporación de los objetos img al DOM
    //Añade a cada img un manejador de click
    this.aImgWrappers.forEach( (item, i) => {
        if (i%2) {
            item.classList.add('img-wrapper-left')
        } else {
            item.classList.add('img-wrapper-right')
        }
        item.appendChild(this.aImagenes[i])
        item.addEventListener('click', () => {this.onClickImg(i)}
        )
    })

    

    
}
    

    

     calcularOffset () {
       this.aOffsets = []
       this.aSections.forEach( 
            item => this.aOffsets.push(item.offsetTop)
        )
        console.dir(this.aOffsets)    
    }


     onScroll(ev) {
        // console.log(ev)
        let y = ev.target.scrollingElement.scrollTop
        //console.log(y)
        if (y >= 40 && !this.isSticky) {
            this.header.classList.add('sticky')
            // header.firstChild.firstChild
            this.header.children[0].children[0].classList.remove('logo')
            this.divTop.classList.add('top-sticky')
            this.isSticky = !this.isSticky
            this.calcularOffset()
        } else if (y < 40 && this.isSticky ) {
            this.header.classList.remove('sticky')
            this.header.children[0].children[0].classList.add('logo')
            this.divTop.classList.remove('top-sticky')
            this.calcularOffset()
            this.isSticky = !this.isSticky
        }
        this.spyScroll(y)
    }

     spyScroll(scrollElement) {
        this.setActive(this.aOffsets.length-1)
        for (let i = 1; i < this.aOffsets.length; i++) {
            if (scrollElement < this.aOffsets[i] - 90) {
                this.setActive(i-1) 
                break
            }
        } 
        /* aOffsets.some( (item, i) => {
            if (scrollElement < item - 90) {
                setActive(i-1) 
                return true
            }
        }) */
    }
    
   

     onClickMenu(ev, i) {
        ev.preventDefault()
        this.calcularOffset()
        console.log(this.aOffsets[i])
        window.scrollTo(0,this.aOffsets[i]-90)
        this.setActive(i)
    }

     setActive(i) {
        this.aEnlaces.forEach(enlace => 
            enlace.classList.remove('active')
        )
        this.aEnlaces[i].classList.add('active')
    }

     onClickImg(i) {
        this.dlgImg.showModal()
        if (this.dlgImg.children[1]) {
             this.dlgImg.removeChild(this.dlgImg.children[1])
        }
        this.dlgImg.appendChild(          
            this.aImagenes[i].cloneNode())
    }

     onClickClose() {
        this.dlgImg.close()
    }
 }