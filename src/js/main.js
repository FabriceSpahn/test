//All your JS code goes here
const targetDivOne = document.getElementById("one");
const targetDivTwo = document.getElementById("second");
const targetDivThree = document.getElementById("third");
const btnOne = document.getElementById("toggleOne");
const btnTwo = document.getElementById("toggleTwo");
const btnThree = document.getElementById("toggleThree");


btnOne.onclick = function () {
    if (targetDivOne.style.display === "none") {
        targetDivOne.style.display = "block";
        targetDivTwo.style.display = "none";
        targetDivThree.style.display = "none";
    } else {
        targetDivOne.style.display = "none";
        targetDivTwo.style.display = "none";
        targetDivThree.style.display = "none";
    }
};

btnTwo.onclick = function () {
    if (targetDivTwo.style.display === "none") {
        targetDivOne.style.display = "none";
        targetDivTwo.style.display = "block";
        targetDivThree.style.display = "none";
    } else {
        targetDivOne.style.display = "none";
        targetDivTwo.style.display = "none";
        targetDivThree.style.display = "none";
    }
};

btnThree.onclick = function () {
    if (targetDivThree.style.display === "none") {
        targetDivOne.style.display = "none";
        targetDivTwo.style.display = "none";
        targetDivThree.style.display = "block";
    } else {
        targetDivOne.style.display = "none";
        targetDivTwo.style.display = "none";
        targetDivThree.style.display = "none";
    }
};
