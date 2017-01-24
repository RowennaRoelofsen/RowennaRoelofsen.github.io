var choiceButton1 = document.getElementById("choice1");
var choiceButton2 = document.getElementById("choice2");
var choiceButton3 = document.getElementById("choice3");

choiceButton1.onclick = function () {
    console.log("hee");
    if (choiceButton1.classList.contains("active")) {
        choiceButton1.classList.remove("active");
    }
    else {
        choiceButton1.classList.add("active");
    }
};

choiceButton2.onclick = function () {
    console.log("hee");
    if (choiceButton2.classList.contains("active")) {
        choiceButton2.classList.remove("active");
    }
    else {
        choiceButton2.classList.add("active");
    }
};

choiceButton3.onclick = function () {
    console.log("hee");
    if (choiceButton3.classList.contains("active")) {
        choiceButton3.classList.remove("active");
    }
    else {
        choiceButton3.classList.add("active");
    }
};
