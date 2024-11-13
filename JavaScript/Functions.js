// Manipulação dos objetos Dom(Document Object Model)
// Representação de dados que compõem uma estrutura
// e o conteúdo de um documento Web

// Essencial para manipular e interagir com elementos de uma página
// Document.querySelector 

// Exemplo

const titulo = document.querySelector('h1');
titulo.textContent = 'Texto Modificado'; // Modifica o texto do elemento

// Document.createElement()
// Cria novos elementos dinamicamentes

// Exemplo:

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo Adicionado';
document.body.appendChild(novoElemento);


// Uso principal: Adicionar novos elementos ao DOM


// addEventListener()
// Funções que lidam com interações dos usuarios
// Adiciona sua função adicionar um ouvinte para eventos (como cliques)


const botao = document.querySelector('button');
botao.addEventListener('click', () => {
    alert('Botão Clicado');
}
);

// Uso principal: Criar intervalos, com cliques ou movimentos do mouse

// setTimeout()
// Controla ações que ocorrem em intervalos ou após um tempo
// Executa uma função  após um periodo de tempo(unidade de medida)

setTimeout(()=>{
    alert('Executado após 2 segundos!');
}, 2000);
// alert executa o toString do seu objeto e apresenta em tela
// O console.log > ele registra a informação no console do navegador ficando restrito  ao conhecimento do desenvolvedor
// Uso principal: Atrasar execução ou criar temporizadores

// Aula JavaScript > DOM e Functions
