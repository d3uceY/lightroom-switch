const container =  document.querySelector('.container');
const buttonContainer = document.querySelector('.button');
const button = document.querySelector('.dark-mode');

button.addEventListener('click', () => {
   container.classList.toggle('light-mode-bg')
   buttonContainer.classList.toggle('button-lightmode-bg')
   button.classList.toggle('light-mode')
   console.log('nigger')
})