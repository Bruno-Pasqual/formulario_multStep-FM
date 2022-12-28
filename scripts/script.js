//! Selecionando elementos no DOM ---------------------------------------------

const inputNome = document.getElementById('input_nome');
const inputEmail = document.getElementById('input_email');
const inputCelular = document.getElementById('input_numero');
const mensagensErro = document.querySelectorAll('mensagem_erro');

//! Funções -------------------------------------------------------------------

function checaNome() {
  if (apenasLetras(inputNome.value)) {
    console.log('só letras');
  } else {
    inputNome.style.outline = '2px ';
  }
}

//Regex para testar validade de um email
let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

function apenasLetras(str) {
  return /^[A-Za-z\s]*$/.test(str);
}
