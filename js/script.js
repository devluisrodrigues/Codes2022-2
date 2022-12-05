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
    cabec = document.querySelector('.topnav')
    
    input.addEventListener("keypress", function(event) {
        procura = input.value.toUpperCase();
        console.clear();
        recomend = document.createElement('div');
        cabec.appendChild(recomend);

        for (i = 0; i < titulos.length; i++) {
            a = titulos[i].split('.')[0];
            if (a.toUpperCase().indexOf(procura) > -1) {
                console.log(a);
                div = document.createElement('div');
                div.innerHTML = a;

            } else {
                console.log('não encontrado');   
            } 
        }
        
    });

  })