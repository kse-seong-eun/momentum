// // document는 오브젝트
// // getElementById 란 함수를 통해 id로 element를 가져올 수 있다.
// // document.getElementById("string")

// // 엘리먼트의 ID 이용
// const title01 = document.getElementById("title");
// // console.dir(title01);

// // title.innerText = "Got you!";
// // console.log(title.id);
// // console.log(title.className);

// // 엘리먼트의 ClassName 이용
// const hellos = document.getElementsByClassName("hello");
// // console.dir(hellos);

// // 엘리먼트의 TagName 이용
// const title02 = document.getElementsByTagName("h1");
// // console.log(title02);


// const title03 = document.querySelector(".hello h1");
// // console.log(title03);


const h1 = document.querySelector("div.hello:first-child h1");
// title.innerText = "Hello"
// title.style.color = "blue";
// document.title 과 h1은 다름!
//Hello form HTML 과 Study Event!!

//클릭 시 실행될 것 작성
// function handleTitleClick() {
//     console.log("title was clicked!")
// }

// console.dir(h1);

function handleTitleClick() {
//방법 1  = HTML의 h1 태그의 클래스 네임이 덮어쓰기가 됌
//     const clickedClass = "clicked";
//     if(h1.className === "clickedClass"){
//         h1.className = "";
//     } else {
//         h1.className = "clickedClass";
//     }
//방법 2  = HTML의 h1태그의 클래스 네임 뒤로 clicked가 탈부착^^ 🔥js에서 많이 쓰는 방법🔥
//     const clickedClass = "clicked";
//     if(h1.classList.contains(clickedClass){
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
//방법 3 = 방법2의 contains와 add의 과정을 한 번에 정리.
    h1.classList.toggle("clicked");
}

function handleMouseEnter() {
    h1.innerText = "mouse is here!";
}
function handleMouseLeave() {
    h1.innerText = "mouse is gone!";
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowcopy() {
    alert("copyier");
}
function handleWindowoffline() {
    alert("SOS no WIFI");
}
function handleWindowonline() {
    alert("ALL Good");
}


// event : click
h1.addEventListener("click", handleTitleClick);
// title.onclick("click",handleTitleClick);
// 아래처럼 표현할 수 도 있다! 하지만 addEventListener로 작성하면 
// 추후에 .removeEventListener()로 삭제할 수 있어 용이하다.
// event : enter
h1.addEventListener("mouseenter", handleMouseEnter);
// event : leave
h1.addEventListener("mouseleave", handleMouseLeave);

// event : resize
window.addEventListener("resize", handleWindowResize); 
// Clipboard event : copy
window.addEventListener("copy", handleWindowcopy); 
// Connection event : offline
window.addEventListener("offline", handleWindowoffline); 
window.addEventListener("online", handleWindowonline); 