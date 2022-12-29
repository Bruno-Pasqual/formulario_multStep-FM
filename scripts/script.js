//! Selecionando elementos no DOM ---------------------------------------------

const inputNome = document.getElementById('input_nome');
const inputEmail = document.getElementById('input_email');
const inputCelular = document.getElementById('input_numero');
const mensagensErro = document.querySelectorAll('.mensagem_erro');

//! Funções -------------------------------------------------------------------

//todo ---------------------------------------- Expressões regulares
//Regex para testar validade de um email
function emailEhValido(email) {
  return /^[\w+.]+@\w+\.\w{3,}(?:\.\w{2})?$/.test(email);
}

function apenasLetras(str) {
  return /^[A-Za-z\s]*$/.test(str);
}
//todo ---------------------------------------- Fim expressões regulares

function checaNome() {
  //todo Função que irá fazer algumas verificações no input do nome e alterará a cor do outline e também a mensagem de erro.

  if (inputNome.value === '') {
    inputNome.style.outline = '1px solid #ee374a ';
    mensagensErro[0].style.display = 'block';
    mensagensErro[0].textContent = 'Não pode ficar vazio';
  } else if (!apenasLetras(inputNome.value)) {
    inputNome.style.outline = '1px solid #ee374a ';
    mensagensErro[0].style.display = 'block';
    mensagensErro[0].textContent = 'Apenas letras';
  } else {
    inputNome.style.outline = '1px solid green ';
    mensagensErro[0].style.display = 'none';
  }
}

function checarEmail() {
  //todo Função que irá fazer algumas verificações de email, não é 100%, essa verificação não pega algumas coisas.

  if (inputEmail.value === '') {
    inputEmail.style.outline = '1px solid #ee374a ';
    mensagensErro[1].style.display = 'block';
    mensagensErro[1].textContent = 'Não pode ficar vazio';
  } else if (!emailEhValido(inputEmail.value)) {
    inputEmail.style.outline = '1px solid #ee374a ';
    mensagensErro[1].style.display = 'block';
    mensagensErro[1].textContent = 'Email inválido';
  } else {
    inputEmail.style.outline = '1px solid green ';
    mensagensErro[1].style.display = 'none';
  }
}

function checarNumero() {
  //todo Função que irá fazer a verificação do input do número de celular, funciona de forma similar as anteriores, de forma que a mensagem de erro e o outline do input são alterados de acordo.

  if (inputCelular.value === '') {
    inputCelular.style.outline = '1px solid #ee374a ';
    mensagensErro[2].style.display = 'block';
    mensagensErro[2].textContent = 'Não pode ficar vazio';
  } else if (inputCelular.value.length < 12) {
    inputCelular.style.outline = '1px solid #ee374a ';
    mensagensErro[2].style.display = 'block';
    mensagensErro[2].textContent = 'Não esquece do DDD ex. 015';
  } else if (inputCelular.value.length > 12) {
    inputCelular.style.outline = '1px solid #ee374a ';
    mensagensErro[2].style.display = 'block';
    mensagensErro[2].textContent = 'Número inválido';
  } else {
    inputCelular.style.outline = '1px solid green';
    mensagensErro[2].style.display = 'none';
  }
}
