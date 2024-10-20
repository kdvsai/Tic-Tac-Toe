let boxes = document.querySelectorAll(".box");
let reset= document.querySelector("#rest-btn");
let container=document.querySelector(".container");
let game = document.querySelector(".game");
let result = document.querySelector(".result");
let turnO=false;

const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
           box.innerText="O";
           turnO=false; 
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const checkWinner=()=>{
    for(pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        
        if(val1!=""&&val2!=""&&val3!=""){
            if(val1===val2&&val2===val3){
                disableButtons();
                if(turnO){
                    result.innerText="Congratulations, Winner is X!!";
                }
                else{
                    result.innerText="Congratulations, Winner is O!!";
                }
                result.style.color="white";
            }
        }
    }
}
reset.addEventListener("click",(e)=>{
    result.innerText="";
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
})

const disableButtons=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}