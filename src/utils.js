const form =document.getElementById("form");
const modal = document.getElementById("modal");

function handleForm(e) {
    console.log(e);
}

function handleLoad() {
    if (window.location.search !== "") {
        modal.click();
    }
}

form.addEventListener('submit', handleForm)
window.addEventListener('load', handleLoad);

