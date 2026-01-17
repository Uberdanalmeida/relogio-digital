function atualizarRelogio() {
    const agora = new Date();
    
    // Pega os valores e adiciona o '0' na frente se for menor que 10
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    document.getElementById('hor').textContent = horas;
    document.getElementById('min').textContent = minutos;
    document.getElementById('seg').textContent = segundos;
}

// Executa a cada 1 segundo
setInterval(atualizarRelogio, 1000);

// Chama uma vez imediatamente para não esperar 1 segundo ao carregar a página
atualizarRelogio();