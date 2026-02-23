import { gerarCards } from "./gerarCards.js";
import { salvaDados } from "./salvaDados.js";
import { iniciado } from "./iniciado.js";

const btnSalvar = document.getElementById('btnSalvar');

btnSalvar.addEventListener('click', () => salvaDados());

gerarCards();
iniciado();