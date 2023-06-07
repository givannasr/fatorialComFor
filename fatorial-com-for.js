function fatorial() {
    var numero = document.getElementById("numero").value;
    let numb = 1;
    for (let i = numero; i > 1; i--) {
        numb *= i;
    }
    document.getElementById("resposta").innerHTML = numb;
    console.log(resposta);
}