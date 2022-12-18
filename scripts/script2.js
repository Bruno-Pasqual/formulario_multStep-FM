function inicioPagina2() {
  //! Fazendo seleção dos elementos necessários ----------------------------------

  //Selecionando botão de trocar o plano
  const switchPlan = document.querySelector('#switch_container');

  //Selecionando as duas tags, mês e ano.
  const tagAno = document.getElementById('tag_ano');
  const tagMes = document.getElementById('tag_mes');

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
    alteraPreco();
  });

  cardsPlanos.forEach((plan_card) => {
    plan_card.addEventListener('click', () => {
      removeAtivoPlano();
      plan_card.classList.add('ativo');
    });
  });
}

inicioPagina2();
