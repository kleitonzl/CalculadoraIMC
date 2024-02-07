function calcularIMC() {
    var nome = document.getElementById('name').value
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = parseFloat(document.getElementById('altura').value)

    var imc = peso / (altura * altura);

    var resultado = document.getElementById('resultado')
    resultado.innerHTML = ""

    if (!isNaN(imc)) {
        var mensagem = "Olá, " + nome + ", Seu IMC é: " + imc.toFixed(2) + "."
        if (imc < 16.9) {
            mensagem += " Muito abaixo do peso."
        } else if (imc >= 17 && imc <= 18.4) {
            mensagem += " Abaixo do peso."
        } else if (imc >= 18.5 && imc <= 24.9) {
            mensagem += " Seu peso está normal."
        } else if (imc >= 25 && imc <= 29.9) {
            mensagem += " Acima do peso."
        } else if (imc >= 30 && imc <= 34.9) {
            mensagem += " Obesidade grau 1."
        } else if (imc >= 35 && imc <= 39.9) {
            mensagem += " Obesidade grau 2."
        } else if (imc >= 40) {
            mensagem += " Obesidade grau 3."
        }
        resultado.innerHTML = mensagem
    } else {
        resultado.innerHTML = "Por favor, preencha todos os campos corretamente."
    }
}
