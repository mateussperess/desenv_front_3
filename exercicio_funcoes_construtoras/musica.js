function Musica(
  nome,
  artista,
  album,
  tempoDuracao,
  genero,
  posicaoMusica,
  playing
) {
  this.nome = nome
  this.artista = artista
  this.album = album
  this.tempoDuracao = tempoDuracao
  this.genero = genero
  this.posicaoMusica = posicaoMusica
  this.playing = playing
}

function PlayList (
  nome, 
  arrayMusicas,
  musicaAtual
) {

}

Musica.prototype.play = function () {
  if (this.playing == false) {
    console.log(`Tocando a musica ${this.nome}`)
    return this.playing = true;
  }
}

Musica.prototype.pause = function () {
  if (this.playing == true) {
    console.log(`Pausando a musica ${this.nome}`)
    return this.playing = false;
  }
}