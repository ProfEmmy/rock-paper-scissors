const main_div = document.querySelector(".main-div")
const main_content = document.querySelector(".main-content")
const section = document.querySelector("section")

const paper_option = document.querySelector(".paper-div")
const scissors_option = document.querySelector(".scissors-div")
const rock_option = document.querySelector(".rock-div")

const game_play_temp_win = document.querySelector(".game-play-temp-win")
const game_play_temp_lose = document.querySelector(".game-play-temp-lose")

const paper_temp = document.querySelector(".paper-temp")
const scissors_temp = document.querySelector(".scissors-temp")
const rock_temp = document.querySelector(".rock-temp")

const the_score = document.querySelector(".score")

const STORAGE_KEY = "game-score"

let score = localStorage.getItem(STORAGE_KEY) || 0

the_score.innerText = localStorage.getItem(STORAGE_KEY)

paper_option.addEventListener("click", () => {
    main_content.classList.add("display")
    section.classList.add("section")

    const house_options = ["scissors-temp", "rock-temp"]

    const random_num = Math.floor(Math.random() * 2)
    const house_play = house_options[random_num]

    if (house_play === "rock-temp") {
        const temp_win_clone = game_play_temp_win.content.cloneNode(true)

        const house_pick_div = temp_win_clone.querySelector(".house-pick-div")
        const user_pick_div = temp_win_clone.querySelector(".user-pick-div")

        const paper_temp_clone = paper_temp.content.cloneNode(true)
        user_pick_div.appendChild(paper_temp_clone)

        const house_pick = document.querySelector(".rock-temp")
        const house_pick_template = house_pick.content.cloneNode(true)
        house_pick_div.appendChild(house_pick_template)

        main_div.appendChild(temp_win_clone)

        section.classList.add("section-win")

        score = parseInt(score) + 1

        localStorage.setItem(STORAGE_KEY, score)

        the_score.innerText = localStorage.getItem(STORAGE_KEY)

        setPlayAgainListener(temp_win_clone)
    } else {
        const temp_lose_clone = game_play_temp_lose.content.cloneNode(true)

        const house_pick_div = temp_lose_clone.querySelector(".house-pick-div")
        const user_pick_div = temp_lose_clone.querySelector(".user-pick-div")

        const paper_temp_clone = paper_temp.content.cloneNode(true)
        user_pick_div.appendChild(paper_temp_clone)

        const house_pick = document.querySelector(".scissors-temp")
        const house_pick_template = house_pick.content.cloneNode(true)
        house_pick_div.appendChild(house_pick_template)

        main_div.appendChild(temp_lose_clone)

        section.classList.add("section-lose")

        if (!(score <= 0)) {
            score = parseInt(score) - 1
        }

        localStorage.setItem(STORAGE_KEY, score)

        the_score.innerText = localStorage.getItem(STORAGE_KEY)

        setPlayAgainListener(temp_lose_clone)
    }

})

scissors_option.addEventListener("click", () => {
    main_content.classList.add("display")
    section.classList.add("section")

    const house_options = ["paper-temp", "rock-temp"]

    const random_num = Math.floor(Math.random() * 2)
    const house_play = house_options[random_num]

    if (house_play === "paper-temp") {
        const temp_win_clone = game_play_temp_win.content.cloneNode(true)

        const house_pick_div = temp_win_clone.querySelector(".house-pick-div")
        const user_pick_div = temp_win_clone.querySelector(".user-pick-div")

        const scissors_temp_clone = scissors_temp.content.cloneNode(true)
        user_pick_div.appendChild(scissors_temp_clone)

        const house_pick = document.querySelector(".paper-temp")
        const house_pick_template = house_pick.content.cloneNode(true)
        house_pick_div.appendChild(house_pick_template)

        main_div.appendChild(temp_win_clone)
        section.classList.add("section-win")

        score = parseInt(score) + 1

        localStorage.setItem(STORAGE_KEY, score)

        the_score.innerText = localStorage.getItem(STORAGE_KEY)

        setPlayAgainListener(temp_win_clone)
    } else {
        const temp_lose_clone = game_play_temp_lose.content.cloneNode(true)

        const house_pick_div = temp_lose_clone.querySelector(".house-pick-div")
        const user_pick_div = temp_lose_clone.querySelector(".user-pick-div")

        const scissors_temp_clone = scissors_temp.content.cloneNode(true)
        user_pick_div.appendChild(scissors_temp_clone)

        const house_pick = document.querySelector(".rock-temp")
        const house_pick_template = house_pick.content.cloneNode(true)
        house_pick_div.appendChild(house_pick_template)

        main_div.appendChild(temp_lose_clone)
        section.classList.add("section-lose")

        if (!(score <= 0)) {
            score = parseInt(score) - 1
        }

        localStorage.setItem(STORAGE_KEY, score)

        the_score.innerText = localStorage.getItem(STORAGE_KEY)

        setPlayAgainListener(temp_lose_clone)
    }
})

rock_option.addEventListener("click", () => {
    main_content.classList.add("display")
    section.classList.add("section")

    const house_options = ["paper-temp", "scissors-temp"]

    const random_num = Math.floor(Math.random() * 2)
    const house_play = house_options[random_num]

    if (house_play === "scissors-temp") {
        const temp_win_clone = game_play_temp_win.content.cloneNode(true)

        const house_pick_div = temp_win_clone.querySelector(".house-pick-div")
        const user_pick_div = temp_win_clone.querySelector(".user-pick-div")

        const rock_temp_clone = rock_temp.content.cloneNode(true)
        user_pick_div.appendChild(rock_temp_clone)

        const house_pick = document.querySelector(".scissors-temp")
        const house_pick_template = house_pick.content.cloneNode(true)
        house_pick_div.appendChild(house_pick_template)

        main_div.appendChild(temp_win_clone)
        section.classList.add("section-win")

        score = parseInt(score) + 1

        localStorage.setItem(STORAGE_KEY, score)

        the_score.innerText = localStorage.getItem(STORAGE_KEY)

        setPlayAgainListener(temp_win_clone)
    } else {
        const temp_lose_clone = game_play_temp_lose.content.cloneNode(true)

        const house_pick_div = temp_lose_clone.querySelector(".house-pick-div")
        const user_pick_div = temp_lose_clone.querySelector(".user-pick-div")

        const rock_temp_clone = rock_temp.content.cloneNode(true)
        user_pick_div.appendChild(rock_temp_clone)

        const house_pick = document.querySelector(".paper-temp")
        const house_pick_template = house_pick.content.cloneNode(true)
        house_pick_div.appendChild(house_pick_template)

        main_div.appendChild(temp_lose_clone)
        section.classList.add("section-lose")

        if (!(score <= 0)) {
            score = parseInt(score) - 1
        }

        localStorage.setItem(STORAGE_KEY, score)

        the_score.innerText = localStorage.getItem(STORAGE_KEY)

        setPlayAgainListener(temp_lose_clone)
    }
})


function setPlayAgainListener(temp) {
    const btn = document.querySelector(".play-again-btn")
    console.log(btn)

    btn.addEventListener("click", () => {
        main_content.classList.remove("display")
        section.removeAttribute("class")

        const div = document.querySelector(".game-play-parent-div")
        main_div.removeChild(div)
    })
}