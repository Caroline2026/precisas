

const container = document.querySelector ('.form-container')
/*const loginLink = document.querySelector ('.login-link')*/
/*const cadastroLink = document.querySelector ('.cadastro-link')*/
const btnLogin = document.querySelector ('.btnLogin')
const iClose = document.querySelector ('.close')

btnLogin.onclick = () => {
    container.classList.add('active-popup')
}

iClose.onclick = () => {
    container.classList.remove('active-popup')
}














/*const wrapper = document.querySelector(".wrapper")
const cadastroLink = document.querySelector(".cadastro-link")
const loginLink = document.querySelector(".login-link")
const btnPopup = document.querySelector(".btnLogin-popup")
const btnCadastro = document.querySelector(".btnCadastro-popup")
const iconClose = document.querySelector(".icon-close") 

cadastroLink.onclick = () => {
    wrapper.classList.add("active")
}

loginLink.onclick = () => {
    wrapper.classList.remove("active")
}

btnPopup.onclick = () => {
    wrapper.classList.add("active-popup")
}

btnCadastro.onclick = () => {
    wrapper.classList.add("active-popup")
    wrapper.classList.add("active")
}


iconClose.onclick = () => {
    wrapper.classList.remove("active-popup")
    wrapper.classList.remove("active")
}*/
