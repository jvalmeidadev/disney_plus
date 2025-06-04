document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]'); 

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
})

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