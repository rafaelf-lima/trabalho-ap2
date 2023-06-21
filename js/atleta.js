const body = document.getElementsByTagName('body')[0];
const div = document.createElement('div');
const fotonova = document.createElement('img');
const descricao = localStorage.getItem('descricao');
const nome = localStorage.getItem('nome');
const dataNascimento = localStorage.getItem('nascimento');
const posicaoJogo = localStorage.getItem('posicao')
const alturaJogador = localStorage.getItem('altura')
const nomeCompleto = localStorage.getItem('nome_completo')

fotonova.src = localStorage.getItem('imagem');
fotonova.alt = descricao;

div.appendChild(fotonova);

const nome_jogador = document.createElement('h3');
nome_jogador.textContent = `Nome: ${nome}`;
div.appendChild(nome_jogador);


const posicao_info = document.createElement('h4');
posicao_info.textContent = `Posição: ${posicaoJogo}`;
div.appendChild(posicao_info);


const nome_completo = document.createElement('h4');
nome_completo.textContent = `Nome completo: ${nomeCompleto}`;
div.appendChild(nome_completo);

const descricao_info = document.createElement('h4');
descricao_info.textContent = `Descrição sobre jogador/jogadora: ${descricao}`;
div.appendChild(descricao_info);



const nascimento_info = document.createElement('h4');
nascimento_info.textContent = `Data e local de nascimento: ${dataNascimento}`;
div.appendChild(nascimento_info);

const altura_info = document.createElement('h4');
altura_info.textContent = `Altura: ${alturaJogador}`;
div.appendChild(altura_info);

body.appendChild(div);

fotonova.className = 'foto_jogador'
nome_jogador.className = 'itens_jogador';
posicao_info.className = 'itens_jogador';
nome_completo.className = 'itens_jogador';
descricao_info.className = 'itens_jogador';
nascimento_info.className = 'itens_jogador';
altura_info.className = 'itens_jogador';
