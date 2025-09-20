const formData = document.querySelector("#form"),
    nameUser = document.querySelector("input[name=user_name]"),
    emailUser = document.querySelector("input[name=user_email]"),
    userUser = document.querySelector("input[name=user_]"),
    messageUser = document.querySelector("textarea[name=user_message]");

// console.log(formData);
formData.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(validateDate()){
        console.log("call async foo");
    }
});

function validateDate(){
    const name = nameUser.value.trim();
    const email = emailUser.value.trim();
    const messgae = messageUser.value.trim();

    let isValid = true;

    nameUser.classList.remove("error");
    emailUser.classList.remove("error");
    messageUser.classList.remove("error");

    // field name
    if(name.length <= 1){
        isValid = false;
        nameUser.classList.add("error");
    }


    // field email
    if(email.length <= 1){
        isValid = false;
        emailUser.classList.add("error");
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        isValid = false;
        emailUser.classList.add("error");
    }


    // field messgae
    if(messgae.length <= 1){
        isValid = false;
        messageUser.classList.add("error");
    }

    if(userUser.value != ""){
        isValid = false;
    }

    if(typeof window == 'undefined'){
        isValid = false;
    }

    return isValid;
}