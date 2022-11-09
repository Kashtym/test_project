let nameUser = prompt('Enter your name');

let namePos = document.querySelector(".name_h1");

namePos.textContent = (nameUser == '') ? 'User' : nameUser;