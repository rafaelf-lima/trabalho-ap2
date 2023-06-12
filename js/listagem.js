const div_img_femininas = document.getElementById("feminino")
const div_img_masculinas = document.getElementById("masculino")
const art = document.getElementById("artigo")

const manipula_evento = (evento) => {
    const imagem_clicada = evento.target;
    const descricao = imagem_clicada.dataset.descricao;
    const nome = imagem_clicada.dataset.nome;
    const imagem = imagem_clicada.dataset.imagem;
    const nascimento = imagem_clicada.dataset.nascimento;
    const posicao = imagem_clicada.dataset.posicao;
    const altura = imagem_clicada.dataset.altura;
    const nomeCompleto = imagem_clicada.dataset.nome_completo;
  
    localStorage.setItem('descricao', descricao);
    localStorage.setItem('nome', nome);
    localStorage.setItem('imagem', imagem);
    localStorage.setItem('nascimento', nascimento);
    localStorage.setItem('posicao', posicao);
    localStorage.setItem('altura', altura);
    localStorage.setItem('nome_completo', nomeCompleto);
  
    window.open("detalhes.html", "_self");
  };
  

const criar_imagens = (entrada) => {
    div_img_femininas.innerHTML = '';
    div_img_masculinas.innerHTML = '';
    
    for (const jogador of jogadores) {
        if (jogador.elenco === "feminino") {
            const artigo_feminino = document.createElement('article');
            
            const imagem_feminina = document.createElement('img');
            const nome_feminino = document.createElement('h5');
            
            imagem_feminina.src = jogador.imagem;
            imagem_feminina.className = 'img_jogadoras';
            imagem_feminina.onclick = manipula_evento;
            
            nome_feminino.innerHTML = jogador.nome;
            
            artigo_feminino.appendChild(imagem_feminina);
            artigo_feminino.appendChild(nome_feminino);
            
            div_img_femininas.appendChild(artigo_feminino);
            
            imagem_feminina.dataset.nome = jogador.nome;
            imagem_feminina.dataset.descricao = jogador.descricao;
            imagem_feminina.dataset.imagem = jogador.imagem;
            imagem_feminina.dataset.nascimento = jogador.nascimento;
            imagem_feminina.dataset.posicao = jogador.posicao;
            imagem_feminina.dataset.altura = jogador.altura;
            imagem_feminina.dataset.nome_completo = jogador.nome_completo;
        }
        else {
            const artigo_masculino = document.createElement('article');
            
            const imagem_masculina = document.createElement('img');
            const nome_masculino = document.createElement('h5');
            
            imagem_masculina.src = jogador.imagem;
            imagem_masculina.className = 'img_jogadoras';
            imagem_masculina.onclick = manipula_evento;
            
            nome_masculino.innerHTML = jogador.nome;
            
            artigo_masculino.appendChild(imagem_masculina);
            artigo_masculino.appendChild(nome_masculino);
            div_img_masculinas.appendChild(artigo_masculino)
            imagem_masculina.dataset.nome = jogador.nome;
            imagem_masculina.dataset.descricao = jogador.descricao;
            imagem_masculina.dataset.imagem = jogador.imagem;
            imagem_masculina.dataset.nascimento = jogador.nascimento;
            imagem_masculina.dataset.posicao = jogador.posicao;
            imagem_masculina.dataset.altura = jogador.altura;
            imagem_masculina.dataset.nome_completo = jogador.nome_completo;
            
        }    
        }
    }

criar_imagens(jogadores);