import { getLocalStorage } from "./getLocalStorage.js";
import { verificaChave } from "./verificaChave.js";

export function gerarCards(){
    alert("iniciou");
    app = document.getElementById("app");
    app.textContent = "";
    for (let index = 1; index <= 5000; index++) {
        let div = document.createElement("div");
        div.id = `card${index}`;

        if(verificaChave(index)){
            div.className = `elemento ${getLocalStorage(index)}`;
        }else{
            div.className = `elemento`;
        }

        div.textContent = String(index).padStart(4,'0');
        app.appendChild(div)
    }
}