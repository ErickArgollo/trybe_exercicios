const headerContainer = document.querySelector('#header-container');

headerContainer.style.color = 'white'
headerContainer.style.backgroundColor = 'green';

const urgente = document.querySelectorAll('.emergency-tasks div h3')

urgente[0].style.color = 'white';
urgente[1].style.color = 'white';
urgente[0].style.backgroundColor = 'purple';
urgente[1].style.backgroundColor = 'purple';

const urgenteBg = document.querySelectorAll('.emergency-tasks div')

urgenteBg[0].style.backgroundColor = 'pink';
urgenteBg[1].style.backgroundColor = 'pink'

const naoUrgente = document.querySelectorAll('.no-emergency-tasks div h3');

naoUrgente[0].style.color = 'white';
naoUrgente[1].style.color = 'white';
naoUrgente[0].style.backgroundColor = 'black';
naoUrgente[1].style.backgroundColor = 'black';

const naoUrgenteBg = document.querySelectorAll('.no-emergency-tasks div');

naoUrgenteBg[0].style.backgroundColor = 'yellow';
naoUrgenteBg[1].style.backgroundColor = 'yellow';