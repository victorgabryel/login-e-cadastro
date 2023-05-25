var envio = document.querySelector('.enviou')
var msg = document.querySelector('.msg')

function enviou() {
    window.alert('A recuperação foi enviada. Por favor, cheque seu endereço de email')
    envio.innerHTML = 'Enviar novamente'
    envio.style.width = '150px'
    msg.innerHTML = 'Tente novamente caso <strong>não tenha recebido</strong> o email'
}