nome1 = "João"
nome2 = "Silva"

nome_completo = nome1 + "" + nome2
print("nome completo:", nome_completo)

function calculadoura(num1,num2,operacao){
    switch (operacao){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1/num2;
        default:
            return "Operação Inválida!";
    }
}

//exemplo de uso// console.log (calculadoura(10,5,'+'));//15