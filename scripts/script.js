//! Selecionando elementos no DOM ---------------------------------------------

const inputNome = document.getElementById('input_nome');
const inputEmail = document.getElementById('input_email');
const inputCelular = document.getElementById('input_numero');
const mensagensErro = document.querySelectorAll('.mensagem_erro');
const botaoProximo = document.querySelector('.botao_proximo');
const botaoVoltar = document.querySelector('.botao_voltar');
const circulosEtapas = document.querySelectorAll('.passo');
const footerContainer = document.querySelector('footer');
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
const valoresDosAdicionais = document.querySelectorAll(
  '.valor_adicional_escolhido'
);
const tituloPlanoEscolhido = document.getElementById('titulo_plano_escolhido');
const valorPlanoConfirmacao = document.getElementById(
  'valor_plano_confirmacao'
);
const linhasDosAdicionais = document.querySelectorAll('.adicional_escolhido');
const valorTotal = document.getElementById('valor_total');

//Seleção elementos da pagina de agradecimento
const paginaObrigado = document.getElementById('pagina_obrigado');

//!Variáveis de controle ------------------------------------------------------
let etapaAtiva = 0;
let informacoes = {
  arrayValores: [],
  opcoesPlanos: ['Arcade', 'Avançado', 'Pro'],
  opcoesConta: ['Mensal', 'Anual'],
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
  } else {
    botaoProximo.classList.add('desabilitado');
    botaoProximo.disabled = true;
    botaoProximo.classList.remove('animate');
  }
}

function checarEtapa() {
  //todo Função que irá fazer a verificação em qual página o usuário se encontra, e executara o script correspondente a cada página.

  if (circulosEtapas[0].classList.contains('ativo')) {
    botaoVoltar.style.display = 'none';
    ContainerForm.style.display = 'block';
    footerContainer.style.paddingLeft = '370px';
  } else if (circulosEtapas[1].classList.contains('ativo')) {
    ContainerForm.style.display = 'none';
    containerPlano.style.display = 'block';
    footerContainer.style.paddingLeft = '0';
    botaoVoltar.style.display = 'block';
    scriptPaginaPlanos();
  } else if (circulosEtapas[2].classList.contains('ativo')) {
    containerPlano.style.display = 'none';
    containerAdicionais.style.display = 'block';
    scriptPaginaAdicionais();
  } else if (circulosEtapas[3].classList.contains('ativo')) {
    containerAdicionais.style.display = 'none';
    containerConfirmacao.style.display = 'block';
    scriptPaginaConfirmacao();
  }
}

//! Event handlers ------------------------------------------------------------

//! ----------- botão próximo

botaoProximo.addEventListener('click', () => {
  if (circulosEtapas[3].classList.contains('ativo')) {
    containerConfirmacao.style.display = 'none';
    paginaObrigado.style.display = 'block';
    footerContainer.style.display = 'none';
  } else
    circulosEtapas.forEach((e) => {
      e.classList.remove('ativo');
    });

  etapaAtiva++;
  circulosEtapas[etapaAtiva].classList.add('ativo');

  checarEtapa();

  //-----
});

//! --------------- Botão voltar
botaoVoltar.addEventListener('click', () => {
  console.log('fui clicado');
  containerPlano.style.display = 'none';
  containerAdicionais.style.display = 'none';
  containerConfirmacao.style.display = 'none';
  circulosEtapas.forEach((e) => {
    e.classList.remove('ativo');
  });
  etapaAtiva--;
  circulosEtapas[etapaAtiva].classList.add('ativo');
  checarEtapa();
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
}
// ---------------------------------------------------------ScriptPaginaPlanos()

// --------------------------------------------------- ScriptPaginaAdicionais()
function scriptPaginaAdicionais() {
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

  //todo ----------------
  //Mostrando o plano correspondente a escolha do usuário.
  tituloPlanoEscolhido.textContent = `${
    informacoes.opcoesPlanos[informacoes.escolhas.plano]
  } (${informacoes.opcoesConta[informacoes.escolhas.tipoCobranca]})`;

  //Alterando o valor do plano escolhido e o nome
  valorPlanoConfirmacao.textContent = `R$${
    informacoes.preco_planos[informacoes.escolhas.tipoCobranca][
      informacoes.escolhas.plano
    ]
  }/${informacoes.escolhaPlano[informacoes.escolhas.tipoCobranca]}`;
  informacoes.arrayValores[0] =
    informacoes.preco_planos[informacoes.escolhas.tipoCobranca][
      informacoes.escolhas.plano
    ];

  //Mostrando ou esconde as divs dos adicionais
  linhasDosAdicionais.forEach((elemento, index) => {
    if (!informacoes.escolhas.adicionais[index]) {
      elemento.style.display = 'none';
      informacoes.arrayValores[index + 1] = 0;
    } else {
      //Altera conteúdo da div de acordo com as escolhas do usuário
      valoresDosAdicionais[index].textContent = `+R$${
        informacoes.preco_adicionais[informacoes.escolhas.tipoCobranca][index]
      }/${informacoes.escolhaPlano[informacoes.escolhas.tipoCobranca]}`;

      //adicionando valores dos adicionais ativos no array de valores
      informacoes.arrayValores[index + 1] =
        informacoes.preco_adicionais[informacoes.escolhas.tipoCobranca][index];
    }
  });

  //Trocando a mensagem do total
  let sum = informacoes.arrayValores.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual;
  });
  console.log(sum);
  valorTotal.textContent = `${sum}/${
    informacoes.escolhaPlano[informacoes.escolhas.tipoCobranca]
  }`;
}

// Executando script, começo !
checarEtapa();
