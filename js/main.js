let showDate = document.querySelector(".date");

var getDay = new Date().getDate();
var getMonth = new Date().toLocaleString('en-US', {month: "long"});
var getYear = new Date().getFullYear();

showDate.innerHTML = getMonth + " " + getDay + ", " + getYear;

var typeMessage = document.querySelector(".inputText");
var sendMessage = document.querySelector(".send");
var messages = document.querySelector(".message");
var mic = document.querySelector(".fa-microphone");
var cam = document.querySelector(".fa-camera");

sendMessage.classList.add("hide");

typeMessage.addEventListener('keyup', (e) => {
    sendMessage.classList.remove("hide");
    mic.classList.add("hide");
    cam.classList.add("hide");
    if(e.keyCode == 13 && typeMessage.value != ""){
        var getText = typeMessage.value;
        messages.innerHTML += `<p class="myMessages">${getText}</p><br><br><br>`;
        typeMessage.value = "";
        mic.classList.remove("hide");
        cam.classList.remove("hide");
        sendMessage.classList.add("hide");
    }else if(typeMessage.value == ""){
        mic.classList.remove("hide");
        cam.classList.remove("hide");
        sendMessage.classList.add("hide");
    }
})

sendMessage.addEventListener('click', () => {
    if(typeMessage.value != ""){
    var getText = typeMessage.value;
        messages.innerHTML += `<p class="myMessages">${getText}</p><br><br><br>`;
    }
    typeMessage.value = "";
})

