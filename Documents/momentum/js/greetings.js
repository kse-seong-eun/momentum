// 방법 2 HTML태그 변수 설정없이 바로 찾기
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// 방법 1 HTML태그를 변수 설정해 하위 태그를 불러올때 이용
//                         querySelector("#login-form");                         
const loginForm = document.getElementById("login-form"); 
const loginInput = document.querySelector("#login-form input")
const greeting = document.getElementById("greeting")

//스트링 값의 변수는 '대문자 변수이름'으로 선언
const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY="username";

function onLoginSubmit (event) {
    //console.log("click!!!");  
    //loginButton을 클릭하면 스트링이 콘솔에 카운트 됨
    //console.dir(loginInput)
    //loginInput의 dir을 살펴보면 입력된 값이 value라는 곳에 저장되어 있음! 
    //console.log(loginInput.value) 는 그 vlaue값(입력된 유저 네임)을 가져오는 것임!
    //새로고침 방지 메소드
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username) // ("저장될 이름 ", 변수값)
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello "+ username;  [표현식 1] 문자열 '연결 연산자'+
    //greeting.innerText = `Hello ${username}`; [표현식 2] 템플릿 리터럴 내 표현식 삽입
}
//<목표 > 
//user데이터가 로컬스토리지에 입력되면 => 입력창 form을 없애고
//로컬스토리지에 user데잍터가 없으면(null) => 입력창 form 보이게!!
const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName === null) {//  show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {//  show the greetings
    paintGreetings(savedUserName);
}

// const link = document.querySelector("a");
// function handleLinkClick(event){
//     // alert("clicked");
//     //console.log(handleLinkClick.value)
//     event.preventDefault();
//     console.dir(event);
// }
// link.addEventListener("click", handleLinkClick);