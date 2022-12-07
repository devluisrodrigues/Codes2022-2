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






    ul_calend = body.querySelector('ul.carrosel');
    li_calend = ul_calend.querySelector('li');
    console.log(li_calend)
    clone_calend = li_calend.cloneNode(true);


    console.log(ul_calend)
    while (ul_calend.firstChild) {
        ul_calend.removeChild(ul_calend.firstChild);
    }

        for(titulo in keys) {
            if(keys[titulo] != 'filmes' && localStorage.getItem(keys[titulo]) == 'true') {
                data = catalogo[keys[titulo]]['data'];
                if(data == undefined){
                    console.log('Filme já foi lançado');
                } else {
                    console.log(data);
                    clone_calend = li_calend.cloneNode(true);
                    texto_calend = clone_calend.querySelector('p');
                    texto_calend.innerHTML = keys[titulo];

                    texto_data = document.createElement('p');
                    texto_data.classList.add('tex');

                    texto_data.innerHTML = data;
                    texto_calend.appendChild(texto_data);

                    ul_calend.appendChild(clone_calend);
                }
            }
    }

    if (ul_calend.firstChild == null) {
        texto_calend = clone_calend.querySelector('p');
        texto_calend.innerHTML = 'Nenhum título ainda não lançado foi favoritado';
        ul_calend.appendChild(clone_calend);
    }

});