//localStorage.clear();
var filmes = {
    "Abracadabra 2": { "img.src": 'Abracadabra.png', 'pag':'Abracadabra.html', 'titulo':'Abracadabra 2', 'sinopse': 'Abracadabra 2 é a continuação da comédia clássica de 1993, com as bruxas malvadas, as irmãs Sanderson (Bette Midler, Sarah Jessica Parker e Kathy Najimy) provocando o caos. Fazem 29 anos desde que a vela da chama negra foi acesa e ressuscitou as irmãs bruxas do século 17, e elas retornam nesta continuação sedentas, querendo vingança. Duas jovens acidentalmente trazem de volta as Irmãs Sanderson para a Salem moderna e agora as adolescentes devem impedir que as bruxas vorazes causem mais estrago em Salem antes do amanhecer de Halloween.' },
    'As Branquelas' : { "img.src": 'AsBranquelas.jpg', 'pag':'AsBranquelas.html', 'titulo':'As Branquelas', 'sinopse': 'Em As Branquelas, os irmãos Marcus (Marlon Wayans) e Kevin Copeland (Shawn Wayans) são detetives do FBI que estão com problemas no trabalho. A última investigação da dupla foi um grande fracasso e eles estão sob a ameaça de serem demitidos. Quando um plano para sequestrar as mimadas irmãs Brittany (Maitland Ward) e Tiffany Wilson (Anne Dudek) é descoberto, o caso é entregue aos principais rivais dos irmãos Copeland, os agentes Vincent Gomez (Eddie Velez) e Jack Harper (Lochlyn Munro). Para aumentar ainda mais a humilhação da dupla, eles são escalados para escoltar as jovens mimadas do aeroporto até o local de um evento pelo qual elas esperaram por meses. Porém no trajeto um acidente de carro provoca um verdadeiro desastre: enquanto uma das irmãs arranha o nariz, a outra corta o lábio. Desesperadas, elas se recusam a ir ao evento. É quando,para salvar o emprego, Marcus e Kevin decidem por assumir as identidades das irmãs.' },
    'Barbie' : { "img.src": 'barbiecapa.jpg', 'pag':'Barbie.html', 'titulo':'Barbie', 'sinopse': 'No encantador mundo de Fairytopia, no colorido Magic Meadow, a bela mas sem asas sprite, Elina, vive em uma flor hospitaleira junto com sua companheira, Bibble, a puffball. Desejando ter um par de asas cintilantes como seu amigo das fadas, Dandelion, Elina descobre que a perversa Laverna enfraqueceu todas as criaturas voadoras em sua terra mágica, e agora, elas são incapazes de voar. Para salvar a amada Fairytopia, Elina deve reunir coragem para encontrar a Fada Guardiã, Azura; no entanto, pode uma única fada sem asas frustrar os planos de Laverna?'},
    'Brooklyn 99': {'img.src': 'Brooklyn99.jpg', 'pag':'Brooklyn99.html', 'titulo':'Brooklyn 99', 'sinopse': 'Brooklyn 99 é uma série de televisão americana de comédia policial criada por Dan Goor e Michael Schur. A série é estrelada por Andy Samberg, Andre Braugher, Terry Crews, Melissa Fumero, Joe Lo Truglio, Stephanie Beatriz, Chelsea Peretti e Dirk Blocker. A série segue um grupo de detetives da delegacia de Brooklyn, no distrito de Brooklyn, Nova York, que lidam com casos criminais e com a vida pessoal.' },
    'Community': { "img.src": 'community.jpg', 'pag':'community.html', 'titulo':'Community', 'sinopse': 'Na Universidade Comunitária de Greendale, o advogado Jeff Winger (Joel McHale) tenta recuperar o diploma invalidado pela Ordem dos Advogados do Colorado. Durante o período de estudo, ele conhece algumas pessoas bastante diferentes, como o experiente Pierce Hawthorne (Chevy Chase) a atraente Britta Perry (Gillian Jacobs), a jovem Annie Eddison (Alison Brie), a religiosa Shirley (Yvette Nicole Brown) e os geeks Abed (Danny Pudi) e Troy (Donald Glover). Jeff forma com seus colegas de faculdade um grupo de estudos que acaba descobrindo mais sobre si.' },
    'Demolidor' : { "img.src": 'Demolidor.jpg', 'pag':'Demolidor.html', 'titulo':'Demolidor', 'sinopse': 'Matthew Michael Murdock (Charlie Cox) é um jovem atleta e excelente aluno. Ainda na infância, um acidente envolvendo um caminhão que carregava lixos tóxicos o deixou cego e fez com que ele desenvolvesse vários sentidos.', 'data': '10-12-2022' },
    'Invasão Secreta' : { "img.src": 'SecretInvasion.jpeg', 'pag':'Invasores.html', 'titulo':'Invasão Secreta', 'sinopse':'Secret Invasion acompanha Nick Fury (Samuel L. Jackson) e Talos (Ben Mendelsohn), personagens que apareceram em "Homem-Aranha: Longe de Casa". Os dois investigam uma seita de Skrulls que conseguiu se infiltrar no Planeta Terra usando seus poderes de metamorfose. Agora, Nick e Talos precisam deter esses alienígenas e fazer com que tudo volte ao normal.' },
    'Mandalorian': {'img.src': 'mandalorian.jpg', 'pag':'Mandalorian.html', 'titulo':'Mandalorian', 'sinopse': 'O Mandalorian é um pistoleiro solitário que vive em um planeta remoto, longe da civilização. Ele é contratado para transportar um bebê para uma comunidade remota, mas logo descobre que o trabalho não é tão simples quanto parece.' },
    'O Rei Leão': { "img.src": 'ReiLeao.jpg', 'pag':'OReiLeão.html', 'titulo':'O Rei Leão', 'sinopse': 'Live action do clássico da Disney, em O Rei Leão, Simba (Donald Glover) é um jovem leão cujo destino é se tornar o rei da selva. Entretanto, uma armadilha elaborada por seu tio Scar (Chiwetel Ejiofor) faz com que Mufasa (James Earl Jones), o atual rei, morra ao tentar salvar o filhote. Consumido pela culpa, Simba deixa o reino rumo a um local distante, onde encontra amigos que o ensinam a mais uma vez ter prazer pela vida.' },
    'Pinóquio': { "img.src": 'Pinoquio.jpg', 'pag':'Pinocchio.html', 'titulo':'Pinóquio', 'sinopse': 'O clássico da Disney ganha uma nova versão em live action. O filme conta a história de um boneco de madeira que sonha em se tornar um menino de verdade. Para isso, ele precisa provar que é bom e honesto. Ao longo de sua jornada, Pinóquio conhece uma série de personagens, como o Gato de Botas, o Burro e o Lobo Mau.' },
    'She Hulk': { "img.src": 'SheHulk.png', 'data':"20-12-2022" , 'pag':'SheHulk.html', 'titulo':'She Hulk', 'sinopse': 'She-Hulk é uma advogada que, após ser submetida a um transplante de sangue de seu primo Bruce Banner, ganha os mesmos poderes do Hulk. Agora, Jennifer Walters precisa aprender a controlar seus poderes e usar suas habilidades para defender os inocentes.' },	
    'Squid Game': { "img.src": 'squidgame.png', 'pag':'SquidGame.html', 'titulo':'Squid Game', 'sinopse': 'Squid Game, série sul-coreana original da Netflix, acompanha um grupo de pessoas desesperadas por dinheiro que recebem um misterioso convite para participar de jogos competitivos inspirados em brincadeiras infantis. Sem saber qualquer coisa sobre o convite, centenas de pessoas comparecem ao local para participar do evento. Ao final do jogo, o vencedor poderá levar para casa um prêmio milionário e resolver todas as suas dívidas. Porém, o que eles não sabem é que os perdedores não saírão vivos desse jogo. Agora os competidores precisarão lutar para sobreviver a essa macabra disputa.' },
    'Ta Dando Onda': { "img.src": 'TaDandoOnda.jpg', 'pag':'TaDandoOnda.html', 'titulo':'Ta Dando Onda', 'sinopse': 'Ta Dando Onda acompanha a história de um grupo de surfistas que, após serem expulsos de uma praia, decidem criar uma nova comunidade de surfistas em uma ilha deserta. Porém, eles logo descobrem que o local é habitado por um grupo de tubarões que não gostam de dividir o espaço com os humanos.' },
    'Tico e Teco': { "img.src": 'TicoTeco.png', 'pag':'TicoETeco.html', 'titulo':'Tico e Teco', 'sinopse': 'Tico e Teco é uma série de animação que acompanha as aventuras de dois irmãos que vivem em uma ilha paradisíaca. Os dois são muito diferentes um do outro, mas sempre estão juntos para enfrentar os desafios do dia a dia.' },
    'Os Vingadores': { "img.src": 'vingadores.jpg', 'pag':'Vingadores.html', 'titulo':'Os Vingadores', 'sinopse': 'Vingadores: Ultimato é o 22º filme da Marvel e o 4º filme da Fase 3 do Universo Cinematográfico Marvel. O filme é uma sequência de Vingadores: Guerra Infinita e traz de volta os heróis que sobreviveram ao evento. Agora, eles precisam encontrar uma forma de derrotar Thanos (Josh Brolin) e restaurar a ordem no universo.'}
};

// Put the object into storage
localStorage.setItem('filmes', JSON.stringify(filmes));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('filmes');