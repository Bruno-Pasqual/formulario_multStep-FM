//! Selecionando elementos ----------------------------------------------------

//3 inputs do primeiro form
const nomeInput = document.querySelector('.nome_input');
const emailInput = document.querySelector('.email_input');
const celularInput = document.querySelector('.celular_input');
// circulos representando cada passo
const passos = document.querySelectorAll('.passo');
//Botão próximo passo
const proximoPasso = document.getElementById('botao_proximo');
//Mensagens de erro
const mensagensErro = document.querySelectorAll('.mensagem_erro');
//Passos container
const passosContainer = document.querySelectorAll('.passo');

//! Variáveis ------------------------------------------------------------------
let condition1, condition2, condition3;
let passoAtivo = 0;

//! Funções --------------------------------------------------------------------

//todo Realizando verificação do primeiro input (nome) ----------

function apenasLetras(str) {
  //Função que recebe uma string como argumento e verifica se dentro da mesma existem apenas números
  return /^[a-zA-Z\s.,]+$/.test(str);
}

function checarEntradaNome(nome) {
  if (nome.length < 1) {
    mensagensErro[0].textContent = 'Não pode ser deixado em branco';
    nomeInput.style.border = '1px solid red';
    mensagensErro[0].style.display = 'block';
    return;
  }
  //Função que irá realizar uma checagem se dentro do input nome, consta apenas letras. Caso sejam encontrado caracteres não permitidos uma mensagem de erro será mostrada e a borda do input ficará vermelha para sinalizar o erro.
  if (apenasLetras(nome)) {
    mensagensErro[0].style.display = 'none';
    nomeInput.style.border = '1px solid green';
    condition1 = true;
    proximoPasso.disabled = false;
  } else {
    mensagensErro[0].textContent = 'Apenas letras';
    nomeInput.style.border = '1px solid red';
    mensagensErro[0].style.display = 'block';
    condition1 = false;
  }
}

//todo Realizando a validação do segundo input (email) ----------

function emailCerto(email) {
  //Função que irá checar se o email é válido
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function checarEmail(email) {
  //A função irá utilizar a função emailCerto para fazer as alterações conforme se o email passado for válido ou não
  if (emailCerto(email)) {
    mensagensErro[1].style.display = 'none';
    emailInput.style.border = '1px solid green';
    condition2 = true;
  } else {
    emailInput.style.border = '1px solid red';
    mensagensErro[1].style.display = 'block';
    condition2 = false;
  }
}

//todo Realizando a validação do terceiro input (celular)  -------

function checarCelular(numero) {
  if (numero.length < 12) {
    mensagensErro[2].style.display = 'block';
    celularInput.style.border = '1px solid red';
    condition3 = false;
  } else if (numero.length == 12) {
    mensagensErro[2].style.display = 'none';
    celularInput.style.border = '1px solid green';
    condition3 = true;
  } else {
    mensagensErro[2].style.display = 'block';
    celularInput.style.border = '1px solid red';
    mensagensErro[2].textContent = 'Número de celular inválido';
    condition3 = false;
  }
}

//todo Checagem dos botões para liberar funcionalidade do botão -------
//!Dar uma olhada nisso com a segunda tela !!!!!!!!!!!!!!!!!!!!!!!!!!!!

function checarBotao() {
  if (
    condition1 &&
    condition2 &&
    condition3 &&
    passosContainer[0].classList.contains('ativo')
  ) {
    proximoPasso.classList.add('animate');
  } else {
    proximoPasso.classList.remove('animate');
  }
}

proximoPasso.addEventListener('click', () => {
  console.log('foi');
  trocaAtivo();
});

function trocaAtivo() {
  passoAtivo++;
  passosContainer.forEach((passo) => {
    passo.classList.remove('ativo');
  });
  passosContainer[passoAtivo].classList.add('ativo');
  if (passosContainer[1].classList.contains('ativo')) {
    console.log('Estou na segunda página');
  }
}
