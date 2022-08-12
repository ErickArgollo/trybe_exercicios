// Para praticar

const teste = {
    nome: 'Erick',
    Sobrenome: 'Argollo',
    idade: 22,
}

const newKey = (objeto, chave, valor) => objeto[chave] = valor;

newKey(teste, ['teste'], 'teste');

//
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const list = (student) => {
    let phrase = ''
    for (const key in student) {
        phrase += `${key}, Nível: ${student[key]}
        `
    }
    return phrase
}

//console.log(list(student1))

console.log(Object.values(student1))