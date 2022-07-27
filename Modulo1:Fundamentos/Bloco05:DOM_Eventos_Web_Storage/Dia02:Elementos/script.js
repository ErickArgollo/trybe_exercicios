let paizao = document.getElementById('paiDoPai');



let primeiroFilho = document.getElementById('primeiroFilho')

/* const pai = document.getElementById('pai');

    for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
      const currentChildren = pai.childNodes[index];
      if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
      }
    } */


let pai = document.getElementById('pai')

for(let i = pai.childNodes.length -1; i >= 0; i -= 1){
    let child = pai.childNodes[i];
    if(child.id != 'elementoOndeVoceEsta'){
        child.remove()
    }
}

let segundoEUltimo = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimo.remove();