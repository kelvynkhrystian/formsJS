// Declarações iniciais

const sessions = document.getElementsByTagName('section');
const iniciar = document.getElementById('iniciar')
const buttons = document.getElementsByTagName('button');
const inputs = document.getElementsByTagName('input');
const imgGif = document.querySelector('img');
const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const form = document.getElementById('form')

// Funções

const load = () => {
  // por default as sessões serão escondidas!
  for (let i=0; i<sessions.length; i+=1) {
    sessions[i].style.display = 'none'
  }
}

load();

const start = () => {
  for (let i=0; i<sessions.length; i+=1) {
    sessions[i].style.display = 'none'
  }
  sessions[0].style.display = 'flex'

}

// função para simular um carregamento feito pelo gif

const loading = () => {

  setTimeout( () => {
    imgGif.style.display = 'none';
    start();
  },2300);
}

loading();

const next = (event) => {
  let secAtual = event.target.parentElement
  secAtual.style.display = 'none'

  for (let i=0; i<sessions.length; i+=1) {
    if (sessions[i] === secAtual) {
      sessions[i+1].style.display = 'flex'
      break;
    }
  }
}

const previous = (event) => {
  let secAtual = event.target.parentElement
  secAtual.style.display = 'none'

  for (let i=0; i<sessions.length; i+=1) {
    if (sessions[i] === secAtual) {
      sessions[i-1].style.display = 'flex'
      break;
    }
  }
}
// let count=0;

// const disableOff = (event) => {

//   if (event.target.value.length > 1) {
//     buttons[0].disabled = false;
    
//   } else {
//     buttons[0].disabled = true;
//   }
// }

// inputName.addEventListener('change',desableOff)
// inputEmail.addEventListener('change',desableOff)

// for (let i=1; i<inputs.length; i+=1) {
//   inputs[i].addEventListener('change', disableOff)
// }



// Botões com nome 'próximo' são ligadas a func next

for (let i=1; i<buttons.length; i+=1) {
  if (buttons[i].innerText.includes('Próximo')) {
    buttons[i].onclick = next;
  }
}

// Botões com nome 'anterior' são ligadas a func previous

for (let i=1; i<buttons.length; i+=1) {
  if (buttons[i].innerText.includes('Anterior')) {
    buttons[i].onclick = previous;
  }
}

// Eventos

iniciar.addEventListener('click', next);
form.addEventListener('reset', start);
