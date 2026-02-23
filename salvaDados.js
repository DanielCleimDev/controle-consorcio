import { gerarCards } from "./gerarCards.js";
import { setLocalStorage } from "./setLocalStorage.js";

export function salvaDados(){
    const numeroInformado = document.getElementById('salvaNum');
    const radioSelecionado = document.querySelector('input[name="tipoStatus"]:checked');

    //validação
    if (numeroInformado.value == "") {
        alert("Por favor, informe o número.");
        return;
    }

    if (!radioSelecionado) {
        alert("Por favor, selecione uma opção (Sorteado, Cancelado, etc).");
        return;
    }

    if(radioSelecionado.value == "limpar"){
        localStorage.removeItem(numeroInformado.value);
        alert("Número apagado");
    }else{
        setLocalStorage(numeroInformado.value, radioSelecionado.value);
        alert("Dados capturados e salvos!");
    }
    
    numeroInformado.value = "";
    radioSelecionado.checked = false;
    gerarCards();
}