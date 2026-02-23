import { setLocalStorage } from "./setLocalStorage.js";

export function salvaDados(){
    const numeroInformado = document.getElementById('salvaNum');
    const radioSelecionado = document.querySelector('input[name="tipoStatus"]:checked');

    //validação
    if (numeroInformado === "") {
        alert("Por favor, informe o número.");
        return;
    }

    if (!radioSelecionado) {
        alert("Por favor, selecione uma opção (Sorteado, Cancelado, etc).");
        return;
    }

    console.log("Número:", numeroInformado.value);
    console.log("Opção Selecionada:", radioSelecionado.value);

    
    setLocalStorage(numeroInformado.value, radioSelecionado.value);
    alert("Dados capturados e salvos!");
    numeroInformado.value = "";
    radioSelecionado.checked = false;
}