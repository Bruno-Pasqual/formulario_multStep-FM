//! Selecionando elementos no DOM ---------------------------------------------

const inputNome = document.getElementById('input_nome');
const inputEmail = document.getElementById('input_email');
const inputCelular = document.getElementById('input_numero');
const mensagensErro = document.querySelectorAll('.mensagem_erro');
const botaoProximo = document.querySelector('.botao_proximo');
const circulosEtapas = document.querySelectorAll('.passo');
//Fazendo seleção dos containers para uso
const ContainerForm = document.getElementById('form_container');

//Seleções da página "planos" ----
const containerPlano = document.querySelector('.container_plano_pai');
const cardsPlanos = document.querySelectorAll('.card_plano');
const containerSwitch = document.getElementById('container_switch');
const circuloSwitch = document.getElementById('circulo_switch');
const opcoesPagamento = document.querySelectorAll('.opcao_pagamento');
const valoresPlanos = document.querySelectorAll('.valor_plano');
const bonusAno = document.querySelectorAll('.bonus_ano');

//Seleção elementos da página "adicionais"---
const containerAdicionais = document.getElementById('pagina_adicional');
const checkBoxes = document.querySelectorAll('.checkbox_input');
const precosAdicionais = document.querySelectorAll('.preco_adicionais');

//Seleção elementos da página "confirmação"----
const containerConfirmacao = document.getElementById('pagina_finalizacao');

//!Variáveis de controle ------------------------------------------------------
let etapaAtiva = 0;
let informacoes = {
  preco_planos: [(mes = [45, 60, 75]), (ano = [450, 600, 750])],
  preco_adicionais: [
    [5, 10, 10],
    [50, 100, 100],
  ],
  escolhaPlano: ['mês', 'ano'],

  escolhas: {
    plano: 0,
    tipoCobranca: 0,
    adicionais: [false, false, false],
  },
};
console.log(informacoes.preco_planos[0][1]);
console.log(circulosEtapas[1].classList.contains('ativo'));
console.log();
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

//! ----------------------------------- Funções para validação dos inputs (P1)
//São executadas atráves do onInput=() de cada um dos campos

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
    return true;
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
    return true;
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
    return true;
  }
}

function checaCondicoesForm() {
  //todo Função que irá fazer a verificação de todos os inputs e casos todos tenham returnado true, irá habilitar o botão "proximo"

  if (checaNome() && checarEmail() && checarNumero()) {
    botaoProximo.classList.remove('desabilitado');
    botaoProximo.disabled = false;
    botaoProximo.classList.add('animate');
  }
}

function checarEtapa() {
  //todo Função que irá fazer a verificação em qual página o usuário se encontra, e executara o script correspondente a cada página.

  if (circulosEtapas[1].classList.contains('ativo')) {
    ContainerForm.style.display = 'none';
    containerPlano.style.display = 'block';
    scriptPaginaPlanos();
  } else if (circulosEtapas[2].classList.contains('ativo')) {
    containerPlano.style.display = 'none';
    containerAdicionais.style.display = 'block';
    scriptPaginaAdicionais();

    console.log('estou na página "2"');
  } else if (circulosEtapas[3].classList.contains('ativo')) {
    containerAdicionais.style.display = 'none';
    containerConfirmacao.style.display = 'block';
    scriptPaginaConfirmacao();
  }
}

//! Event handlers ------------------------------------------------------------

botaoProximo.addEventListener('click', () => {
  alert('fui clicado');
  circulosEtapas.forEach((e) => {
    e.classList.remove('ativo');
  });

  etapaAtiva++;
  circulosEtapas[etapaAtiva].classList.add('ativo');

  checarEtapa();

  //-----
});
// ---------------------------------------------------------ScriptPaginaPlanos()
function scriptPaginaPlanos() {
  //Desativando o botão até que o usuário selecione algo
  botaoProximo.classList.add('desabilitado');
  botaoProximo.disabled = true;
  botaoProximo.classList.remove('animate');

  //! -- Seleção do card do plano
  cardsPlanos.forEach((elemento, index) => {
    elemento.addEventListener('click', () => {
      cardsPlanos.forEach((e) => {
        e.classList.remove('selecionado');
      });
      elemento.classList.add('selecionado');
      if (elemento.classList.contains('selecionado')) {
        botaoProximo.disabled = false;
        botaoProximo.classList.add('animate');
        botaoProximo.classList.remove('desabilitado');
      }

      //Passa a escolha do jogador para o objeto

      informacoes.escolhas.plano = index;

      console.log(informacoes);
    });
  });
  //! Habilita o uso do botão
  // if (cardsPlanos.forEach(elemento))
  //! -- Troca de opção de pagamento
  containerSwitch.addEventListener('click', () => {
    circuloSwitch.classList.toggle('ano');
    bonusAno.forEach((elemento) => {
      elemento.classList.toggle('mostra');
    });
    //Adiciona a classe ativo para mês ou ano
    opcoesPagamento.forEach((elemento) => {
      elemento.classList.toggle('ativo');
    });
    //Verifica qual opção de pagamento está selecionado, e atribui os valores definido no objeto "informacoes" nos cards
    if (opcoesPagamento[0].classList.contains('ativo')) {
      valoresPlanos.forEach((elemento, index) => {
        elemento.textContent = `R$ ${informacoes.preco_planos[0][index]}/mês`;
      });
      informacoes.escolhas.tipoCobranca = 0;
    } else {
      valoresPlanos.forEach((elemento, index) => {
        elemento.textContent = `R$ ${informacoes.preco_planos[1][index]}/ano`;
      });
      informacoes.escolhas.tipoCobranca = 1;
    }
  });

  //todo -- Manda informações para o objeto --
  // console.log(informacoes);
}
// ---------------------------------------------------------ScriptPaginaPlanos()

// --------------------------------------------------- ScriptPaginaAdicionais()
function scriptPaginaAdicionais() {
  console.log(informacoes);

  precosAdicionais.forEach((elemento, index) => {
    //For each que irá fazer a alteração da mensagem e do preço mostrado de acordo com o que for selecionado pelo usuário.

    elemento.textContent = `+R$${
      informacoes.preco_adicionais[informacoes.escolhas.tipoCobranca][index]
    }/${informacoes.escolhaPlano[informacoes.escolhas.tipoCobranca]}`;
  });

  checkBoxes.forEach((elemento, index) => {
    elemento.addEventListener('click', () => {
      informacoes.escolhas.adicionais[index] = elemento.checked;
    });
  });
}
// --------------------------------------------------- ScriptPaginaAdicionais()
function scriptPaginaConfirmacao() {
  containerAdicionais.style.display = 'none';
  containerConfirmacao.style.display = 'block';
}

// Executando script, começo !
checarEtapa();
