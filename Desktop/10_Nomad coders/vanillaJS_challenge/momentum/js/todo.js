const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //                 스토리지 이름,keyValue (JSON.stringify()객체화)
}

function ClearToDOHandler(event){
    const li = event.target.parentElement;
    //클리어 버튼을 특정하는 변수 li(부모 엘리먼트임)
    li.remove();
};

function paintToDo(newTodo) {
    const list = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", ClearToDOHandler);
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
    // console.log(`I will ${newTodo}`)
}

function submitToDoHandler(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; 
    //변수이름으로 코드 작성시 오류뜸
    //input박스 초기화 (submit한 텍스트는 저장되어 있음)
    toDos.push(newTodo);
    //array에 값 넣기
    paintToDo(newTodo);
    //paintToDo함수로 값 전달
};

toDoForm.addEventListener("submit", submitToDoHandler);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JASON.parse(savedToDos);
    parsedToDos.forEach 
}