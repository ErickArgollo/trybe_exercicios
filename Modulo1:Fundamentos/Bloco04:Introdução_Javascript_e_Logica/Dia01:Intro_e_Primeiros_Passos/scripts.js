//Exércicios
//2
/* 
function retornaMaiorde2(a, b) {
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(retornaMaiorde2(10, 20))

//3
    function retornaMaiorde3(a, b, c) {
        if (a > b && a > c) {
            return a;
        }
        else if (b > c) {
            return b;
        }
        else {
            return c;
        }
    }

    console.log(retornaMaiorde3(20, 10, 5))

 //4
 
    function retornaValor(a) {
        if(a > 0) {
            console.log("positivo")
        }
        else if (a < 0) {
            console.log("negativo")
        }
        else {
            console.log("zero")
        }
    }

    retornaValor(-20)

//5

    function angulosInternos(a, b, c) {
        if((a + b + c) < 180){
            console.log("Algum dos angulos é inválido")
        }

        else if ((a + b + c) == 180) {
            return true;
        }
        
    }

    console.log(angulosInternos(20, 90, 60))
 
//6  
    function movimentoXadrez(a) {
        
        switch (a.toLowerCase()) {
            case 'bispo':
                console.log("diagonal");
                break;
            case 'peão':
                console.log('frente,lateral')    
                break;
            default:
                console.log('insira uma peça válida')    
        }
    }

    movimentoXadrez('peãO')

   
//7
    function notaDada(nota) {
        if(nota > 100 || nota < 0){
            console.log("insira uma nota válida")
        }
        else if(nota >= 90) {
            console.log('A')
        }
        else {
            console.log('Estude mais!')
        }
    }
 
//8
    function parOuFalse(n1, n2, n3) {
        if(n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0){
            console.log(true)
        }
        else {
            console.log(false)
        }
    }
    parOuFalse(2, 4, 6)

//9

    function imparOrFalse(n1, n2, n3) {
        if(n1%2!=0 || n2%2!=0 || n3%2!=0){
            console.log(true);
        }
        else {
            console.log(false)
        }
    }

    imparOrFalse(10, 2, 6)
   
//10   
 function calculaLucro(ValorProduto, ValorVenda, qtdProdutosVendidos) {
    let custoProduto = ValorProduto + (20/100 * ValorProduto);
    let lucro = (ValorVenda - custoProduto) * qtdProdutosVendidos
    if (ValorProduto < 0 || ValorVenda < 0) {
        console.log("Insira valores reais")
    }
    else {
        console.log(lucro)
    }
 }
    calculaLucro(2, 10, 10);
*/
//11
function salarioLiquido(sBruto) {
    let salarioBase;
    let impostoRenda;
    if(sBruto <= 1556.94){
        salarioBase = sBruto - (8/100 * sBruto)
    }
    else if(sBruto > 1556.94 && sBruto <= 2594.92) {
        salarioBase = sBruto - (9/100 * sBruto)
    }
    else if(sBruto > 2594.92 && sBruto <= 5189.82) {
        salarioBase = sBruto - (11/100 * sBruto)
    }
    else {
        salarioBase = sBruto - 578.88
    }

    if(salarioBase < 1903.98) {
        impostoRenda = 0;
    }
    
    else if(salarioBase <= 2826.65) {
        impostoRenda = (7.5/100 * salarioBase) - 142.80
    }
    else if(salarioBase <= 3751.05) {
        impostoRenda = (15/100 * salarioBase) - 354.80
    }
    else if(salarioBase <= 4664.68) {
        impostoRenda = (22.5/100 * salarioBase) - 636.13
    }
    else {
        impostoRenda = (27.5/100 * salarioBase) - 869.36
    }
    
    let sLiquido = salarioBase - impostoRenda
    
    return sLiquido;
}

console.log(salarioLiquido(1900))