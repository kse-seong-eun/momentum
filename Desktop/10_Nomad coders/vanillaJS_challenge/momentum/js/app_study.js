
//=========================== data type ====================================
// ** Data type : Number **
// integer = 정수   Float = 실수, 정수가 아닌 수
console.log(1234);


// ** Data type : String **
// 'Hello', "Hello", 
// "Hello " + "my name is kse" = "Hello my name is kse"
console.log("asdf");


// ** Data type : boolean **
//    True(1, 켜져있음) || False(0, 꺼져있음)
const amIFat = false;
console.log(amIFat);

// ** Data type : null  변수에 '값이 없음'으로 할당됨. **
const areUFat = null;
console.log(areUFat);

// ** Data type : undefined 할당된 변수에 '값'이 할당되지 않았음 **
let somthing
console.log(somthing);


//=============================== 변수 선언 ================================

//variable 값을 정의.
// var /  let / const
//--------------// constant can not change //-------------------
const a = 10;
const b = 2;
const myName = "nico";


const veryLongVariableName = 0; // camelCase : JS의 변수 선언 방식
very_long_variable_name = 0 // snake_case : python의 변수 선언 방식

console.log(a / b);
console.log(a + b);
console.log(a * b);
console.log("hello " + myName + "!");

//------------------------// let //-------------------------------
let c = 6;
let d = 3;
let yourName = "eun";

console.log(c / d);
console.log(c + d);
console.log(c * d);

yourName = "kim"
//변수 선언은 아지 않지만 재할당은 가능
console.log("Your new name is " + yourName + "!");

//---------------------------// var  //----------------------------
var e = 6;
var f = 3;
var ItsName = "Lee";

console.log(e / f);
console.log(e + f);
console.log(e * f);

var ItsName = "Hye"
//변수 선언과 재할당은 가능 
console.log("Its name is " + ItsName + "!");
// 휴먼 에러 및 디버깅시 문제 발생할 수 있어 사용하지 않는다


//======================= Array ==================================
const nonsense = [1, 2, "hello", false, null, undefined];
console.log(nonsense);

// const mon ="mon";
// const tue ="tue";
// const wed ="wed";
// const thu ="thu";
// const fri ="fri";
// const sat ="sat";
// const sun ="sun";
// const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];

// string을 변수 설정 안하고 string으로 바로 적어도 됨
const daysOfWeek = [ "mon", "tue", "wed", "thu", "fri", "sat" ];
console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[4]);

// Add Item from Array
daysOfWeek.push("sun");
console.log(daysOfWeek);


const toBuy = ["potato", "apple", "tomato"];
toBuy.push("peach");
console.log(toBuy[2]);

const player = {
    name : "nico",
    score: 100,
    fat : true,
};

console.log(player);

console.log(player.name);
console.log(player["name"]);

player.fat = false; //프로퍼티 값변경
console.log(player);

player.lastName = "potao"; //프로퍼티 추가
console.log(player);

player.score = player.score + 25; //프로퍼티  업데이트
console.log(player.score);



//=========================== Objct & Function ===============================
//Argument = 인자


//--------------// 함수 //-------------------
function plus( a, b ) {
    console.log( a + b );
};
plus(3, 5);

function minusFive( num ) {
    console.log( num - 5 );
};
minusFive(5);


console.log("hello my name is Nico");


function sayHello () {
    console.log("Hello my name is ");
}
sayHello ("nicolas");
//문자열


function sayHello (HumanName) {
    console.log("Hello my name is " + HumanName );
}
sayHello ("Lee");


//--------------// 오브젝트 //-------------------

const subPlayer = {
    name: "nico",
    age : 90
};
//객체는 = 을 꼭 붙여야한다!
console.log (subPlayer);


//--------------// 복합 : 계산기 만들기 //-------------------

const calculator = {
    plus : function (a, b) {
        return (a + b);
    },
    minus : function (a, b) {
        return (a - b);
    },
    times : function (a, b) {
        return (a * b);
    },
    divide : function (a, b) {
        return(a / b);
    },
    power : function (a, b) {
        return (a ** b);
    },
};

calculator.plus(6, 3);
calculator.minus(6, 3);
calculator.times(6, 3);
calculator.divide(6, 3);
calculator.power(6, 3); //제곱은 power라고도 해서 약자로 pow라고 쓰기도 함

const plusResult = calculator.plus(2,3)
const minusResult = calculator.plus(plusResult, 10)
const timesResult = calculator.plus(10, minusResult)
const divideResult = calculator.plus(timesResult, plusResult)
const powerResult = calculator.plus(divideResult, minusResult)
// console.log 사용하지 않기!!!
// console.log는 console에 무언가를 log하는것! 
// => 데이터 값만 받아서 함수 외부에서 써야할 때, return을 이용해서 꺼내야함
// => 참고로 return하면 함수는 기능 종료 (console.log 이후에 뭘 적어도 작동 안됨)

// 콘솔(창)이 아닌 화면에 결과를 출력하게끔 return을 사용한다!


// tip 
// 단어선택 + controㅣ + shift + l = 동일 단어 전체 선택

//-----------------// 변수 + 함수 + 변수? 메서드(?) 만들기 // return의 사용 //----------------------

//

const age = 96;

function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);



//-------------------// To Do List 만들기 //------------------------