document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]'); 
    const questao = document.querySelectorAll('[data-faq-questao]');

    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            esconderAbas();
            aba.classList.add('show__list--is-active');
            botaoAtivo();
            botao.target.classList.add('show__tab__button--is-active');
        })
    }

    for (let i =0; i < questao.length; i++ ) {
        questao[i].addEventListener('click' , abreOuFechaResposta);
    }
})

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questoes__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function botaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]'); 

    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].classList.remove('show__tab__button--is-active');
    }
}

function esconderAbas() {
    const tabs = document.querySelectorAll('[data-tab-id]'); 

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('show__list--is-active');
    }
}