const container = document.querySelector('.container');
const btnCadastro = document.querySelector('.secao-cadastro header');
const btnLogin = document.querySelector('.secao-login header');

btnLogin.addEventListener('click', () => {
    container.classList.add('active');
});

btnCadastro.addEventListener('click', () => {
    container.classList.remove('active');
});