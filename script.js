// Declarações iniciais

const sessions = document.getElementsByTagName('section');
const iniciar = document.getElementById('iniciar')
const buttons = document.getElementsByTagName('button');
const imgGif = document.querySelector('img');
const form = document.getElementById('form')
const inputs = document.getElementsByTagName('input');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const valid1 = document.querySelector('input[id="yespet"]');
const valid2 = document.querySelector('input[id="nopet"]');
const answerQ2 = document.querySelectorAll("input[name='typepet']");
const answerQ3 = document.querySelector("input[name='datepet']");
const answerQ4 = document.querySelectorAll("input[type='checkbox']");
const answerQ5 = document.querySelectorAll("input[name='passear']");
const answerQ6 = document.querySelector("input[name='zeroacem']");
const answerQ7 = document.querySelectorAll("input[name='sleeppet']");
const answerQ8 = document.querySelectorAll("input[name='med']");
const answerQ9 = document.querySelectorAll("input[name='toy']");
const textarea = document.getElementById('textarea');
const color = document.getElementById('color');
const spans = document.querySelectorAll('span');

// Funções

const load = () => {
  // por default as sessões serão escondidas!
  for (let i=0; i<sessions.length; i+=1) {
    sessions[i].style.display = 'none'
  }
}

const start = () => {
  for (let i=0; i<sessions.length; i+=1) {
    sessions[i].style.display = 'none'
  }
  sessions[0].style.display = 'flex';
  iniciar.disabled = true
  btnsDisabled();
}

const gifAbertura = () => {
// função para simular um carregamento feito pelo gif
  setTimeout( () => {
    imgGif.style.display = 'none';
    start();
  },2300);
}

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
  let secAtual = event.target.parentElement.parentElement;
  secAtual.style.display = 'none';

  for (let i=0; i<sessions.length; i+=1) {
    if (sessions[i] === secAtual) {
      sessions[i+1].style.display = 'flex'
      break;
    }
  }
}

const previous = (event) => {
  let secAtual = event.target.parentElement.parentElement;
  secAtual.style.display = 'none';

  for (let i=0; i<sessions.length; i+=1) {
    if (sessions[i] === secAtual) {
      sessions[i-1].style.display = 'flex'
      break;
    }
  }
}

// Funções de Validação do forms 

const registerName = () => {
  
  if (inputs[0].value.length > 2) {
    iniciar.disabled = false;
    spans[0].style.display = 'none'
    
  } else {
    iniciar.disabled = true;
    spans[0].style.display = 'flex'
  }
}

const registerEmail = () => {
  if (inputs[1].value.length > 5) {
    iniciar.disabled = false;
    spans[1].style.display = 'none'
    
  } else {
    iniciar.disabled = true;
    spans[1].style.display = 'flex'
  }
}

const requisitoMinimo = () => {
  if (valid2.checked === true) {
    window.location.href='./index3.html';
  } else {
    next();
  }
  
}

const disabledOffQuestion1 = () => {
  if (valid1.checked === true || valid2.checked === true) {
    btn1.disabled = false;
  } else {
    btn1.disabled = true;
  }
}

const disabledOffQuestion2 = (event) => {
  if (event.target.checked === true) {
    btn2.disabled = false;
  } else {
    btn2.disabled = true;
  }
}

const disabledOffQuestion3 = (event) => {
  if (event.target.value !== '') {
    btn3.disabled = false;
  } else {
    btn3.disabled = true;
  }
}

let count = 0

const disabledOffQuestion4 = () => {

  for (let i=0; i<answerQ4.length; i+=1) {
    if (answerQ4[i].checked === true) {
      count += 1;
    }
  }

  if (count > 0) {
    btn4.disabled = false;
  } else {
    btn4.disabled = true;
  }

  count = 0
}

const disabledOffQuestion5 = (event) => {
  if (event.target.checked === true) {
    btn5.disabled = false;
  } else {
    btn5.disabled = true;
  }
}

const disabledOffQuestion6 = () => {
  btn6.disabled = false;
}

const disabledOffQuestion7 = (event) => {
  if (event.target.checked === true) {
    btn7.disabled = false;
  } else {
    btn7.disabled = true;
  }
}

const disabledOffQuestion8 = (event) => {
  if (event.target.value === 'sim') {
    btn8.disabled = false;
    textarea.disabled = false;

  } else {
    btn8.disabled = false;
    textarea.disabled = true;
  }
}

const disabledOffQuestion9 = (event) => {
  if (event.target.value === 'sim') {
    btn9.disabled = false;
    color.disabled = false;

  } else {
    btn9.disabled = false;
    color.disabled = true;
  }
}

// FIM - Funções de Validação do forms 

const btnsEventsNext = () => {
  for (let i=1; i<buttons.length; i+=1) {
    if (buttons[i].innerText.includes('Próximo')) {
      buttons[i].addEventListener('click', next);
    }
  }
}

const btnsEventsPrevious = () => {
  for (let i=1; i<buttons.length; i+=1) {
    if (buttons[i].innerText.includes('Anterior')) {
      buttons[i].addEventListener('click', previous);
    }
  }
}

const btnsDisabled = () => {
  for (let i=1; i<buttons.length; i+=1) {
    if (buttons[i].innerText.includes('Próximo')) {
      buttons[i].disabled = true
    }
  }
}

const btnsBootstrap = () => {
  for (let i=0; i<buttons.length; i+=1) {
    // Botões terão class="btn btn-dark"
    buttons[i].className = "btn btn-outline-dark";
  }
}

// Eventos

iniciar.addEventListener('click', firstNext);
form.addEventListener('reset', start);
btn1.addEventListener('click', requisitoMinimo);
valid1.addEventListener('click', disabledOffQuestion1);
valid2.addEventListener('click', disabledOffQuestion1);
answerQ2[0].addEventListener('click', disabledOffQuestion2);
answerQ2[1].addEventListener('click', disabledOffQuestion2);
answerQ2[2].addEventListener('click', disabledOffQuestion2);
answerQ2[3].addEventListener('click', disabledOffQuestion2);
answerQ3.addEventListener('change',disabledOffQuestion3);
answerQ4[0].addEventListener('click', disabledOffQuestion4);
answerQ4[1].addEventListener('click', disabledOffQuestion4);
answerQ4[4].addEventListener('click', disabledOffQuestion4);
answerQ4[3].addEventListener('click', disabledOffQuestion4);
answerQ4[4].addEventListener('click', disabledOffQuestion4);
answerQ4[5].addEventListener('click', disabledOffQuestion4);
answerQ5[0].addEventListener('click', disabledOffQuestion5);
answerQ5[1].addEventListener('click', disabledOffQuestion5);
answerQ5[2].addEventListener('click', disabledOffQuestion5);
answerQ5[3].addEventListener('click', disabledOffQuestion5);
answerQ5[4].addEventListener('click', disabledOffQuestion5);
answerQ6.addEventListener('change',disabledOffQuestion6);
answerQ7[0].addEventListener('click', disabledOffQuestion7);
answerQ7[1].addEventListener('click', disabledOffQuestion7);
answerQ7[2].addEventListener('click', disabledOffQuestion7);
answerQ7[3].addEventListener('click', disabledOffQuestion7);
answerQ8[0].addEventListener('click', disabledOffQuestion8);
answerQ8[1].addEventListener('click', disabledOffQuestion8);
answerQ9[0].addEventListener('click', disabledOffQuestion9);
answerQ9[1].addEventListener('click', disabledOffQuestion9);
inputs[0].addEventListener('change', registerName);
inputs[1].addEventListener('change', registerEmail);


window.onload = () => {
  load();
  gifAbertura();
  btnsEventsNext();
  btnsEventsPrevious();
  btnsDisabled();
  btnsBootstrap();
};
