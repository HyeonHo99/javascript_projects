const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

var toDos = [];

function handleDelete(event) {
  // console.log(event.target.parentNode);
  // console.dir(event.target);
  var btn = event.target;
  var li = btn.parentNode;
  var ul = li.parentNode;
  var id = li.id;

  ul.removeChild(li);
  // toDos.splice(id,1);
  // localStorage.setItem('toDos',JSON.stringify(toDos));
  var cleanedToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(id);
  });
  toDos = cleanedToDos;
  localStorage.setItem('toDos',JSON.stringify(toDos));
}

function saveToLS() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(value) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const newId = toDos.length;

  span.innerText = value + " ";
  delBtn.innerText ="Delete";
  delBtn.addEventListener("click", handleDelete);
  li.id = newId;

  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);

  const toDoObj = {
    text: value,
    id: newId
  };
  toDos.push(toDoObj);
  saveToLS(toDos);
}

function handleSubmit(event) {
  event.preventDefault();
  var value = toDoInput.value;
  toDoInput.value = "";
  paintToDo(value);
}

function loadToDos() {
  var loadedToDos = localStorage.getItem("toDos");
  if (loadedToDos !== null) {
    const parsed = JSON.parse(loadedToDos);
    // for(var i=0;i<parsed.length;i++){
    //   paintToDo(parsed[i].text);
    // }
    parsed.forEach(function(e){
      paintToDo(e.text);
    })
  }
}

(function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
})();
