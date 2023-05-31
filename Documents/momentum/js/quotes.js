const quotes = [
    {
        quote:"Age is no guarantee of maturity.",
        author: "Lawana Blackwell",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is unfair, get used to it.",
        author: "Bill Gates",
    },
    {
        quote:"세상에서 가장 현명한 사람은 모든 사람으로부터 배우는 사람이다. 가장 사랑받는 사람은 칭찬하는 사람이다. 가장 강한 사람은 감정을 조절할 줄 아는 사람이다",
        author: "탈무드",
    },
    {
        quote:"좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안  된다.",
        author: "단테",
    },
    {
        quote:"성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author: "톰 모나건",
    },
    {
        quote:"진정으로 웃으려면 고통을 참아야 하며 나아가 고통을 즐길 줄 알아야 한다.",
        author: "찰리 채플린",
    },
    {
        quote:"절대 어제를 후회하지 마라 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author: "L. 론허바드",
    },
    {
        quote:"준비하지 않은 자는 기회가 와도 소용없다.",
        author: "알렉시스 드 토크빌",
    },
    {
        quote:"나는 날마다 모든 면에서 점점 좋아지고 있다.",
        author: "에밀쿠에",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;