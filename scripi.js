const questions=[

{
q:"바다에 가는 이유는?",
a:[
{text:"운동",type:"A"},
{text:"모험",type:"B"},
{text:"친구",type:"C"},
{text:"힐링",type:"D"}
]
},

{
q:"파도가 높다!",
a:[
{text:"도전",type:"B"},
{text:"천천히",type:"D"},
{text:"친구와",type:"C"},
{text:"연습",type:"A"}
]
},

{
q:"서핑 스타일은?",
a:[
{text:"기술형",type:"A"},
{text:"모험형",type:"B"},
{text:"소셜형",type:"C"},
{text:"힐링형",type:"D"}
]
},

{
q:"여행 스타일은?",
a:[
{text:"스포츠",type:"A"},
{text:"탐험",type:"B"},
{text:"친구",type:"C"},
{text:"휴식",type:"D"}
]
},

{
q:"파도 기다릴 때?",
a:[
{text:"연습",type:"A"},
{text:"바다 구경",type:"D"},
{text:"친구와 대화",type:"C"},
{text:"다음 파도 준비",type:"B"}
]
},

{
q:"서핑 후 하고 싶은 것?",
a:[
{text:"운동 더",type:"A"},
{text:"새 장소 탐험",type:"B"},
{text:"파티",type:"C"},
{text:"카페",type:"D"}
]
},

{
q:"좋아하는 활동?",
a:[
{text:"운동",type:"A"},
{text:"모험",type:"B"},
{text:"사람",type:"C"},
{text:"휴식",type:"D"}
]
},

{
q:"바다를 한 단어로?",
a:[
{text:"에너지",type:"A"},
{text:"자유",type:"B"},
{text:"추억",type:"C"},
{text:"평온",type:"D"}
]
}

]

let qIndex=0
let score={A:0,B:0,C:0,D:0}

function startTest(){

document.getElementById("start").style.display="none"
document.getElementById("quiz").style.display="block"

showQuestion()

}

function showQuestion(){

let q=questions[qIndex]

document.getElementById("question").innerText=q.q

let answers=document.getElementById("answers")
answers.innerHTML=""

q.a.forEach(option=>{

let div=document.createElement("div")
div.className="answer"

div.innerText=option.text

div.onclick=()=>selectAnswer(option.type)

answers.appendChild(div)

})

document.getElementById("progress").innerText=
(qIndex+1)+" / "+questions.length

}

function selectAnswer(type){

score[type]++

qIndex++

if(qIndex<questions.length){

showQuestion()

}else{

showResult()

}

}

function showResult(){

document.getElementById("quiz").style.display="none"
document.getElementById("result").style.display="block"

let resultType=Object.keys(score).reduce((a,b)=>
score[a]>score[b]?a:b)

const data={

A:{
title:"🏄 Athlete Surfer",
desc:"운동과 기술을 즐기는 서퍼",
img:"https://images.unsplash.com/photo-1502680390469-be75c86b636f"
},

B:{
title:"🌊 Adventure Surfer",
desc:"도전을 즐기는 모험형 서퍼",
img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
},

C:{
title:"🤝 Social Surfer",
desc:"사람들과 함께하는 서퍼",
img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
},

D:{
title:"🌅 Chill Surfer",
desc:"바다에서 힐링하는 서퍼",
img:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
}

}

let r=data[resultType]

document.getElementById("resultTitle").innerText=r.title
document.getElementById("resultDesc").innerText=r.desc
document.getElementById("resultImg").src=r.img

}
