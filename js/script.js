document.addEventListener('DOMContentLoaded', function() {
    carrosel = document.querySelectorAll('.carrosel')
    filmes1 = carrosel[0].querySelectorAll('li')
    filmes2 = carrosel[1].querySelectorAll('li')
    filmes = [...filmes1, ...filmes2]
    for (variavel of filmes) {
        code = variavel.querySelector('img').src
        code = code.split('/')
        console.log(code[4])
    }
  })