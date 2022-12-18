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
