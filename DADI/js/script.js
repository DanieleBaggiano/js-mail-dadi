const maxNum = 6;
const minNum = 1;

const rootElement = document.getElementById("miao");

const container = document.createElement("div");
container.className = "container";
rootElement.appendChild(container);

const containerDices = document.createElement("div");
containerDices.className = "containerDices";
container.appendChild(containerDices);

const button = document.createElement("button");
button.className = "buttonDado";
button.textContent = "Play me!";
container.appendChild(button);

function generateRandomNumber() {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

function playGame() {
    const myNum = generateRandomNumber();
    const computerNum = generateRandomNumber();

    myDado.textContent = myNum;
    computerDado.textContent = computerNum;

    const oldMessages = document.querySelectorAll('.haiVinto, .haiPareggiato, .haiPerso');
    oldMessages.forEach(message => message.remove());

    if (myNum > computerNum) {
        console.log("Hai vinto!");
        const haiVinto = document.createElement("h2");
        haiVinto.className = "haiVinto";
        haiVinto.textContent = "Hai vinto!";
        container.appendChild(haiVinto);
    } else if (myNum === computerNum) {
        console.log("Pareggio!");
        const haiPareggiato = document.createElement("h2");
        haiPareggiato.className = "haiPareggiato";
        haiPareggiato.textContent = "Hai pareggiato!";
        container.appendChild(haiPareggiato);
    } else {
        console.log("Hai perso!");
        const haiPerso = document.createElement("h2");
        haiPerso.className = "haiPerso";
        haiPerso.textContent = "Hai perso!";
        container.appendChild(haiPerso);
    }
}

const myDado = document.createElement("div");
myDado.className = "myDado";
containerDices.appendChild(myDado);

const computerDado = document.createElement("div");
computerDado.className = "computerDado";
containerDices.appendChild(computerDado);

playGame();

button.addEventListener("click", playGame);