export function app() {
    console.log('Cargada app') 

    // Nodos del DOM
    let form = document.querySelector('[name = "full-post"]')
    let aFormData = document.querySelectorAll('.formData')
    let aCheckBox = document.querySelectorAll('[type = "checkbox"]')
    let aSelects = document.querySelectorAll('select')
    let aRadioSitio = document.querySelectorAll('[name = "sitio"]')
    let dlgConfirm = document.querySelector('#confirm')
    let aBtns = document.querySelectorAll('#confirm button')

 
    let btnReset = document.querySelector('#reset')

    let oDatos = {
        userName: '',
        userPass: '',
        email: '',
        dni: '',
        cv: '',
        birthDate: '',
        info: '',
        isOk: '',
        curso: '',
        sitio: '',
        
      
      }
      let oDatosPretty = {
        userName: 'Nombre de usuario',
        userPass: 'Contraseña',
        email: 'E-Mail',
        dni: 'D.N.I.',
        cv: 'Formación',
        birthDate: 'Fecha de nacimiento',
        info: 'Información extra',
        isOk: '',
        curso: 'Curso',
        sitio: 'Sitio'
      }
      
    // Definir manejadores
    form.addEventListener('submit', onSubmit)
    btnReset.addEventListener('click',onReset)
    aBtns.forEach(btn => btn.addEventListener('click', onDlg));


    //CUSTOM VALIDATION
    
    aFormData[3].setCustomValidity('Letra Incorrecta')

    // Funciones manejadoras de eventos
    function onSubmit(ev) {

        ev.preventDefault()



        aFormData.forEach(item => oDatos[item.name] = item.value)
            // console.log(oDatos)
        aCheckBox.forEach(item => oDatos[item.name] = item.checked )
        aSelects.forEach(item => oDatos[item.name] = item.value)
        //aRadioSitio.
        oDatos.sitio = getRadio(aRadioSitio)
        renderModal()
        
    }

    function onReset() {
        
    }

    function getRadio(aNodos){
      for (let i = 0; i < aNodos.length; i++) {
          const item = aNodos[i];
          if (item.checked) {
              return item.value
          }
      }
    }
    function onDlg(ev) {

        if(ev.target.textContent.toUpperCase() === 'SI'){
            //Envíar 4rial
            form.submit()
        }
        dlgConfirm.close()
    }

    function renderModal(){
        let html = ``
        for (const key in oDatos) {
           
                const value = oDatos[key];
                if (key === 'userPass') {
                    html += `<li>${oDatosPretty[key]}: ${value}</li>`  
                }else if (key === 'isOk'){

                }else{ 
                    html += `<li>${oDatosPretty[key]}: ${value}</li>`}
               
            
        }
        dlgConfirm.children[1].innerHTML = html

        dlgConfirm.showModal()
    }
 }