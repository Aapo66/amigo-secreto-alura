let amigos = [];

function adicionar() {
    let amigoNovo = document.getElementById("nome-amigo").value;
    if (amigoNovo === "" || /^[.,\s]+$/.test(amigoNovo)) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(amigoNovo)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    if (amigoNovo.trim() !== "") {
        amigos.push(amigoNovo);
        atualizarLista();
        document.getElementById("nome-amigo").value = "";
    }
}

function atualizarLista() {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let span = document.createElement("span");
        span.textContent = amigo;
        span.style.cursor = "pointer";
        span.onclick = () => removerAmigo(index);

        lista.appendChild(span);

        if (index < amigos.length - 1) {
            lista.appendChild(document.createTextNode(", "));
        }
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortear() {
    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = "";

    if (amigos.length < 4) {
        alert("Insira no minimo 4 amigos por favor");
        return;
    }

    for (let i = 0; i < amigos.length; i++) {
        if (i === amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById("lista-sorteio").innerHTML = "";
    amigos = [];
    atualizarLista();
}
