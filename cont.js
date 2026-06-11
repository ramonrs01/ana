const dataNamoro = new Date("2026-05-05T20:30:00");

function atualizarContador() {

    const agora = new Date();

    let diff = agora - dataNamoro;

    const segundos = Math.floor(diff / 1000) % 60;
    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerHTML = `
        <div>${dias} dias</div>
        <div>${horas} horas</div>
        <div>${minutos} minutos</div>
        <div>${segundos} segundos</div>
    `;
}

atualizarContador();

setInterval(atualizarContador, 1000);