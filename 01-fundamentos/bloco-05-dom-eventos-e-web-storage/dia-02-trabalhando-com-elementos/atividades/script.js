// 01-01
let elementoAtual = document.getElementById('elementoOndeVoceEsta');

// 01-02
let pai = elementoAtual.parentElement
pai.style.color = "orangered";

// 01-03
let primeiroFilhoDoFilho = elementoAtual.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Sou o primeiro filho do filho.';

// 01-04
let primeiroFilho = pai.firstElementChild;

// 01-05
primeiroFilho = elementoAtual.previousElementSibling;

// 01-06
let atencao = elementoAtual.nextSibling;

// 01-07
let terceiroFilho = elementoAtual.nextElementSibling;

// 01-08
terceiroFilho = pai.lastElementChild.previousElementSibling;

// 02-01

let quartoFilho = document.createElement('section');
quartoFilho.id = 'oNovoIrmao';

pai.appendChild(quartoFilho);

// 02-02
let novoFilho = document.createElement('section');
novoFilho.id = 'novoFilho';

elementoAtual.appendChild(novoFilho);

// 02-03

let neto = document.createElement('section');
neto.id = 'neto';

primeiroFilhoDoFilho.appendChild(neto);

// 02-04
terceiroFilho = neto.parentElement.parentElement.nextElementSibling;

// 03
const secoesFilhas = document.querySelectorAll('#paiDoPai section');

const filhosPermanentes = ['pai', 'elementoOndeVoceEsta', 'primeiroFilhoDoFilho'];

for (let elemento of secoesFilhas) {
  if (!(filhosPermanentes.includes(elemento.id))) {
    elemento.parentElement.removeChild(elemento)
  }
}