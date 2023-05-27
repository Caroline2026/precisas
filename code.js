
const wrapper = document.querySelector(".wrapper")
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