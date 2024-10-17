let rock=document.querySelector(".stone");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let para=document.querySelector("p");
let score1=document.querySelector("#computer-score");
let score2=document.querySelector("#us");
let paradiv=document.querySelector(".txt");
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let heading=document.querySelector("#heading");
let x=0;
let comp=0;
function scorerecorder1(){
    let ran=Math.floor(Math.random()*3);
    if(ran==0){
        para.innerText="computer chose rock";
        paradiv.style.backgroundColor="red";
    }
    else if(ran==1){
        para.innerText="computer chose paper";
        paradiv.style.backgroundColor="green";
        comp=comp+1;
        score1.innerText=comp;
    }
    else if(ran==2){
        x=x+1;
        console.log(x)
        score2.innerText=x;
        paradiv.style.backgroundColor="green";
        para.innerText="computer chose scissor";
    }
}
function scorerecorder2(){
    let ran=Math.floor(Math.random()*3);
    if(ran==0){
        para.innerText="computer chose rock";
        x=x+1;
        score2.innerText=x;
        paradiv.style.backgroundColor="green";
    }
    else if(ran==1){
        para.innerText="computer chose paper";
        paradiv.style.backgroundColor="red";
    }
    else if(ran==2){
        para.innerText="computer chose scissor";
        comp=comp+1;
        score1.innerText=comp;
        paradiv.style.backgroundColor="green";

    }
}
function scorerecorder3(){
    let ran=Math.floor(Math.random()*3);
    if(ran==0){
        para.innerText="computer chose rock";
        comp=comp+1;
        score1.innerText=comp;
        paradiv.style.backgroundColor="green";
    }
    else if(ran==1){
        para.innerText="computer chose paper";
        x=x+1;
        score2.innerText=x;
        paradiv.style.backgroundColor="green";
    }
    else if(ran==2){
        para.innerText="computer chose scissor";
        paradiv.style.backgroundColor="red";
    }
}
rock.addEventListener("click",()=>{
    scorerecorder1();
})
paper.addEventListener("click",()=>{
    scorerecorder2();
})
scissor.addEventListener("click",()=>{
    scorerecorder3();
})
btn1.addEventListener("click",()=>{
    document.querySelector(".main").style.backgroundColor="white";
    score1.style.color="black";
    score2.style.color="black";
    heading.style.color="black";
})
btn2.addEventListener("click",()=>{
    document.querySelector(".main").style.backgroundColor="black";
    score1.style.color="white";
    score2.style.color="white";
    heading.style.color="white";
})
