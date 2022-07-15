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
   */ 
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
