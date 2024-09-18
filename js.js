fcor = document.getElementById('fundo')
img = document.getElementById('img')
display = document.getElementById('hora')
display2= document.getElementById('momento')

madrugada=""

function relogio() {
    agora = new Date()
    hora = agora.getHours().toString().padStart(2, '0');
    minutos = agora.getMinutes().toString().padStart(2, '0');
    segundos = agora.getSeconds().toString().padStart(2, '0');

    display.innerText = `Agora é ${hora}:${minutos}:${segundos}`

    if (hora<5){
        display2.innerText = `esta de madrugada`
        fcor.style.background = '#191d2e'
        img = document.getElementById('img').src = "madrugada.jpg"
    }
    else if (hora>4 && hora<12){
        display2.innerText = `esta de manhã`
        fcor.style.background = '#ffd359'
        img = document.getElementById('img').src = "manha.webp"
    }
    else if (hora>11 && hora<17){
        display2.innerText = `esta de tarde`
        fcor.style.background = '#709bf8'
        img = document.getElementById('img').src = "tarde.jpg"
    }
    else if (hora>16 && hora<18){
        display2.innerText = `esta de tardezinha`
        fcor.style.background = '#a87221'
        img = document.getElementById('img').src = "tardezinha.jpg"
    }
    else{
        display2.innerText = `esta de noite`
        fcor.style.background = '#273058'
        img = document.getElementById('img').src = "noite.jpg"
    }

}

setInterval(relogio, 1000)