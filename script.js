function atualizarRelogio() {
    const agora = new Date();
    
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    document.getElementById('hor').textContent = horas;
    document.getElementById('min').textContent = minutos;
    document.getElementById('seg').textContent = segundos;
}

// Função para trocar o tema
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();