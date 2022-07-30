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
  //Exercicio 1
  const weekDays = document.querySelector('.week-days');
  const buttonsContainer = document.querySelector('.buttons-container');
  const liDays = document.getElementsByClassName('day');
  const myTasks = document.querySelector('.my-tasks')
  const buttonCompromisse = document.getElementById('btn-add');
  const inputCompromisse = document.getElementById('task-input');
  const taskList = document.querySelector('.task-list')
  
  

  let decemberDaysList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


  function createDays(){
    for(let i = 0; i < decemberDaysList.length; i+=1){
    const li = document.createElement('li');
    li.className = 'day'
    li.innerHTML = decemberDaysList[i]
    weekDays.appendChild(li)
    }
  }
  createDays()

  function addHolidays(){
    // let liDays = document.getElementsByClassName('day');
    //let arr = [] poderia criar um array com os dias e usar um segundo for para iterar
    for(let i = 0; i < decemberDaysList.length; i += 1){
      if (liDays[i].innerHTML == 24 || liDays[i].innerHTML == 25 || liDays[i].innerHTML == 31){
       liDays[i].classList.add('holiday')
      }
    }
  }
  addHolidays()

  function addFridays(){
    let liDays = document.getElementsByClassName('day');
    
    for(let i = 0; i < decemberDaysList.length; i += 1){
      if(liDays[i].innerHTML == 4 || liDays[i].innerHTML == 11 || liDays[i].innerHTML == 18 || liDays[i].innerHTML == 25) {
        liDays[i].classList.add('friday')
      }
    }
  }
addFridays()

//Exercicio 2
function addButton(id, text){
const button = document.createElement('button');
button.id = id;
button.innerHTML = text
buttonsContainer.appendChild(button)

}

addButton('btn-holiday','Feriados');
const buttonFeriado = document.querySelector('#btn-holiday');
 
//Exercicio 3


buttonFeriado.addEventListener('click', function(){
  
  const holidays = document.getElementsByClassName('holiday');
  
  for(let i = 0; i < holidays.length; i += 1){
    let holiday = document.getElementsByClassName('holiday')
    if(holiday[i].style.color === 'blue'){
      holiday[i].style.color = '#666'
    }
    else{
      holiday[i].style.color = 'blue'
    }
  }
});

//Exercicio 4
addButton('btn-friday','Sexta-feira');

//Exercicio 5

const fridayDay = document.querySelectorAll('.friday');
const buttonFriday = document.getElementById('btn-friday');

buttonFriday.addEventListener('click', function(){
  let arrayFeriados = [4, 11, 18, 25]
  for(let i = 0; i < fridayDay.length; i += 1){
   
    if(fridayDay[i].innerHTML == 'Sextou'){
      fridayDay[i].innerHTML = arrayFeriados[i]
    }
    else {
      fridayDay[i].innerHTML = 'Sextou'
    }
  }
});

//Exercicio 6
/* function zoomIn(event){
  event.target.style.fontSize = '30px';
}

function zoomOut(event){
  event.target.style.fontSize = '25px';
}
 */
function implementaZoom(elemento, tamanho){
  for(let i = 0; i < tamanho.length; i += 1){
    elemento[i].addEventListener('mouseover', function(event){
      event.target.style.fontSize = '30px'
    })
    elemento[i].addEventListener('mouseout', function(event){
      event.target.style.fontSize = '20px'
    })

  }
}
implementaZoom(liDays, decemberDaysList);

//Exercicio 7 incrementado

function tarefaPersonalizada(tag, tarefa){
  tag = document.createElement(tag);
  tag.innerHTML = tarefa;
  myTasks.appendChild(tag);
}
tarefaPersonalizada('span', 'Estudar')


//Exercicio 8
function legenda(cor){
  let div = document.createElement('div');
  div.style.backgroundColor = cor
  div.className = 'task'
  myTasks.appendChild(div)
}

legenda('blue')
legenda('red')
legenda('yellow')
legenda('pink')
legenda('orange')

//Exercicio 9
let tasks = document.querySelectorAll('.task');

  function addEventListenerClick(){
  for(let i = 0; i < tasks.length; i += 1){
    tasks[i].addEventListener('click', adicionaClasse)
  }
}
addEventListenerClick()


 function adicionaClasse(event){
  for(let i = 0; i < tasks.length; i += 1){
    if(tasks[i].className == 'task selected'){
      tasks[i].className = 'task'
    }
  }
  event.target.className = 'task selected'
 } 
  
//Exercicio 10

function addEventListenerLi(){
  for(let i = 0; i < liDays.length; i += 1){
    liDays[i].addEventListener('click', addColor)
  }
}
addEventListenerLi()

function addColor(event){
  let taskSelected = document.getElementsByClassName('task selected')[0];
  console.log()
  if(event.target.style.color == taskSelected.style.backgroundColor){
    event.target.style.color = '#666'
  }
  else {
    event.target.style.color = taskSelected.style.backgroundColor
  }
  
}

//Bônus

  buttonCompromisse.addEventListener('click', addCompromisso)
  inputCompromisse.addEventListener('keypress', addCompromisso)
  
  function addCompromisso(event){
    let inputValue = inputCompromisse.value
    let tecla = event.key
    
    if(tecla == 'Enter' || event.target == buttonCompromisse){
      if(inputValue.length > 0){ 
      let li = document.createElement('li')
      taskList.appendChild(li)
      event.target = inputValue;
      li.innerHTML = inputValue
      }
      else {
        alert('adicione um compromisso')
      }
    }   
  }
  