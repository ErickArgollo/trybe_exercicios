const fetch = require('node-fetch');

async function takeApi(username){
    const ENDLINE = `https://api.github.com/users/${username}`;
    const response = await fetch(ENDLINE);
    const data = await response.json();
    
    return data

}
takeApi('ErickArgollo');

module.exports = takeApi;