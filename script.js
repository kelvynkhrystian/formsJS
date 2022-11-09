// Declarações iniciais

const sessions = document.getElementsByTagName('section');
const iniciar = document.getElementById('iniciar')
const buttons = document.getElementsByTagName('button');
const imgGif = document.querySelector('img');
const form = document.getElementById('form')
const inputs = document.getElementsByTagName('input');
const btn2 = document.getElementById('btn2');
const valid1 = document.querySelector('input[id="yespet"]');
const valid2 = document.querySelector('input[id="nopet"]');

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
  sessions[0].style.display = 'flex';
}

const loading = () => {
// função para simular um carregamento feito pelo gif
  setTimeout( () => {
    imgGif.style.display = 'none';
    start();
  },2300);
}

loading();

const firstNext = (event) => {
  let secAtual = event.target.parentElement
  secAtual.style.display = 'none'

  for (let i=0; i<sessions.length; i+=1) {
    if (sessions[i] === secAtual) {
      sessions[i+1].style.display = 'flex'
      break;
    }
  }
}

const next = (event) => {
  let secAtual = event.target.parentElement.parentElement
  console.log(secAtual);
  secAtual.style.display = 'none'

  for (let i=0; i<sessions.length; i+=1) {
    if (sessions[i] === secAtual) {
      sessions[i+1].style.display = 'flex'
      break;
    }
  }
}

const previous = (event) => {
  let secAtual = event.target.parentElement.parentElement
  secAtual.style.display = 'none'

  for (let i=0; i<sessions.length; i+=1) {
    if (sessions[i] === secAtual) {
      sessions[i-1].style.display = 'flex'
      break;
    }
  }
}

// Funções de Validação do forms 

const reqMin = () => {
  if (valid2.checked === true) {
    window.location.href='./index3.html';
  } else {
    next();
  }
  
}

// const disabledOff = () => {
//   if (valid1.checked === true || valid2.checked === true) {
//     btn2.disabled = false;
//   } else {
//     btn2.disabled = true;
//   }
  
//   document.querySelector('input[id="yespet"]:checked')
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

// Botões terão class="btn btn-dark"

for (let i=0; i<buttons.length; i+=1) {
  buttons[i].className = "btn btn-outline-dark";
}

// Estilizando inputs com class="input-group"

// for (let i=0; i<inputs.length; i+=1) {

//   if((inputs[i].type === 'text') || (inputs[i].type === 'email')) {
//     inputs[i].className = "input-group-text"
//   }

//   if((inputs[i].type === 'radio') || (inputs[i].type === 'checkbox')) {
//     // inputs[i].className = "input-group mb-3"
//   }
  
// }


// Eventos

iniciar.addEventListener('click', firstNext);
form.addEventListener('reset', start);
btn2.addEventListener('click', reqMin);
// valid1.addEventListener('click',reqMin);
