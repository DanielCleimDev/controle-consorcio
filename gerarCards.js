import { getLocalStorage } from "./getLocalStorage.js";
import { verificaChave } from "./verificaChave.js";

export function gerarCards(){
    alert("iniciou");
    app = document.getElementById("app");
    app.textContent = "";
    for (let index = 1; index <= 5; index++) {
        alert("entrou no for")
        let div = document.createElement("div");
        div.id = `card${index}`;
        alert(index);
        if(verificaChave(index)){
            alert("entrou no Verifica chave")
            div.className = `elemento ${getLocalStorage(index)}`;
        }else{
            alert("entrou no else do verifica chave")
            div.className = `elemento`;
        }

        alert(String(index).padStart(4,'0'))

        div.textContent = String(index).padStart(4,'0');
        app.appendChild(div)
    }
    alert("depois do for")
}