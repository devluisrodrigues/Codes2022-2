var filmes = {
    "Abracadabra 2": { "img.src": 'Abracadabra.png', 'pag':'Abracadabra.html', 'titulo':'Abracadabra 2', 'sinopse': 'Abracadabra 2 é a continuação da comédia clássica de 1993, com as bruxas malvadas, as irmãs Sanderson (Bette Midler, Sarah Jessica Parker e Kathy Najimy) provocando o caos. Fazem 29 anos desde que a vela da chama negra foi acesa e ressuscitou as irmãs bruxas do século 17, e elas retornam nesta continuação sedentas, querendo vingança. Duas jovens acidentalmente trazem de volta as Irmãs Sanderson para a Salem moderna e agora as adolescentes devem impedir que as bruxas vorazes causem mais estrago em Salem antes do amanhecer de Halloween.' },
    'As Branquelas' : { "img.src": 'AsBranquelas.jpg', 'pag':'AsBranquelas.html', 'titulo':'As Branquelas' },
    'Barbie' : { "img.src": 'barbiecapa.jpg', 'pag':'Barbie.html', 'titulo':'Barbie' },
    'Community': { "img.src": 'community.jpg', 'pag':'community.html', 'titulo':'Community' },
    'Demolidor' : { "img.src": 'Demolidor.jpg', 'pag':'Demolidor.html', 'titulo':'Demolidor' },
    'Invasores' : { "img.src": 'SecretInvasion.jpeg', 'pag':'Invasores.html', 'titulo':'Invasores' },
    'O Rei Leão': { "img.src": 'ReiLeao.jpg', 'pag':'OReiLeão.html', 'titulo':'O Rei Leão' },
    'Pinóquio': { "img.src": 'Pinoquio.jpg', 'pag':'Pinocchio.html', 'titulo':'Pinóquio' },
    'She Hulk': { "img.src": 'SheHulk.png', 'pag':'SheHulk.html', 'titulo':'She Hulk' },
    'Squid Game': { "img.src": 'squidgame.jpg', 'pag':'SquidGame.html', 'titulo':'Squid Game' },
    'Ta Dando Onda': { "img.src": 'TaDandoOnda.jpg', 'pag':'TaDandoOnda.html', 'titulo':'Ta Dando Onda' },
    'Tico e Teco': { "img.src": 'TicoTeco.png', 'pag':'TicoETeco.html', 'titulo':'Tico e Teco' },
    'Vingadores': { "img.src": 'vingadores.jpg', 'pag':'Vingadores.html', 'titulo':'Vingadores' }
};

// Put the object into storage
localStorage.setItem('filmes', JSON.stringify(filmes));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('filmes');