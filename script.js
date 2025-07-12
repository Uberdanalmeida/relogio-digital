const relogio = setInterval(function teste() {
    let hora = new Date()
    let horas = hora.getHours()
    let minutos = hora.getMinutes()
    let segundos = hora.getSeconds()

    if(horas < 10) horas = '0' + horas
    if(minutos < 10) minutos = '0' + minutos
    if(segundos < 10) segundos = '0' + segundos

    const hor = document.getElementById('hor')
    const min = document.getElementById('min')
    const seg = document.getElementById('seg')

    hor.innerHTML = `${horas} <p class="ponto">:</P>`
    min.innerHTML = `${minutos}`
    seg.innerHTML = `${segundos}`
})