// Declarações iniciais

const sessions = document.getElementsByTagName('section');

// por default as sessões serão escondidas menos a primeira!

for (let i=1; i<sessions.length; i+=1) {
  sessions[i].style.display = 'none'
}

