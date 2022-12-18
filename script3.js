//! Arrays com os valores de acordo com cada plano ---------------------

let adicionalMes = [2, 5, 5];
let adicionalAno = [50, 100, 100];
let valorAdicionais = 0;

//!Selecionando elementos -----------------------------------------------

let pPrecos = document.querySelectorAll('.preco_adicional');
let caixasAdicionais = document.querySelectorAll('.precoAdicionalComplementos');

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

function somandoSelecionados() {
  //Estado de cada checkBox ---
  let arrChecks = [check1, check2, check3];
  [check1, check2, check3] = [false, false, false];

  //

  caixasAdicionais.forEach((checkBox, index) => {
    if (checkBox.check === true && arrChecks[index] === false) {
      if (ano) {
        valorAdicionais = +adicionalAno[index];
      } else {
        valorAdicionais = +adicionalMes[index];
      }
    }
  });
}

//Testando
