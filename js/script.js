document.addEventListener('DOMContentLoaded', function() {
    carrosel = document.querySelectorAll('.carrosel');
    filmes1 = carrosel[0].querySelectorAll('li');
    filmes2 = carrosel[1].querySelectorAll('li');
    filmes = [...filmes1, ...filmes2];
    titulos = [];

    for (variavel of filmes) {
        code = variavel.querySelector('img').src;
        code = code.split('/');
        if(!(titulos.includes(code[4]))) {
            titulos.push(code[4]);
        }
    }
    console.log(titulos)
    
    input = document.getElementById("myInput");
    cabec = document.querySelector('.topnav');
    recomend = document.createElement('div');
    cabec.appendChild(recomend);
    
    input.addEventListener("keypress", function(event) {
        procura = input.value.toUpperCase();
        console.clear();

        while (recomend.firstChild) {
            recomend.removeChild(recomend.firstChild);
        }

        for (i = 0; i < titulos.length; i++) {
            a = titulos[i].split('.')[0];
            if (a.toUpperCase().indexOf(procura) > -1) {
                console.log(a);

                div = document.createElement('div');
                h1 = document.createElement('p');
                h1.classList.add("tit");
                img = document.createElement('img');
                img.src = 'img/' + titulos[i];
                img.height = 80;
                img.width = 80;
                div.appendChild(img);

                h1.innerHTML = a;
                div.appendChild(h1);
                recomend.appendChild(div);


            } else {
                console.log('não encontrado');   
            } 
        }
        
    });

  })