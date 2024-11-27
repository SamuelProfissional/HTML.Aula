// Arquivo das automação do Menu Hamburguer

// modificar posteriormente
const btnMobile = document.getElementById('btn-mobile')

/* Função que altera o estado do menu (aberto/fechado)
@para {Event} - Evento que dispara a função, como 'click' ou 'touchstart'
*/

function toggleMenu(event){
    // Evita o comportamento padrão do evento 'touchstart', evitando bug em dispositivos móveis
    if(event.type === 'touchstart') event.preventDefault();

    // Seleciona o elemnto  navegação pelo sei ID 
    const nav = document.getElementById('nav');

    // Adicina ou remove a classe 'active' no elemento de navegação, ativado ou desativando o menu
    nav.classList.toggle('active');

// Verifica se o menu está aberto ou não 
const isActive = nav.classList.constains('active');

// Atualiza o atributo  'arial-expanded' para melhorar a acessibilidade  ao menu
event.currentTarget.setAttribute('aria-expanded', isActive);

// Define o texto do atributo 'arial-label' dependedo do estado do menu (aberto/fechado)
if(isActive){
    event.currentTarget.setAttribute('aria-label','Fechar Menu');
}else{
    event.currentTarget.setAttribute('aria-label','Abrir Menu');
}

}

// Adiciona eventos de 'click' a 'touchstart' para ativar a função toggleMenu ao interagir com o botão
btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);
