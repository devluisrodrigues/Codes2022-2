document.addEventListener('DOMContentLoaded', function() {
    dados = localStorage.getItem('filmes');
    dados = JSON.parse(dados);
    console.log(dados);

    body = document.querySelector('body');
    filme = body.querySelector('h1').innerHTML;
    
    main = body.querySelector('main');
    ul = main.querySelector('ul.linhaaround');
    btn = ul.querySelector('li.addtofav');
    img_fav = btn.querySelector('img');
    console.log(img_fav);
    

    console.log(localStorage.getItem(filme));
    if(localStorage.getItem(filme)) {
        img_fav.src = '../img/listaativo.png';
    }

    if(localStorage.getItem(filme) == null) {
        console.log('Filme não favoritado');
        localStorage.setItem(filme, false);
        img_fav.src = '../img/addtolist.png';
    }

    btn.addEventListener('click', function(event) {
        event.stopPropagation();
        if(localStorage.getItem(filme) == 'false') {
            console.log(filme);
            localStorage.setItem(filme, true);
            img_fav.src = '../img/listaativo.png';
        } else {
            localStorage.setItem(filme, false);
            img_fav.src = '../img/addtolist.png';
        }
        
    });
});