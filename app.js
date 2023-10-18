console.log('tarea 1')

setTimeout(function(){
    console.log('tarea 2')
},2000);

console.log('tarea 3')
function sumar(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 +num2;
    document.getElementById('resultado').innerText = resultado;

}
//alert('Hola');