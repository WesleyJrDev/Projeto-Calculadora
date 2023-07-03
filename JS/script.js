//   Seleção dos Elementos 

  const previusOperationText = document.querySelector("#previous-operations");

  const currrentOperationText = document.querySelector("#current-operation");

  const buttons = document.querySelectorAll("#buttons-container button");

// Lógica de aplicação da Calculadora

  class Calculator{
    constructor(previusOperationText, currrentOperationText){
      this.previusOperationText = previusOperationText;
      this.currrentOperationText = currrentOperationText;
      this.currrentOperation ="";
    }

     // adiciona digit a tela da calculadora
     addDigit(digit) {
      this.currrentOperation = digit;
      this.updateScreen()
     }

    //  Mudar valores da tela da calculadora
    updateScreen() {
      this.currrentOperationText.innerText += this.currrentOperation;
    }
  };

  const calc = new Calculator(previusOperationText, currrentOperationText);

// Eventos Utilizados

   buttons.forEach((btn) => {
    btn.addEventListener("click",(e) => {
        const value = e.target.innerText;
        
        if (+value >= 0 || value ==="."){
          calc.addDigit(value);
        } else {
          console.log("Op:" + value);
        }
    });
   });