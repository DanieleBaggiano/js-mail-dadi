const userBtn = document.querySelector(".emailbtn");
console.log(userBtn, typeof userBtn);

userBtn.addEventListener("click", function () {

    const mails = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com", "danielebaggiano@gmail.com"];
    console.log(mails, typeof mails);
    const mailsLowerCase = mails.map(mails => mails.toLowerCase());

    const userEmail = document.getElementById("email").value;
    console.log(userEmail, typeof userEmail);
    const userEmailLowerCase = userEmail.toLowerCase();

    if (mailsLowerCase.includes(userEmailLowerCase)) {

        console.log("E-mail valida!!");

        window.open("file:///C:/Users/alice/OneDrive/Desktop/Lezioni%20HTML/js-mail-dadi/js-mail-dadi/DADI/dadi.html", "_self")
        
    } else {
 
        console.log("E-mail non valida!!");

        alert("E-mail non valida!!");
    }
})