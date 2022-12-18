//! Arrays com os valores de acordo com cada plano ---------------------

let adicionalMes = [2, 5, 5];
let adicionalAno = [50, 100, 100];
let valorAdicionais = 0;

[check1, check2, check3] = [false, false, false];
let arrChecks = [check1, check2, check3];
//!Selecionando elementos -----------------------------------------------

let pPrecos = document.querySelectorAll('.preco_adicional');
let caixasCheck = document.querySelectorAll('.input_check');
let containerComplementos = document.querySelectorAll(
  '.container_complementos'
);

console.log(caixasCheck);
caixasCheck.forEach((input_check, index) => {
  input_check.addEventListener('change', () => {
    console.log(`Box ${index + 1} mudou`);
    if (input_check.check) {
      console.log('ai sim');
    } else {
      console.log('ai não');
    }
  });
});

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
  console.log('entrei na função');
  //Estado de cada checkBox ---
  caixasCheck.forEach((checkBox, index) => {
    console.log(
      `Avaliando o check ${index + 1}\ncheckBox.check: ${
        checkBox.check
      }\narrChecks: ${arrChecks[index] === false}`
    );

    if (checkBox.check && arrChecks[index] === false) {
      if (ano) {
        valorAdicionais += adicionalAno[index];
        arrChecks[index] = true;
        console.log(`O valor somado está em: ${valorAdicionais}`);
      } else {
        valorAdicionais += adicionalMes[index];
        arrChecks[index] = true;
        console.log(`O valor somado está em: ${valorAdicionais}`);
      }
    } else if (!checkBox.check && arrChecks[index]) {
      if (ano) {
        valorAdicionais -= adicionalAno[index];
        arrChecks[index] = false;
        console.log(`O valor somado está em: ${valorAdicionais}`);
      } else {
        valorAdicionais -= adicionalMes[index];
        arrChecks[index] = false;
        console.log(`O valor somado está em: ${valorAdicionais}`);
      }
    }
  });
}

//Testando

//! Event handlers -------------------------------------------------
containerComplementos.forEach((container, index) => {
  container.addEventListener('click', () => {
    // somandoSelecionados();
  });
});
