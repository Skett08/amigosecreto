// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    
    if (nombre === "") {
        alert("Campo vacio. Por favor, introduce un nombre.");
        return;
    }
    
    amigos.push(nombre);
    document.getElementById("amigo").value = "";    
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sorteo() {
    if (amigos.length === 0) {
        alert("¡Uy! Parece que no hay amigos en la lista para el sorteo.");
        return;
    }
    
    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceGanador];
    
    document.getElementById("resultado").textContent = "El ganador es: " + ganador;
}