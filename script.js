contact = document.getElementById("contact")
profile = document.getElementById("profile")
logo = document.getElementById("logo")
iconProfile = document.getElementById("btnProfile")
iconContact = document.getElementById("btnContact")
profIndicator = document.getElementById("profileIndicator")
messIndicator = document.getElementById("messageIndicator")

setTimeout(function() {
    logo.style.display = "none";
    profile.style = "animation: open 1s ease; animation-fill-mode: forwards;";
    profIndicator.style = "display: block;"
}, 1500);

function scrollUp(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function displayProfile(){
    profile.style = "display: sticky; animation: open 1s ease; animation-fill-mode: forwards;";
    contact.style = "animation: close 1s ease; animation-fill-mode: both;";
    scrollUp();

    setTimeout(function() {
        contact.style.display = "none";
    }, 1000);

    iconProfile.disabled = true;
    iconContact.disabled = false;

    profIndicator.style = "display: block;"
    messIndicator.style = "display: none;"
}

function displayContact(){
    contact.style = "display: sticky; animation: open 1s ease; animation-fill-mode: forwards;";
    profile.style = "animation: close 1s ease; animation-fill-mode: both;";
    scrollUp();

    setTimeout(function() {
        profile.style.display = "none";
    }, 1000);

    iconProfile.disabled = false;
    iconContact.disabled = true;

    profIndicator.style = "display: none;"
    messIndicator.style = "display: block;"
}
