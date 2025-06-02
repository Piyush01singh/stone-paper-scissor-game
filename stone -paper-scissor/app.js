let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepare= document.querySelector("#user-score");
const compscorepare= document.querySelector("#comp-score");


const gencomputerchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx= Math.floor(Math.random()*3);
    return options[randidx];   
}

const showwinner= (userwin)=>{
    if(userwin){
        userscore++;
        userscorepare.innerText=userscore;
        console.log("user won");
        msg.innerText="User won";
        msg.style.backgroundColor="#008000";
    }
    else{
        compscore++;
        compscorepare.innerText=compscore;
        console.log("computer won");
        msg.innerText="You lose";
        msg.style.backgroundColor="#FF0000";
    }

}

const playGame=(userchoice) =>{
    console.log("user choiec =",userchoice);
    const compchoice = gencomputerchoice();
      console.log("computer choice =",compchoice);

      if(userchoice===compchoice){
        console.log("game draw");
        msg.innerText="Game Draw";

      }
      else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin= compchoice==="paper" ? false : true;
        }
          else if(userchoice==="paper"){
            userwin= compchoice==="scissors" ? false : true;
        }
          else{
            userwin= compchoice==="rock" ? false : true;
        }
        showwinner(userwin);
      }
}


choices.forEach((choice) =>{
            console.log(choice);
        choice.addEventListener("click",() =>{ 
            const userchoice = choice.getAttribute("id")
              
                playGame(userchoice);
        })
})

