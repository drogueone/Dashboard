let passwdInput = document.querySelector('#password')
let inputContainer = document.querySelector('.input-container')

function removeIcon () {
    inputContainer.classList.toggle('show-icon')
}

passwdInput.addEventListener("click", removeIcon)
passwdInput.addEventListener("mouseout", removeIcon)



console.log(passwdInput, inputContainer);