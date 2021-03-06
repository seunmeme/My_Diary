
const trigger = document.getElementById("begin");
const signIn = document.getElementById("signIn");
const signUp = document.getElementById("signUp");
const login = document.getElementById("login");
const reg = document.getElementById("reg");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

const toggleModal = (e) => {
        e.preventDefault();
        modal.classList.toggle("show-modal");
    }
const toggleForms = () => {
    signIn.classList.toggle("hide");
    signUp.classList.toggle("hide");  
}
function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

if (trigger) {
    trigger.addEventListener("click", toggleModal);
}
if (closeButton) {
    closeButton.addEventListener("click", toggleModal);
}   

login.addEventListener("click", toggleForms);
reg.addEventListener("click", toggleForms);
window.addEventListener("click", windowOnClick);

