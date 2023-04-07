function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

if(elemento=== null){
    //alert('Elemento não encontrado')
    console.log('Elemento não encontrado ou seletor invalido!');ç
}

if(elemento && elemento.localName === 'audio'){
 
    elemento.play();
 
}


}

const listaDeTeclas = document.querySelectorAll('.tecla')



//Enquanto:
// while(contador < listaDeTeclas.length)

// Para:

for (let contador = 0; contador < listaDeTeclas.length; contador++) /*contador = contador + 1*/ {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;//Template String

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
       

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    //console.log(contador)    

}
