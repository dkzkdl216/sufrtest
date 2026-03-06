let lang="ko"

const applyLink="https://docs.google.com/forms/d/e/1FAIpQLSdUfT1mArajdegkuPpvFVDfW-E7uEoijNLzhviAQCk5fOchiw/viewform"

function setLang(l){

lang=l

}

const questions=[

{q:{ko:"바다에 가는 이유는?",en:"Why go to the beach?"},
a:[
{t:{ko:"운동",en:"Sport"},type:"wave"},
{t:{ko:"모험",en:"Adventure"},type:"storm"},
{t:{ko:"친구",en:"Friends"},type:"social"},
{t:{ko:"힐링",en:"Healing"},type:"chill"}]},

{q:{ko:"여행 스타일은?",en:"Travel style?"},a:[
{t:{ko:"액티브",en:"Active"},type:"wave"},
{t:{ko:"탐험",en:"Explore"},type:"storm"},
{t:{ko:"사람들",en:"People"},type:"social"},
{t:{ko:"휴식",en:"Relax"},type:"chill"}]},

{q:{ko:"좋아하는 파도?",en:"Favorite wave?"},a:[
{t:{ko:"빠른 파도",en:"Fast"},type:"wave"},
{t:{ko:"거친 파도",en:"Rough"},type:"storm"},
{t:{ko:"친구와 타기",en:"With friends"},type:"social"},
{t:{ko:"잔잔한 파도",en:"Calm"},type:"chill"}]},

{q:{ko:"서핑 분위기?",en:"Surf vibe?"},a:[
{t:{ko:"스킬 연습",en:"Practice"},type:"wave"},
{t:{ko:"도전",en:"Challenge"},type:"storm"},
{t:{ko:"사람들과",en:"Together"},type:"social"},
{t:{ko:"힐링",en:"Healing"},type:"chill"}]},

{q:{ko:"휴일 계획?",en:"Weekend plan?"},a:[
{t:{ko:"운동",en:"Sport"},type:"wave"},
{t:{ko:"여행",en:"Trip"},type:"storm"},
{t:{ko:"모임",en:"Meet friends"},type:"social"},
{t:{ko:"휴식",en:"Rest"},type:"chill"}]},

{q:{ko:"바다에서 중요한 것?",en:"Important at sea?"},a:[
{t:{ko:"기술",en:"Skill"},type:"wave"},
{t:{ko:"스릴",en:"Thrill"},type:"storm"},
{t:{ko:"사람",en:"People"},type:"social"},
{t:{ko:"평화",en:"Peace"},type:"chill"}]},

{q:{ko:"좋아하는 분위기?",en:"Favorite vibe?"},a:[
{t:{ko:"액티브",en:"Active"},type:"wave"},
{t:{ko:"모험",en:"Adventure"},type:"storm"},
{t:{ko:"소셜",en:"Social"},type:"social"},
{t:{ko:"힐링",en:"Chill"},type:"chill"}]},

{q:{ko:"여행에서 중요한 것?",en:"Important in trip?"},a:[
{t:{ko:"활동",en:"Activities"},type:"wave"},
{t:{ko:"새로운 경험",en:"New experiences"},type:"storm"},
{t:{ko:"사람",en:"People"},type:"social"},
{t:{ko:"휴식",en:"Rest"},type:"chill"}]},

{q:{ko:"좋아하는 날씨?",en:"Favorite weather?"},a:[
{t:{ko:"맑음",en:"Sunny"},type:"wave"},
{t:{ko:"폭풍",en:"Stormy"},type:"storm"},
{t:{ko:"사람 많은 날",en:"Crowded"},type:"social"},
{t:{ko:"조용한 날",en:"Quiet"},type:"chill"}]},

{q:{ko:"서핑 목표?",en:"Surf goal?"},a:[
{t:{ko:"실력 향상",en:"Skill"},type:"wave"},
{t:{ko:"도전",en:"Challenge"},type:"storm"},
{t:{ko:"친구",en:"Friends"},type:"social"},
{t:{ko:"힐링",en:"Relax"},type:"chill"}]}

]

let score={wave:0,storm:0,social:0,chill:0}

let q=0

function startTest(){

showQ()

}

function showQ(){

let total=questions.length

let html=`

<div class="card">

<div class="progress">
<div class="bar" style="width:${(q/total)*100}%"></div>
</div>

<div class="question">${questions[q].q[lang]}</div>
`

questions[q].a.forEach(a=>{

html+=`<div class="answer" onclick="choose('${a.type}')">${a.t[lang]}</div>`

})

html+=`</div>`

document.getElementById("app").innerHTML=html

}

function choose(t){

score[t]++

q++

if(q>=questions.length){

showResult()

}else{

showQ()

}

}

function showResult(){

let type=Object.keys(score).reduce((a,b)=>score[a]>score[b]?a:b)

let data={

wave:{
title:"🏄 Wave Rider",
desc:"도전을 즐기고 기술을 발전시키는 액티브 서퍼",
img:"images/wave.png"
},

storm:{
title:"⚡ Storm Explorer",
desc:"새로운 파도와 모험을 찾는 탐험가 서퍼",
img:"images/storm.png"
},

social:{
title:"🌴 Social Surfer",
desc:"사람들과 함께하는 서핑을 좋아하는 서퍼",
img:"images/social.png"
},

chill:{
title:"🌅 Chill Wave",
desc:"평화롭고 힐링하는 서핑을 즐기는 서퍼",
img:"images/chill.png"
}

}

let r=data[type]

document.getElementById("app").innerHTML=`

<div class="card result">

<h2>${r.title}</h2>

<img src="${r.img}">

<p>${r.desc}</p>

<button class="applyBtn" onclick="window.open('${applyLink}')">
동아리 신청하기
</button>

</div>

`

}
