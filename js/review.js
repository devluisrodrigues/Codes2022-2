

document.addEventListener('DOMContentLoaded', function() {

    ul = document.querySelector('ul.coluna');
    li = ul.querySelector('li');
    estrelas_lista = document.querySelector('div.star-rating');
    estrelas = estrelas_lista.querySelectorAll('input');
    btn = document.querySelector(".enviar_review");
    text = document.querySelector('input[type="text"]');
    i = false;
    n = 0;

    estrelas[0].addEventListener('click', function(event2) {
        event2.stopPropagation();
        console.log('5 estrelas');
        n = 5;

    });

    estrelas[1].addEventListener('click', function(event2) {
        event2.stopPropagation();
        console.log('4 estrelas');
        n = 4;
    });

    estrelas[2].addEventListener('click', function(event2) {
        event2.stopPropagation();
        console.log('3 estrelas');
        n = 3;
    });

    estrelas[3].addEventListener('click', function(event2) {
        event2.stopPropagation();
        console.log('2 estrelas');
        n = 2;

    });

    estrelas[4].addEventListener('click', function(event2) {
        event2.stopPropagation();
        console.log('1 estrelas');
        n = 1;

    });

    btn.addEventListener('click', function(event) {
        console.log('Clicou no botao');
        console.log(n);

        if(n == 0) {
            alert('Selecione uma nota');

        } else {
            if(i){
                li_usu.remove();
            }

            est = '';
            for (var k = 0; k < n; k++) {
                est += '★';
            }
            while(est.length < 5) {
                est += '☆';
            }

            li_usu = li.cloneNode(true);
            img = li_usu.querySelector('img');
            img.src = '../../img/FotoPerfil.png';
            li_usu.querySelector('p').innerHTML = est + text.value;

            ul.appendChild(li_usu);
            i = true;
            alert('Obrigado pela sua avaliação');
        }
    })
})