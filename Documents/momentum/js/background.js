const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg"
];
//객체 랜덤 출력
const chosenImage = images[Math.floor(Math.random()*images.length)];
// html 내에 img 태그 생성
const bgImage = document.createElement("img");
//html 상에서 <img src="img/1.jpg"/>와 같다.
bgImage.src = `img/${chosenImage}`;
//body는 특수해서 따로 변수처럼 사용가능
//appendChild(), append() :가장 뒤에 // prepend() : 가장 위에
document.body.appendChild(bgImage);