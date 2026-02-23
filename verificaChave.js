export function verificaChave(chave){
    return localStorage.getItem(chave) !== null
}