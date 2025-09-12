//  7. Crie a função construtora Musica, que possui como atributos o nome, o artista, o 
//  álbum, o tempo de duração, o gênero, a posição da música e o atributo playing, que indica 
//  se a música está sendo tocada nesse instante. Uma música deve ser criada atribuindo o 
//  valor a todos esses atributos, incluindo false para o atributo playing. 
function Musica(nome, artista, album, tempoDuracao, genero, posicaoMusica) {
  this.nome = nome;
  this.artista = artista;
  this.album = album;
  this.tempoDuracao = tempoDuracao;
  this.genero = genero;
  this.posicaoMusica = posicaoMusica;
  this.playing = false;
}

// 8. Para a função construtora acima, crie os métodos play e pause. O método play deve 
// atribuir true ao playing e apresentar uma mensagem console.log com a frase “Tocando a 
// música nome_da_música”. Por sua vez, o botão pause deve atribuir false ao atributo playing 
// da música 
Musica.prototype.play = function () {
  console.log(`tocando musica ${this.nome}`);
  this.playing = true;
};

Musica.prototype.pause = function () {
  console.log(`pausando musica ${this.nome}`);
  this.playing = false;
};

// 9. Crie uma função construtora para gerar objetos Playlist. O objeto Playlist é formado 
// por um nome, um array composto por objetos Musica e um atributo musicaAtual, que nada 
// mais é do que um indicador que mostra o índice no array de objetos Musica com a música 
// a ser tocada nessa playlist. Um objeto playlist também deve possuir os seguintes métodos: 
function PlayList(nome, arrayMusicas, musicaAtual) {
  this.nome = nome;
  this.arrayMusicas = arrayMusicas || [];
  this.musicaAtual = musicaAtual;
}

// a. mostraPlaylist(), que apresenta, com o auxílio da console.log, uma lista 
// numerada com os nomes das Músicas que compõe essa playlist 
PlayList.prototype.mostrarPlaylist = function () {
  console.log(`Playlist: ${this.nome}`);
  this.arrayMusicas.forEach((musica, index) => {
    const atual = index === this.musicaAtual ? " [ATUAL]" : "";
    const tocando = musica.playing ? " [TOCANDO]" : "";
    console.log(`${index + 1}. ${musica.nome}${atual}${tocando}`);
  });
};

// b. adicionaMusica(musica), que adiciona no final do array de músicas um novo 
// objeto Musica, passado como parâmetro desse método. 
PlayList.prototype.adicionarMusica = function (musica) {
  this.arrayMusicas.push(musica);
};

// c. removeMusica(indice), que remove a música apresentada nesse índice. 
PlayList.prototype.removeMusica = function (indice) {
  let indiceArray = indice - 1;

  if (indiceArray <= this.musicaAtual) {
    this.musicaAtual = Math.max(0, this.musicaAtual - 1);
  }

  this.arrayMusicas.splice(indiceArray, 1);

  if (this.arrayMusicas.length === 0) {
    this.musicaAtual = null;
  }
};

// d. getMusicaCorrente(), que retorna o índice da música atualmente indicada 
// como música atual da playlist. 
PlayList.prototype.getMusicaCorrente = function () {
  return this.musicaAtual;
};

// e. setMusicaCorrente(indice), que indica o índice da música que passa a ser 
// tratada como música atual da playlist. 
PlayList.prototype.setMusicaCorrente = function (index) {
  let musicaAtual = this.arrayMusicas[this.musicaAtual];
  if (musicaAtual && musicaAtual.playing) {
    musicaAtual.pause();
  }

  this.musicaAtual = index;
  let novaMusica = this.arrayMusicas[index];
  if (novaMusica) {
    novaMusica.play();
  }
};

PlayList.prototype.play = function () {
  if (this.arrayMusicas.length > 0 && this.musicaAtual !== null) {
    this.arrayMusicas[this.musicaAtual].play();
  } else {
    console.log("Nenhuma música para tocar");
  }
};

PlayList.prototype.pause = function () {
  if (this.arrayMusicas.length > 0 && this.musicaAtual !== null) {
    this.arrayMusicas[this.musicaAtual].pause();
  }
};

PlayList.prototype.next = function () {
  if (this.arrayMusicas.length > 0) {
    let proximoIndice = (this.musicaAtual + 1) % this.arrayMusicas.length;
    this.setMusicaCorrente(proximoIndice);
  }
};

PlayList.prototype.previous = function () {
  if (this.arrayMusicas.length > 0) {
    const anteriorIndice =
      (this.musicaAtual - 1 + this.arrayMusicas.length) %
      this.arrayMusicas.length;
    this.setMusicaCorrente(anteriorIndice);
  }
};

// 10. Para os objetos Playlist definidos anteriormente, crie os controles de play(), pause(), 
// next() e previous(), que devem simular o controle de músicas a serem tocadas nessa 
// playlist. 

// 11. // Crie o objeto player que possui uma lista de playlists. Para isso use os objetos Playlist 
// e Musica definidos anteriormente. Tal objeto deve ser capaz de gerenciar múltiplas playlists, 
// permitindo que o usuário adicione, selecione ou remova uma playlist, bem como coordene 
// a execução das músicas dessa playlist. Note que uma mesma música poderá estar 
// presente em mais de uma playlist. 
function Player() {
  this.playlists = [];
  this.playlistAtual = null;
}

Player.prototype.adicionarPlaylist = function (playlist) {
  this.playlists.push(playlist);
  if (this.playlists.length === 1) {
    this.playlistAtual = 0;
  }
};

Player.prototype.selecionarPlaylist = function (indice) {
  if (indice >= 0 && indice < this.playlists.length) {
    if (this.playlistAtual !== null) {
      this.playlists[this.playlistAtual].pause();
    }
    this.playlistAtual = indice;
  }
};

Player.prototype.removerPlaylist = function (indice) {
  if (indice >= 0 && indice < this.playlists.length) {
    this.playlists.splice(indice, 1);
    if (this.playlistAtual >= this.playlists.length) {
      this.playlistAtual = this.playlists.length > 0 ? 0 : null;
    }
  }
};

Player.prototype.mostrarPlaylists = function () {
  console.log("=== PLAYLISTS DISPONÍVEIS ===");
  this.playlists.forEach((playlist, index) => {
    const atual = index === this.playlistAtual ? " [SELECIONADA]" : "";
    console.log(`${index + 1}. ${playlist.nome}${atual}`);
  });
};

Player.prototype.play = function () {
  if (this.playlistAtual !== null) {
    this.playlists[this.playlistAtual].play();
  }
};

Player.prototype.pause = function () {
  if (this.playlistAtual !== null) {
    this.playlists[this.playlistAtual].pause();
  }
};

Player.prototype.next = function () {
  if (this.playlistAtual !== null) {
    this.playlists[this.playlistAtual].next();
  }
};

Player.prototype.previous = function () {
  if (this.playlistAtual !== null) {
    this.playlists[this.playlistAtual].previous();
  }
};

// testes
console.log("=== REQUISITO 7: FUNÇÃO CONSTRUTORA MUSICA ===");
let musica1 = new Musica("Song A", "Artist 1", "Album X", 180, "Rock", 1);
let musica2 = new Musica("Song B", "Artist 2", "Album Y", 200, "Pop", 2);
let musica3 = new Musica("Song C", "Artist 3", "Album Z", 150, "Jazz", 3);
console.log(`Música criada: ${musica1.nome}, playing: ${musica1.playing}`);

console.log("\n=== REQUISITO 8: MÉTODOS PLAY E PAUSE ===");
musica1.play();
console.log(`Status após play: ${musica1.playing}`);
musica1.pause();
console.log(`Status após pause: ${musica1.playing}`);

console.log("\n=== REQUISITO 9: FUNÇÃO CONSTRUTORA PLAYLIST ===");
const playlist1 = new PlayList("Rock Classics", [], 0);
playlist1.adicionarMusica(musica1);
playlist1.adicionarMusica(musica2);
playlist1.adicionarMusica(musica3);
console.log("Playlist criada e músicas adicionadas:");
playlist1.mostrarPlaylist();

console.log("\n=== REQUISITO 9a: mostrarPlaylist() ===");
playlist1.mostrarPlaylist();

console.log("\n=== REQUISITO 9d: getMusicaCorrente() ===");
console.log(`Música atual no índice: ${playlist1.getMusicaCorrente()}`);

console.log("\n=== REQUISITO 9e: setMusicaCorrente() ===");
playlist1.setMusicaCorrente(1);
playlist1.mostrarPlaylist();

console.log("\n=== REQUISITO 9c: removeMusica() ===");
playlist1.removeMusica(2);
console.log("Música removida:");
playlist1.mostrarPlaylist();

console.log("\n=== REQUISITO 10: CONTROLES DA PLAYLIST ===");
console.log("PLAY:");
playlist1.play();
playlist1.mostrarPlaylist();

console.log("\nNEXT:");
playlist1.next();
playlist1.mostrarPlaylist();

console.log("\nPREVIOUS:");
playlist1.previous();
playlist1.mostrarPlaylist();

console.log("\nPAUSE:");
playlist1.pause();
playlist1.mostrarPlaylist();

console.log("\n=== REQUISITO 11: OBJETO PLAYER ===");
const player = new Player();

// Criando segunda playlist
const playlist2 = new PlayList("Pop Hits", [], 0);
playlist2.adicionarMusica(
  new Musica("Pop Song 1", "Pop Artist", "Pop Album", 190, "Pop", 1)
);
playlist2.adicionarMusica(
  new Musica("Pop Song 2", "Pop Artist", "Pop Album", 210, "Pop", 2)
);

console.log("Adicionando playlists ao player:");
player.adicionarPlaylist(playlist1);
player.adicionarPlaylist(playlist2);
player.mostrarPlaylists();

console.log("\nControles do player na playlist atual:");
player.play();
player.next();
player.mostrarPlaylists();

console.log("\nSelecionando outra playlist:");
player.selecionarPlaylist(1);
player.play();
player.mostrarPlaylists();

console.log("\nRemovendo playlist:");
player.removerPlaylist(0);
player.mostrarPlaylists();
