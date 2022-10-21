contact = document.getElementById("contact")
profile = document.getElementById("profile")
logo = document.getElementById("logo")

setTimeout(function() {
    logo.style.display = "none";
    profile.style = "animation: open 1s ease; animation-fill-mode: forwards;";
}, 9000);


function displayProfile(){
    profile.style = "animation: open 1s ease; animation-fill-mode: forwards;";
    contact.style = "animation: close 1s ease; animation-fill-mode: forwards;";

    setTimeout(function() {
        contact.style.display = "none";
    }, 1000);
}

function displayContact(){
    profile.style = "display: block; animation: close 1s ease; animation-fill-mode: forwards;";
    contact.style = "display: block; animation: open 1s ease; animation-fill-mode: forwards;";
    // window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(function() {
        profile.style.display = "none";
    }, 1000);
}