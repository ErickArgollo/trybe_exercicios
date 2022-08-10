// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);


const testingScope = (escopo) => {
    escopo === true ? console.log('Não devo ser utilizada fora do meu escopo(if), ótimo, fui utilizada no escopo!') : console.log('Não devo ser utilizada fora do meu escopo')
}

testingScope(false)