const clock = document.querySelector("h2#clock")
//================================ 예문 ==================================
//| function sayHello() {                                               | 
//|      console.log("hello");                                          | 
//|  }                                                                  | 
//|  setInterval(sayHello, 5000); 처음엔 반응X, 5초 후부터 반응시작.5초마다 반복  | 
//|  setTimeout(sayHello, 5000); 처음엔 반응X, 5초 후에 한 번만 반응.반복없음    | 
//=======================================================================
function getClock() {
    const date = new Date();
    //버전1  0:0:0형태
    //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    //버전2 00:00:00형태
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);



// Age is no guarantee of maturity. 
// Lawana Blackwell

// The greatest glory in living lies not in never falling, but in rising every time we fall.
// Nelson Mandela

// Life is unfair, get used to it.
// Bill Gates

// 세상에서 가장 현명한 사람은
// 모든 사람으로부터 배우는 사람이다
// 가장 사랑받는 사람은 칭찬하는 사람이다
// 가장 강한 사람은 감정을 조절할 줄 아는 사람이다
// -탈무드-

// 좋은 성과를 얻으려면
// 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.
// -단테-


// 성공의 비결은 단 한 가지,
// 잘할 수 있는 일에 광적으로 집중하는 것이다.
// -톰 모나건-


// 진정으로 웃으려면 고통을 참아야 하며
// 나아가 고통을 즐길 줄 알아야 한다.
// -찰리 채플린-

// 절대 어제를 후회하지 마라
// 인생은 오늘의 나 안에 있고
// 내일은 스스로 만드는 것이다.
// -L. 론허바드-

// 준비하지 않은 자는 기회가 와도 소용없다.
// -알렉시스 드 토크빌

// 나는 날마다 모든 면에서 점점 좋아지고 있다.
// -에밀쿠에







