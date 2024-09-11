function verificaPalidromo(str){
    let reversed = str.split("").reverse().join("");
    return str ===reversed;
}