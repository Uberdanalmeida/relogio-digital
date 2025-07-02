const relogio = setInterval(function teste() {
    const hora = new Date()
    const horas = hora.getHours()
    const minutos = hora.getMinutes()
    const segundos = hora.getSeconds()

    const hor = document.getElementById('hor')
    const min = document.getElementById('min')
    const seg = document.getElementById('seg')

    document.getElementById('hor').innerHTML = `${horas}`
    document.getElementById('min').innerHTML = `${minutos}`
    document.getElementById('seg').innerHTML = `${segundos}`
})