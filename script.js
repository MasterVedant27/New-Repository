const options=["rock","paper","scissors"]

function playGame(){

let tempUsersChoice= prompt ("Enter your choice")


let usersChoice= tempUsersChoice.trim().toLowerCase()

//computers choice

let randomIndex =  Math.floor(Math.random(options)* options.length)

let computersChoice = options[randomIndex]

console.log("Users Choice", usersChoice)

console.log("Computers Choice",computersChoice)


//check who won this round

//condition for user winning-->


   if ( (usersChoice === "rock" && computersChoice === "scissors") ||
        (usersChoice === "paper" && computersChoice === "rock") ||
        (usersChoice === "scissors" && computersChoice === "paper"))
    {
        alert ("congo you won")}
    
    
// using elseif and else to show loss and tie

//computer winning

else if ((usersChoice === "rock" && computersChoice==="paper"))
    {alert ("you lost")
    }

else if ((usersChoice === "paper" && computersChoice==="scissors"))
{
    alert ("you lost")

}

else if ((usersChoice === "rock" && computersChoice==="paper"))
{
    alert ("you lost")
}


//draw

else{

    alert("its a draw")

}

}









