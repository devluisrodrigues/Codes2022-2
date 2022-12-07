document.addEventListener('DOMContentLoaded', function() {
    body = document.querySelector('body');
    ul = body.querySelector('ul.coluna');
    li = ul.querySelector('li.linha');

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    catalogo = localStorage.getItem('filmes');
    catalogo = JSON.parse(catalogo);

    keys = Object.keys(localStorage);
    console.log(keys);

    for(titulo in keys) {
        if(keys[titulo] != 'filmes' && localStorage.getItem(keys[titulo]) == 'true') {
            clone = li.cloneNode(true);
            titulo = keys[titulo];
            console.log(catalogo[titulo]);

            link = clone.querySelector('a');
            link.href = 'filmes/' + catalogo[titulo]['pag'];

            img = link.querySelector('img');
            img.src = 'img/' + catalogo[titulo]['img.src'];
            img.alt = catalogo[titulo]['titulo'];

            textos = clone.querySelectorAll('p');
            textos[0].innerHTML = catalogo[titulo]['titulo'];
            textos[1].innerHTML = catalogo[titulo]['sinopse'];
            console.log(textos);

            console.log(clone)
            ul.appendChild(clone);
        }
    }
});