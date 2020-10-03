const pressed = [];
const secretCode = "ArrowUpArrowDownArrowUpArrowDownArrowLeftArrowRightArrowLeftArrowRightab";

window.addEventListener("keyup", (e) => {
    pressed.push(e.key);
    console.log(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join("").includes(secretCode)) {;
        alert("Ding Ding Ding!!! You got it!!!");
        cornify_add();
    }
    console.log(pressed);
});