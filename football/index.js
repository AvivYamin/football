//<---------------- DOM ------------------->
//Initial setting to header (username)
const mainHead = document.getElementById("main-head");
const openButton = document.getElementById("openButton");
let userName = localStorage.getItem("username");
let teamArr = [];
let index = 1;
setUpLogin(userName);

const field = document.getElementById("field-container");

//<---------------- Sign Players Form------------------->

const signPlayerButton = document.getElementById("sign-player");
const signUpElement = document.getElementById("sign-container");

signPlayerButton.addEventListener("click", () => {
    let player = setUpPlayer(index);
    index++;
    if(index === 12){
        console.log(teamArr)
        signUpElement.style.display = "none";
        //Activate field
        field.style.display = "block";
    }
})

function setUpPlayer(index){
console.log(index);
const setUpheader = document.getElementById("set-up-header");
setUpheader.textContent = `Player Set Up ${index}/11`;
const firstNameInput = document.getElementById("first-name-input");
let firstName = firstNameInput.value;
const lastNameInput = document.getElementById("last-name-input");
let lastName = lastNameInput.value;
const leftLegInput = document.getElementById("left-input");
let leftLeg = leftLegInput.checked;
const ageInput = document.getElementById("age-input");
let age = ageInput.value;
const salaryInput = document.getElementById("salary-input");
let salary = salaryInput.value;
const celebrationInput = document.getElementById("celeb-input");
let celebration = celebrationInput.value;
const positionInput = document.getElementById("position-select");
let position = positionInput.value;
let strongLeg = checkLeg(leftLeg);
let newPlayer = new Player(firstName, lastName, salary, age, strongLeg, position, celebration, randomId())
teamArr.push(newPlayer);
return newPlayer;
}

function checkLeg(leftLeg){
    let strongLeg;
    if(leftLeg == true){
        strongLeg = "Left";
    }else{
        strongLeg = "Right";
    }
    return strongLeg;
}

//Random ID generator between 1-1000
function randomId(){
    return Math.floor(Math.random() * 1001);
  }

//Login function
function setUpLogin(userName){
    if(userName != null){
        mainHead.textContent += ` - ${userName}`; //Changes the main head to include username indication
        if(userName){
            openButton.style.display = "none"; //Once the username is set - login button disappears
        }
    }else{
        openButton.style.display = "block"; //In first initialization username is null - so display login option
    }
}

//<---------------- Pop Up Login Form ------------------->
const submitLogin = document.getElementById("login-button");
const loginInput = document.getElementById("username-input");
submitLogin.addEventListener("click", handleLogin);

function handleLogin(e){
    e.preventDefault();
    if(loginInput.value === ""){ //Validates the username input
        alert("Invalid Username")
    }else{
        const userName = loginInput.value; //Assigns the userName with the new input
        userLogin(userName);
        console.log(userName);
        closeForm();
    }
}
function userLogin(userName){
    localStorage.setItem("username", userName); //Saves user value to local storage
    loginInput.value = userName; //Assigns the userName to the input value
    openButton.style.display = "none"; //Login button disappears
    mainHead.textContent += ` - ${userName}`; //Changes the main head
    //postUserName(); //Activate the post username request to the server
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    signUpElement.style.display = "block";
  }

  