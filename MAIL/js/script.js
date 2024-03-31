const userBtn = document.querySelector(".emailbtn");
console.log(userBtn, typeof userBtn);

userBtn.addEventListener("click", function () {

    const mails = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com", "danielebaggiano@gmail.com"];
    console.log(mails, typeof mails);
    const mailslowercase = mails.map(mails => mails.toLowerCase());

    const userEmail = document.getElementById("email").value;
    const userEmaillowercase = userEmail.toLowerCase();

    if (mailslowercase.includes(userEmail)) {
        console.log("E-mail valida!!");
        
    } else {
 
        console.log("E-mail non valida!!");
    }
})