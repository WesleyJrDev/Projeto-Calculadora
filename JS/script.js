//   Seleção dos Elementos 

  const previusOperationText = document.querySelector("#previous-operations");

  const currrentOperationText = document.querySelector("#current-operation");

  const buttons = document.querySelectorAll("#buttons-container button");

// Lógica de aplicação da Calculadora

  class Calculator{

  }

// Eventos Utilizados

   buttons.forEach((btn)=> {
    btn.addEventListener("click",(e) => {
        const value = e.target.innerText;
        console.log(value);
    });
   });