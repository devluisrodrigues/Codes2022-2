document.addEventListener('DOMContentLoaded', function() {

    ul = document.querySelector('ul.coluna');
    li = ul.querySelector('li');
    btn = document.querySelector(".enviar_review");
    text = document.querySelector('input[type="text"]');
    i = false;

    btn.addEventListener('click', function(event) {
        if(i){
            li_usu.remove();
        }
        console.log('Clicou no botao');
        console.log(text.value);
        li_usu = li.cloneNode(true);
        img = li_usu.querySelector('img');
        img.src = 'img/FotoPerfil.png';
        li_usu.querySelector('p').innerHTML = text.value;

        ul.appendChild(li_usu);
        event.preventDefault();
        i = true;
    })
})