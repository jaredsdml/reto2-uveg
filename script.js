function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

function limpiar() {
    document.getElementById('pantalla').value = '';
}

function calcular() {
    let expresion = document.getElementById('pantalla').value;
    try {
        let resultado = eval(expresion);
        document.getElementById('pantalla').value = resultado;
    } catch (e) {
        document.getElementById('pantalla').value = 'Error';
        setTimeout(limpiar, 1500);
    }
}