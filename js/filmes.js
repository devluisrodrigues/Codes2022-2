localStorage.clear();
var filmes = {
    "Abracadabra": { "img.src": 'Abracadabra.png', 'pag':'Abracadabra.html', 'titulo':'Abracadabra' },
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