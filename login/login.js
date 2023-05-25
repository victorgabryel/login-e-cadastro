function entrar() {
    window.alert('Entrou :)')
}

var agr = new Date()
var hora = agr.getHours()

if (hora < 12) {
    document.body.style.backgroundImage = 'url(/imagens/dia.jpg)'
}
else if (hora < 19) {
    document.body.style.backgroundImage = 'url(/imagens/tarde.jpg)'
}