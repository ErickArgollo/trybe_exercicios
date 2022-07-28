function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //EXERCICIO 1

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let arrayFeriados = [24, 25, 31]


  let ul = document.querySelector('#days');
  document.body.appendChild(ul)
  
  for(let i = 2; i < decemberDaysList.length; i += 1){
    let li = document.createElement('li');
    li.className = 'day'
    li.innerHTML = decemberDaysList[i];
    ul.appendChild(li)
    if(decemberDaysList[i] === 24 || decemberDaysList[i] === 31 || decemberDaysList[i] === 25){
      li.classList.add('holiday')
    }
    if(decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18 || decemberDaysList[i] === 25){
      li.classList.add('friday')
    }

  }
  //console.log(ul)

  //EXERCICIO 2 Criando um button dinamicamente 
  /* let buttonsContainer = document.querySelector('.buttons-container');
  function createButton(string){
    let button = document.createElement('button');
    button.id = 'btn-holiday'
    button.setAttribute('type', 'button')
     //button.appendChild(document.createTextNode(string)) Forma 1 de adicionar o nome
    button.innerHTML = string //Forma 2 de adicionar o nome (Bem melhor)
    buttonsContainer.appendChild(button)
   
  }
  createButton('Feriado') */
  
  //EXERCICIO 2 FORMA 2;
  let buttonsContainer = document.querySelector('.buttons-container');
  function createButton(string){
    buttonsContainer.innerHTML += `<button id='btn-holiday' type='button'>${string}</button>`
  }

createButton('Feriado')
//console.log(buttonsContainer)

  //Exercicio 3
  let button = document.getElementById('btn-holiday');

  button.addEventListener('click', changeColor);

  let holidays = document.getElementsByClassName('holiday');
  //console.log(holidays)
  function changeColor(){
    for(let i = 0; i < holidays.length; i += 1){
      let holiday = document.getElementsByClassName('holiday')[i];
      if(holiday.style.color === 'red'){
      holiday.style.color = '#777';
      }
      else{
        holiday.style.color = 'red'
      }
   }
  }
  //EXERCICIO 4
  
  function createFridayButton(string){
    let button = document.createElement('button');
    button.id = 'btn-friday'
    button.setAttribute('type', 'button');
    button.innerHTML = string;
    buttonsContainer.appendChild(button)  
  }
  createFridayButton('Sexta-Feira')
  
  //EXERCICIO 5

  let fridayButton = document.getElementById('btn-friday');
  console.log(fridayButton)
  let fridayList = document.getElementsByClassName('friday');
  console.log(fridayList);
  
  
  fridayButton.addEventListener('click', mudaNome); //PRECISO LEMBRAR QUE NÃO É NECESSÁRIO CHAMAR A FUNÇÃO JÁ QUE ELA VAI ACONTECER CASO ALGUM EVENTO ACONTEÇA.

  function mudaNome(){ 
    let arraySexta = [4, 11, 18, 25] //Esse array indica os dias que são sexta-feira, utilizo para voltar no estado original ao clicar no botão novamente
    for(let i = 0; i < fridayList.length; i += 1){
      let friday = document.getElementsByClassName('friday')[i]
      if(friday.innerHTML === 'Sexta-Feira'){
          friday.innerHTML = arraySexta[i]
      }
      else{
        friday.innerHTML = 'Sexta-Feira'
      }
    }
  }

  //EXERCICIO 6
  let dias = document.getElementsByClassName('day');
  
  function zoomIn(event){
    event.target.style.fontSize = '50px';
  }
  function zoomOut(event){
    event.target.style.fontSize = '20px'
  }
  
  for(let i = 0; i < dias.length; i += 1){
    let dia = document.getElementsByClassName('day')[i];
    dia.addEventListener('mouseover', zoomIn);
    dia.addEventListener('mouseout', zoomOut)
  }


  