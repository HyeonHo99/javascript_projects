const askContainer = document.querySelector('.js-ask');
const askBox = askContainer.querySelector('input');
const nameContainer = document.querySelector('.js-name');

function handleSubmit(event){
  event.preventDefault();
  var name = askBox.value;
  localStorage.setItem('currentUser',name);
  showName();
}

function getName(){
  askContainer.classList.remove('hidden');
  askContainer.classList.add('showing');
  askContainer.addEventListener('submit',handleSubmit);
}

function showName(){
  var currentUser = localStorage.getItem('currentUser');
  if(currentUser === null){
    getName();
  }
  else{
    askBox.classList.add('hidden');
    nameContainer.classList.add('showing');
    nameContainer.innerText=`Hello, ${currentUser}`;
  }
}

(function init(){
  showName();
})();
