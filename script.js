function insert(num) {
    var numero = document.getElementById('res').innerHTML
    if (numero == 'ERRO!') {
        document.getElementById('res').innerHTML = '';

    } else {
        document.getElementById('res').innerHTML = numero + num;
    }

}

function limpar() {
    document.getElementById('res').innerHTML = '';
}

function apagar() {
    var resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length - 1); // vai pegar a variavel ver o comprimento e diminuir o ultimo caracter
}

function calcular() {
    var resultado = document.getElementById('res').innerHTML;
    if (resultado) {
        document.getElementById('res').innerHTML = eval(resultado); //eval -- recebe uma string como argumento e executa o código JavaScript representado por essa string
    } else {
        document.getElementById('res').innerHTML = "ERRO!"
    }
}