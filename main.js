
const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click",function(){
        const password = document.getElementById("password").Value;
        const passwordNumber = parseFloat(password);


        document.getElementById("show-password").innerText = passwordNumber;
   
        document.getElementById("password").value="";
    })

const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", function(){
        document.getElementById("reset-button").reset();
    })
