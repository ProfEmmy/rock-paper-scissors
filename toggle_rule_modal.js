const rules_btn = document.querySelector('.rules-btn')
const modal_overly = document.querySelector(".overlay")
const rules_div = document.querySelector(".rules-div")
const close_icon = document.querySelector(".close-icon")

rules_btn.addEventListener("click", () => {
    modal_overly.classList.remove("display")
    rules_div.classList.remove("display")
})

close_icon.addEventListener('click', () => {
    modal_overly.classList.add("display")
    rules_div.classList.add("display")
})

modal_overly.addEventListener('click', () => {
    modal_overly.classList.add("display")
    rules_div.classList.add("display")
})