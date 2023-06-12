const body = document.getElementsByTagName('body')[0];
const div = document.createElement('div');
const fotonova = document.createElement('img');
const descricao = localStorage.getItem('descricao');
const nome = localStorage.getItem('nome');
const dataNascimento = localStorage.getItem('nascimento'); // Substitua esta string pela data de nascimento obtida do localStorage
const posicaoJogo = localStorage.getItem('posicao')
const alturaJogador = localStorage.getItem('altura')
const nomeCompleto = localStorage.getItem('nome_completo')

fotonova.src = localStorage.getItem('imagem');
fotonova.alt = descricao;

div.appendChild(fotonova);

const nomeElement = document.createElement('h2');
nomeElement.textContent = nome;
nomeElement.style.textAlign = 'left';
div.appendChild(nomeElement);


const posicao_info = document.createElement('h3');
posicao_info.textContent = `Posição: ${posicaoJogo}`;
posicao_info.style.textAlign = 'left';
div.appendChild(posicao_info);


const nome_completo = document.createElement('h4');
nome_completo.textContent = `Nome completo: ${nomeCompleto}`;
div.appendChild(nome_completo);

const descricaoElement = document.createElement('h4');
descricaoElement.textContent = `Descrição sobre a atleta: ${descricao}`;
div.appendChild(descricaoElement);



const dataNascimentoElement = document.createElement('h4');
dataNascimentoElement.textContent = `Data e local de nascimento: ${dataNascimento}`;
div.appendChild(dataNascimentoElement);

const altura_info = document.createElement('h4');
altura_info.textContent = `Altura: ${alturaJogador}`;
div.appendChild(altura_info);

body.appendChild(div);

fotonova.classList.add('classeImagem');