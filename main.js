let dropDownTitle = document.querySelectorAll(".drop-down-title");
let dropDownText = document.querySelectorAll(".drop-down-text");
let arrow = document.querySelectorAll(".arrow");

for(let i = 0;i < dropDownTitle.length;i++){
    dropDownTitle[i].addEventListener("click", () => {
        dropDownTitle[i].classList.toggle('bold');
        dropDownText[i].classList.toggle('show');
        arrow[i].classList.toggle('turn');
    })
}