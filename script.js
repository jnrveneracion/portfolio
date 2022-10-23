profile = document.getElementById("profile")
logo = document.getElementById("logo")

setTimeout(function() {
    logo.style.display = "none";
    profile.style = "display: sticky; animation: open 1s ease; animation-fill-mode: forwards;";
}, 1500);

function scrollUp(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
