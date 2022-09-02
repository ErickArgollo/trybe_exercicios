// const fetch = require('node-fetch');

async function testeAPI(){
    try{
        const jokeContainer = document.getElementById('joke')
    const ENDLINE = 'https://icanhazdadjoke.com/'
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      };
     const accept = await fetch(ENDLINE, myObject);
     const json = await accept.json();
     const { joke } = json
     jokeContainer.innerHTML = joke
     return joke
    }
    catch(error){
    }
}

window.onload = () => {
    testeAPI()
    
}