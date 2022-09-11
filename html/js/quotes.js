const quotes = [
    {
        quote : "만일 내게 나무를 베기 위해 한 시간만 주어진다면, 우선 나는 도끼를 가는데 45분을 쓸 것이다.",
        author : "에이브러햄 링컨",
    },
    {
        quote : "어떤 실수도 하지 않은 유일한 사람은 어떤 일도 하지 않은 사람이다.",
        author : "시오도어 루즈벨트",
    },
    {
        quote : "세상을 고치고자 하는 사람은 먼저 스스로를 고쳐야 한다.",
        author : "윌리엄 펜",
    },
    {
        quote : "인생은 자전거를 타는 것과 같다, 균형을 잡으려면 움직여야 한다.",
        author : "알버트 아인슈타인",
    },
    {
        quote : "지금의 나는 내 자신이 그 동안 해 온 행위의 결과이다.",
        author : "빅토르 위고",
    },
    {
        quote : "기회를 찾아야 기회를 만든다.",
        author : "패티 헨슨",
    },
    {
        quote : "사람은 자신의 무지에 비례하여 거만하다.",
        author : "에드위드 G. 리튼",
    },
    {
        quote : "게으른 사람은 어떤 재능을 가지고 있더라도 그저 그런 사고방식과 그저 그런 친구들을 가지게 될 것이다.",
        author : "시릴 코널리",
    },
    {
        quote : "많은 사람이 시작을 하지 않기 때문에 실패한다. 그들은 나아가지 못하며, 무기력을 극복하지 못하고, 시작도 하지 않는다.",
        author : "W. 글레멘트 스톤",
    },
    {
        quote : "결정하기 전에 완전하고 뚜렷하게 보기를 고집하는 사람은 결코 결정하지 못한다.",
        author : "앙리 프레데릭 아메일",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;