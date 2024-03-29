const userBtn = document.querySelector(".emailbtn");
console.log(userBtn);

userBtn.addEventListener("click", function () {
    const mails = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com", "danielebaggiano@gmail.com"];
    console.log(mails);

    const userEmail = document.getElementById("email");
    console.log(userEmail);

    let result = false;

    for (let i = 0; i < mails.length; i++) {
        console.log(mails[i]);
        if (userEmail == mails) {
            result = true;
            // validEmail = "E-mail valida!!";
            console.log(validEmail);
        } else if (userEmail != mails) {
            // validEmail = "E-mail non valida!!";
        }
    }
})