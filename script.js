const btnEnviar = document.querySelector('#entrar');
btnEnviar.addEventListener('click', (evento) => {
  evento.preventDefault();
  const email = document.querySelector('[name=email]');
  const password = document.querySelector('[name=password]');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
const btn1 = document.querySelector('#submit-btn');
btn1.disabled = true;
const confirmed = document.querySelector('#agreement');
confirmed.addEventListener('click', (evento) => {
  if (evento.target.checked === true) {
    btn1.disabled = false;
  }
});

const count = document.querySelector('textarea');
count.addEventListener('keyup', () => {
  const caract = document.querySelector('#counter');
  const qcaract = document.querySelector('textarea').value.length;
  caract.innerHTML = 500 - qcaract;
});

function selecionados() {
  const materiasSelecionadas = [];
  const materias = document.querySelectorAll('.family input[type=checkbox]:checked');
  for (let index = 0; index < materias.length; index += 1) {
    materiasSelecionadas.push(materias[index].value);
  }
  return materiasSelecionadas.join(', ');
}

function valores() {
  const valor = {
    Nome: `${document.querySelector('#input-name').value} ${
      document.querySelector('#input-lastname').value
    }`,
    Email: `${document.querySelector('#input-email').value}`,
    Casa: `${document.querySelector('#house').value}`,
    Família: `${document.querySelector('[name=family]:checked').value}`,
    Matérias: selecionados(),
    Avaliação: `${document.querySelector('[name=rate]:checked').value}`,
    Observações: `${document.querySelector('#textarea').value}`,
  };
  return valor;
}
const btn2 = document.querySelector('#submit-btn');
const form2 = document.querySelector('#evaluation-form');

btn2.addEventListener('click', (evento) => {
  evento.preventDefault();
  const valor = valores();
  const form = document.querySelectorAll('#evaluation-form div');

  for (let index = 0; index < form.length; index += 1) {
    form[index].remove();
  }

  for (let index = 0; index < Object.keys(valor).length; index += 1) {
    const cria = document.createElement('p');
    cria.innerHTML = `${Object.keys(valor)[index]}: ${valor[Object.keys(valor)[index]]}`;
    form2.appendChild(cria);
  }
});
