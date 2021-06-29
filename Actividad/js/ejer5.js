const BotonEn = document.getElementById('BotonEn');

BotonEn.addEventListener('click', () => {
const edad = [12,50,23,11,18,35,41,85,16,45];

edad.sort((a, b) =>{
    if (a < b) {
        return - 1;
    }
    if (a > b){
        return 1;
    }
    return 0;

});
salidaTexto.innerText =' La edad en formato ascendente es ' +edad;
});


