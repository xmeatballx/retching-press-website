const modal = document.getElementsByClassName("modal");

const closeModal = document.getElementById("close-modal");
closeModal.addEventListener('click', () => {
    modal[0].style.display = 'none';
});

const signupButton = document.getElementById("emailsignup");
signupButton.addEventListener("click", () => {
    console.log('clicked');
    modal[0].style.display = 'block';
});

const selectors = [...document.getElementsByClassName("form_selectors")];
console.log(selectors);

const garmentForm = document.getElementById("tshirt_form");
const fabricForm = document.getElementById("fabric_form");
const otherForm = document.getElementById("other_form");

const formsArray = [garmentForm, fabricForm, otherForm];

for (let i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener("click", () => {
        toggleVisibility(i);
        toggleUnderline(i);
    });

}

function toggleUnderline(index) {
    let lastSelected = document.getElementsByClassName('underline');
    lastSelected[0].classList.toggle("underline");
    selectors[index].classList.toggle("underline");
}

function toggleVisibility(index) {
    let visible = document.getElementsByClassName("visible");

    visible[0].classList.toggle("invisible");
    visible[0].classList.toggle("visible");

    formsArray[index].classList.toggle("invisible");
    formsArray[index].classList.toggle("visible");
}