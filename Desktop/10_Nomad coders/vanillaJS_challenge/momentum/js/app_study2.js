// prompt ("")   ||  옛날 방식의 팝업창
// 사용자에게 창을 띄어 값을 받고 값을 전달받을 때까지 코드의 실행을 멈춤.
//---------------------------------------------------------------------------------
// (typeof   $ ) ||  $의 타입이 뭔지 콘솔에서 확인 가능
// parseInt( * ) ||  *는 string => number 
//---------------------------------------------------------------------------------

console.log (typeof "15", typeof parseInt("15"));
//                  string          number 

const num = prompt("Type of number, guess");
//      팝업창에 13입력 시 기본적으로 string임!
console.log(num, parseInt(num));
//      13(string)  13 (number) ( parseInt는 숫자가 아니면 NaN 출력 | 사용자가 숫자를 입력했는지 확인 할 수 있음 )

const age = parseInt(prompt("How old are you?"));
//console.log(age);
//      13 (number)
//---------------------------------------------------------------------------------
// isNaN( * ) ||  * 가 NaN인지 아닌지 판별 |Boolean으로 나옴 

// console.log(isNaN(age)); || true = NaN, false = number
//---------------------------------------------------------------------------------

if(isNaN(age)){ // isNaN이 true 이면 아래 식 (이말인 즉 age의 값이 number가 아니였다. = NaN )
    console.log("Please write a number");  
} else {        //isNAN이 false 이면 아래 식 (이말은 age의 값이 number 였다.)
    console.log("Thank you for writing your age!");  
}

//---------------------------------------------------------------------------------
const ageLevel = parseInt(prompt("Excuse me! How old are you?"));

if(isNaN(ageLevel) || age <0 ){ // isNaN이 true = 즉 ageLevel 값이 number가 아니였다. = NaN )
    console.log("Please write a number");  
     //이 아래 값들은 다 isNAN이 false = age의 값이 number 였다.

} else if (ageLevel< 18) {       
    console.log("You are too young!");  
    // &&는 좌항 우항 모두 true 여야 한다는 소리 || true && true
} else if (ageLevel >= 18 && ageLevel<= 50 ) {  
    console.log("You can drink but don't drink too much!");  
} else if (age > 50 && age <= 80){
    console.log("You are senior");  
}  else if (age ===100){
    console.log("wow you are wise");  
} else if (age > 80){
    console.log("You can do whatever you want.");  
}

true || true === true
true || false === true
false || true === true
false || false === false

true && true === true
true && false === false
false && true === false
false && false === false

if ((a && b) || (c && d) || (e && f)) {
    //순서 e와 f => c와 d => b와 a
    //이 중에 하나라도 true이면 true임
}
