function Calcular () {
var valor = document.getElementById('valor').value;

var salud = document.getElementById('Salud');
var pension = document.getElementById('Pensión');
var riesgo = document.getElementById('Riesgo');

var descuentosalud = parseInt(valor)*12.5/100;
var descuentopension = parseInt(valor)*16/100;
var descuentoriesgo = parseInt(valor)*0.522/100;

salud.innerHTML = 'Salud: $' + descuentosalud;
pension.innerHTML = 'Pensión: $' + descuentopension;
riesgo.innerHTML = 'Riesgo: $' + descuentoriesgo;

}