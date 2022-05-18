import fs from "fs"
import path from "path"
// import wait from "./sleep"
import figlet from "figlet"
import chalk from "chalk"
import gradient from "gradient-string"
import chalkAnime from "chalk-animation"

async function wait(sec = 1) {
    return new Promise((res) => setTimeout(res, sec * 1000))
}


const title = figlet.textSync("BAYMAX", { font: "Banner3" })
// const rainbowTitle = gradient('cyan', 'pink', 'green')(title)

// animate title
const anime = chalkAnime.rainbow(title)
// anime.start()

async function init() {
    await wait(2)
    // anime.stop()

}

init()
