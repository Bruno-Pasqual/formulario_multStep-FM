//!Importando arquivos
// import { inicioPagina2 } from './script2';

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

//! Realizando teste ---------------------------------------------
const containerPai = document.getElementById('container_pai');

//! Variáveis ------------------------------------------------------------------
let condition1, condition2, condition3;
let passoAtivo = 0;
let mes = false;
let ano = true;

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
  trocaAtivo();
});

function trocaAtivo() {
  passoAtivo++;
  passosContainer.forEach((passo) => {
    passo.classList.remove('ativo');
  });
  passosContainer[passoAtivo].classList.add('ativo');

  //! O que deve ser feito se estiver no passo 2 <<<<<<<<<<<<<<<<

  if (passosContainer[1].classList.contains('ativo')) {
    containerPai.innerHTML = `<div class="form_container_segundo">
    <h2 id="form_title">Selecione seu plano</h2>
    <p id="form_details">Você pode contratar por mês ou por ano.</p>
    <!-- Primeiro card -->
    <div class="plan_card">
      <img
        src="./assets/images/icon-arcade.svg"
        alt="ícone do plano"
        class="plan_icon"
      />
      <div class="detalhes_plano">
        <h3 class="titulo_plano">Arcade</h3>
        <p class="price_plan">R$ 90/ano</p>
      </div>
    </div>
    <!-- Primeiro card -->

    <!-- Segundo card -->
    <div class="plan_card">
      <img
        src="./assets/images/icon-advanced.svg"
        alt="ícone do plano"
        class="plan_icon"
      />
      <div class="detalhes_plano">
        <h3 class="titulo_plano">Avançado</h3>
        <p class="price_plan">R$ 120/ano</p>
      </div>
    </div>
    <!-- Segundo card -->

    <!-- Terceiro card -->
    <div class="plan_card">
      <img
        src="./assets/images/icon-pro.svg"
        alt="ícone do plano"
        class="plan_icon"
      />
      <div class="detalhes_plano">
        <h3 class="titulo_plano">Pro</h3>
        <p class="price_plan">R$ 150/ano</p>
      </div>
    </div>
    <!-- Terceiro card -->
    <div class="switch_plan_container">
      <p id="tag_mes">Mês</p>
      <div id="switch_container" class="animate"></div>
      <p id="tag_ano" class="ativo">Ano</p>
    </div>

    <!-- <footer></footer> -->
  </div>
`;
    function inicioPagina2() {
      //Selecionando as duas tags, mês e ano.
      const tagAno = document.getElementById('tag_ano');
      const tagMes = document.getElementById('tag_mes');

      //! Fazendo seleção dos elementos necessários ----------------------------------

      //Selecionando botão de trocar o plano
      const switchPlan = document.querySelector('#switch_container');

      //Selecionando todos os p de preços
      const pricesTags = document.querySelectorAll('.price_plan');

      //Selecionando todos os cards de planos
      const cardsPlanos = document.querySelectorAll('.plan_card');

      //! Variáveis ------------------------------------------------------------------

      const dadosPrecos = [
        ['R$ 45/mês', 'R$ 60/mês', 'R$ 75/mês'],
        ['R$ 90/ano', 'R$ 120/ano', 'R$ 150/ano'],
      ];

      //! Funções --------------------------------------------------------------------
      proximoPasso.classList.remove('animate');
      function alteraPreco() {
        //Função que irá checar qual tag está com a classe ativa, e irá alterar o container dos preços de acordo
        if (tagMes.classList.contains('ativo')) {
          pricesTags.forEach((price_plan, index) => {
            price_plan.textContent = `${dadosPrecos[0][index]}`;
          });
        } else {
          console.log('classe ano ativa');
          pricesTags.forEach((price_plan, index) => {
            price_plan.textContent = `${dadosPrecos[1][index]}`;
          });
        }
        /* pricesTags.forEach((price_plan, index) => {
    console.log(index);
  }); */
      }

      function removeAtivoPlano() {
        cardsPlanos.forEach((plan_card) => {
          plan_card.classList.remove('ativo');
        });
      }

      //! Event handlers -------------------------------------------------------------

      switchPlan.addEventListener('click', () => {
        //Caso o switch button seja clicado, irá realizar a animação de deslize de um lado ou para o outro e irá executar a função altera Preço.
        switchPlan.classList.toggle('animate');
        switchPlan.classList.toggle('animate2');
        tagAno.classList.toggle('ativo');
        tagMes.classList.toggle('ativo');
        ano = tagAno.classList.contains('ativo');
        mes = tagMes.classList.contains('ativo');
        console.log(ano, mes);

        alteraPreco();
      });

      cardsPlanos.forEach((plan_card) => {
        plan_card.addEventListener('click', () => {
          removeAtivoPlano();
          plan_card.classList.add('ativo');
          proximoPasso.classList.add('animate');
        });
      });
    }

    inicioPagina2();
  } else if (passosContainer[2].classList.contains('ativo')) {
    containerPai.innerHTML = `<div class="container_adicionais">
    <h2 class="form_title">Selecione complementos</h2>
    <p class="form_details">
      Complementos melhoram a sua experiência de jogo
    </p>
    <form action="" onsubmit="return false">
      <!-- Box de input 1 -->
      <div class="servico_online_container">
        <input
          type="checkbox"
          name="online_service"
          class="check_box_input"
        />
        <div class="textContainer">
          <label for="Serviço online">Servidores online</label>
          <p>Acesso a jogos multiplayer</p>
        </div>
        <p class="preco_adicional">+R$ ? mês</p>
      </div>
      <!-- Box de input 2 -->
      <div class="servico_online_container">
        <input
          type="checkbox"
          name="online_service"
          class="check_box_input"
        />
        <div class="textContainer">
          <label for="Serviço online">Armazenamento maior</label>
          <p>+ 1TB armazenamento</p>
        </div>
        <p class="preco_adicional">+R$? mês</p>
      </div>
      <!-- Box de input 3 -->
      <div class="servico_online_container">
        <input
          type="checkbox"
          name="online_service"
          class="check_box_input"
        />
        <div class="textContainer">
          <label for="Serviço online">Perfil customizável</label>
          <p>Tema no seu perfil</p>
        </div>
        <p class="preco_adicional">+R$ ? mês</p>
      </div>
    </form>
  </div>`;

    //! Definindo função inicioPagina3 -----------------

    function inicioPagina3() {
      //! Arrays com os valores de acordo com cada plano ---------------------

      let adicionalMes = [2, 5, 5];
      let adicionalAno = [50, 100, 100];
      let valorAdicionais = 0;

      //!Selecionando elementos -----------------------------------------------

      let pPrecos = document.querySelectorAll('.preco_adicional');
      let checkBoxesInput = document.querySelectorAll('.check_box_input');

      //Utilizando o plano selecionado (ano/mes) para definir o valor dos adicionais

      if (mes === false) {
        pPrecos.forEach((divPreco, index) => {
          divPreco.textContent = `+R$ ${adicionalAno[index]}/ano`;
        });
      } else {
        pPrecos.forEach((divPreco, index) => {
          divPreco.textContent = `+R$ ${adicionalMes[index]}/mês`;
        });
      }

      //! Funções -------------------------------------------------------------

      //Utilizando o event listener 'change' para acompanhar se os checkBoxes foram marcado ou desmarcados, e utilizando a verificação se mês ou ano foi selecionado para utilizar o array correspondente para alterar os valores.

      checkBoxesInput.forEach((box, index) => {
        box.addEventListener('change', (event) => {
          if (event.currentTarget.checked) {
            if (mes === false) {
              valorAdicionais += adicionalAno[index];
              console.log(valorAdicionais);
            } else {
              valorAdicionais += adicionalMes[index];
              console.log(valorAdicionais);
            }
          } else {
            if (mes === false) {
              valorAdicionais -= adicionalAno[index];
              console.log(valorAdicionais);
            } else {
              valorAdicionais -= adicionalMes[index];
              console.log(valorAdicionais);
            }
          }
        });
      });
    }
    inicioPagina3();
  }
}
