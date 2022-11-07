// Declarações iniciais

const sessions = document.getElementsByTagName('section');
const iniciarForms = document.querySelector('button');
const buttons = document.getElementsByTagName('button');

// Funções

const start = () => {
  // por default as sessões serão escondidas menos a primeira!
  for (let i=0; i<sessions.length; i+=1) {
    sessions[i].style.display = 'none'
  }
  sessions[0].style.display = 'flex'

}

start();

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

// Botões com nome 'próximo' são ligadas a func next

for (let i=1; i<buttons.length; i+=1) {
  if (buttons[i].innerText.includes('Próximo')) {
    buttons[i].onclick = next;
    // console.log(buttons[i]);
  }
}

// Botões com nome 'anterior' são ligadas a func previous

for (let i=1; i<buttons.length; i+=1) {
  if (buttons[i].innerText.includes('Anterior')) {
    buttons[i].onclick = previous;
    // console.log(buttons[i]);
  }
}

// Eventos

iniciarForms.addEventListener('click', next);