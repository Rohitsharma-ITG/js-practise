function demo() {
    document.querySelector(".change").innerHTML = "hello";
}
function demoRevert() {
    document.querySelector(".change").innerHTML = "java script change html text content";
}


// function 2nd change image

function onbulb() {
    document.querySelector(".image-change").src = "image/onbulb.png";
}
function offbulb() {
    document.querySelector(".image-change").src = "image/offblub.png";
}


// function third change style

function none() {
    document.querySelector(".none").style.display = "none";
}
function block() {
    document.querySelector(".none").style.display = "block";
}


// function 4th sum 

function sum() {
    let a, b, c;
    a = 64;
    b = 36;
    c = a + b;
    document.querySelector(".sum").innerHTML = c;
}
function sumRevert() {
    document.querySelector(".sum").innerHTML = "?";
}

// funtion 5th multiply

function multi() {
    let a, b, c;
    a = 49;
    b = 7;
    c = a * b;
    document.querySelector(".multiply").innerHTML = c;
}

function multiRevert() {
    document.querySelector(".multiply").innerHTML = "?";
}

// function 6th mouse over

function mouseover() {
    document.getElementById("img-mouse").src = "image/onbulb.png";
}
function mouseout() {
    document.getElementById("img-mouse").src = "image/offblub.png";
}

// on click enter name value


function share() {
    let name = prompt("Enter your Name");
    if (name == name) {
        document.querySelector(".name").innerHTML = "hello " + name;
    }

    else {
        document.querySelector(".name").innerHTML = "you don't know your name"
    }
}

// doble click or image block

function bunny() {
    document.getElementById("bunny").style.display = "block";
}
function bunnyRevert() {
    document.getElementById("bunny").style.display = "none";
}

// for calculate

function calc() {
    let a = prompt("value of a",)
    let sign = prompt("sign",)
    let b = prompt("value of b",)

    if (sign == "+") {
        c = Number(a) + Number(b);
        document.querySelector(".ans").innerHTML = "your answer " + a + " + " + b + " = " + c;
    }
    else if (sign == "-") {
        c = Number(a) - Number(b);
        document.querySelector(".ans").innerHTML = "your answer " + a + " - " + b + " = " + c;
    }
    else if (sign == "*") {
        c = Number(a) * Number(b);
        document.querySelector(".ans").innerHTML = "your answer " + a + " * " + b + " = " + c;
    }
    else if (sign == "/") {
        c = Number(a) / Number(b);
        document.querySelector(".ans").innerHTML = "your answer " + a + " / " + b + " = " + c;
    }
    else if (sign == '') {
        document.querySelector(".ans").innerHTML = "you not fill currectly"
    }
    else {
        document.querySelector(".ans").innerHTML = "nothing"
    }
    // document.querySelector(".ans").innerHTML = "your answer is " + c;
}

// new function for zoom


function zoom() {
    document.getElementById("zoom").style.scale = "1.5"
}
function zoomout() {
    document.getElementById("zoom").style.scale = "1"
}

// design

function design() {
    document.getElementById("design").style.textAlign = "center";
    document.getElementById("design").style.padding = "5px 10px";
    document.getElementById("design").style.background = "#255265"
    document.getElementById("design").style.color = "white";
}
function designRevert() {
    document.getElementById("design").style.textAlign = "left";
    document.getElementById("design").style.padding = "0";
    document.getElementById("design").style.background = "transparent"
    document.getElementById("design").style.color = "black";
}


// chage direction

function direc() {
    document.getElementById("direc").style.rotate = "180deg"
}
function direcTwo() {
    document.getElementById("direc").style.rotate = "0deg"
}

// chage position

function trance() {
    let trance = document.getElementById("trance");
    trance.style.transform = "translateX(1000px)";
}
function tranceRevert() {
    let trance = document.getElementById("trance");
    trance.style.transform = "translateX(0px)";
}

// on mouse over 

function show() {
    alert("Are you sure It will stop only when you click on stop button")
    show = document.getElementById("show");
    show.style.transform = "rotate(144000deg)"
    show.style.transition = "all 100s ease"
}
function showTwo() {
    show = document.getElementById("show");
    show.style.transform = "rotate(0deg)"
    show.style.transition = "all 0.1s ease"
}

// on n fuction

function scrol() {
    scrol = document.querySelector(".scrol");
    scrol.style.background = "red";
    scrol.style.color = "white";
}
function scrolRevert() {
    scrol = document.querySelector(".scrol");
    scrol.style.background = "transparent";
    scrol.style.color = "black";
}

// function on input

function input() {
    let input = document.getElementById('myInput').value;
    document.getElementById('output').innerHTML = input;
}

// function on focus

function handleFocus() {
    document.getElementById('message').innerText = "Input field is focused!";
}
function handleFocusRevert() {
    document.getElementById('message').innerText = "";
}

// function on click

function clearimg() {
    document.getElementById("blur").style.filter = "blur(0px)"
}
function clearimgTwo() {
    document.getElementById("blur").style.filter = "blur(2px)"
}

// function 19

function redButton() {
    text = document.querySelector(".color");
    text.style.color = "white";
    text.style.background = "red";
    text.style.padding = "10px"
}
function greenButton() {
    text = document.querySelector(".color");
    text.style.color = "white";
    text.style.background = "green";
    text.style.padding = "10px"
}
function resetButton() {
    text = document.querySelector(".color");
    text.style.color = "black";
    text.style.background = "transparent";
    text.style.padding = "0px"
}

// function 20

function stylechange() {
    let change = document.getElementById("style");
    change.style.letterSpacing = "10px";
    change.style.color = "white";
    change.style.background = "red";
    change.style.padding = "10px"
}
function stylechangeTwo() {
    let change = document.getElementById("style");
    change.style.letterSpacing = "1px";
    change.style.color = "black";
    change.style.background = "transparent";
    change.style.padding = "0"
}


function onChange() {
    let change = document.getElementById("on-change");
    change.style.width = "100%"
}
function onChangeTwo() {
    let change = document.getElementById("on-change");
    change.style.width = "0"
}

/// body bg

function bodyButton() {
    text = document.getElementById("body");
    text.style.color = "white";
    text.style.background = "gray";
}

function bodyBtn() {
    body = document.getElementById("body");
    body.style.color = "black";
    body.style.background = "antiquewhite";
}

//width

function twoThree() {
    img = document.querySelector(".two-three");
    img.style.width = "50px"
}
function twoThreeTwo() {
    img = document.querySelector(".two-three");
    img.style.width = "300px"
}
function twoThreebig() {
    img = document.querySelector(".two-three");
    img.style.width = "500px"
}

// rotate

function roTate() {
    rotate = document.getElementById("rot");
    rotate.style.transform = "rotateY(1440deg)";
}


// for select option

function selecTed() {
    let options = document.querySelector(".alloption");
    options.classList.toggle("mystyle");
}

function hindiLang() {
    select = document.getElementById("selected");
    select.innerHTML = "Hindi"
}
function engLang() {
    select = document.getElementById("selected");
    select.innerHTML = "English"
}
function germanLang() {
    select = document.getElementById("selected");
    select.innerHTML = "German"
}





function showPassword() {
    let pass = document.getElementById("pass-input")
    let show = document.querySelector("#check")

    if (pass.type === "password") {
        pass.type = "text"
    }
    else {
        pass.type = "password"
    }
}

function dogRun() {
    let dog = document.getElementById("dog-image");
    console.log("function work")
    dog.style.transform = "translateX(900px)";
    dog.src = "image/dog.gif"
}

function dogRevert() {
    let dog = document.getElementById("dog-image");
    console.log("function work")
    dog.style.transform = "translateX(0px)";
    dog.src = "image/dog.gif"
}
function dogstop() {
    let dog = document.getElementById("dog-image");
    console.log("function work")
    dog.src = "image/dog.png"
}

// even odd function
function even_odd() {
    let even_odd = document.getElementById("even_odd").value
    if (even_odd === "") {
        alert("Error");
    }
    else if (even_odd % 2 === 0) {
        alert("Even")
    }
    else {
        alert("Odd")
    }
}


function print() {
    let hundred = 100;
    for (let i = 0; i <= hundred; i += 2) {
        document.querySelector(".print").innerHTML += "<li>" + i + "</li>";
    }
}

// new function date 23/10/2024 

let print_prime = document.querySelector(".print_prime");
print_prime.addEventListener("click", function () {
    let a = parseInt(prompt("Enter the first number (min):"));
    let b = parseInt(prompt("Enter the second number (max):"));
    let print_prime_here = document.querySelector(".print_prime_here")
    let newprime = [];
    for (let k = a; k < b; k++) {
        newprime.push(k)

    }
    let sto7re = [];
    for (let i = 0; i < newprime.length; i++) {
        let count = 0;
        let num = newprime[i];
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j == 0) {
                count += 1;
                break;
            }
        }
        if (num >= 1 && count === 0) {
            store.push(num);
        }
    }
    print_prime_here.innerHTML = store;
});

// for random number in between two number

let print_random = document.querySelector(".print_random")
print_random.addEventListener("click", function () {
    let firstNo = parseInt(prompt("Enter the first number (min):"));
    let secondNo = parseInt(prompt("Enter the second number (max):"));
    let print_here = document.querySelector(".print_random_here");
    print_here.innerHTML = Math.floor(Math.random() * (secondNo - firstNo) + firstNo)
});

// end


let count_vowels = document.querySelector(".count_vowels");
let count_vowels_here = document.querySelector(".count_vowels_here");
count_vowels.addEventListener("click", function () {
    let srtn = prompt("find vowels");
    let count_vowel = 0;
    for (let i = 0; i < srtn.length; i++) {
        if (srtn[i] === "a" || srtn[i] === "e" || srtn[i] === "i" || srtn[i] === "o" || srtn[i] === "u" || srtn[i] === "A" || srtn[i] === "E" || srtn[i] === "I" || srtn[i] === "O" || srtn[i] === "U") {
            count_vowel++

        }
        count_vowels_here.innerHTML = count_vowel
    }
});

// 2nd largest is here
let sec_large_here = document.querySelector(".sec_large_here");
let sec_large = document.querySelector(".sec_large")
sec_large.addEventListener("click", function () {
    let findlarge = [1, 5, 6, 8, 9, 4]
    let firstlarge = 0;
    let secondlarge = 0;
    for (let i = 0; i < findlarge.length; i++) {

        if (findlarge[i] > firstlarge) {
            secondlarge = firstlarge
            firstlarge = findlarge[i]
        }
    }
    sec_large_here.innerHTML = secondlarge
});

// end here

let largest_no_here = document.querySelector(".largest_no_here")
let largest_no = document.querySelector(".largest_no")
largest_no.addEventListener("click", function () {
    let first = parseInt(prompt("Enter the first number"));
    let second = parseInt(prompt("Enter the second number"));
    let result = (first > second) ? first + " is grater." : second + " is grater.";
    largest_no_here.innerHTML = result
});

// end here

let reverse_strg = document.querySelector(".reverse_strg")
let reverse_strg_here = document.querySelector(".reverse_strg_here")
reverse_strg.addEventListener("click", function () {
    let srtng = prompt("write anything");
    let fill = ""
    for (let i = srtng.length - 1; i >= 0; i--) {
        fill += srtng[i]
    }
    reverse_strg_here.innerHTML = fill
});

// end here 


let palindromes_btn = document.querySelector(".palindromes_btn")
let palindromes_btn_here = document.querySelector(".palindromes_btn_here")
palindromes_btn.addEventListener("click", function () {
    let srtng = prompt("write anything");
    let fill = ""
    for (let i = srtng.length - 1; i >= 0; i--) {
        fill += srtng[i]
        if (srtng === fill) {
            palindromes_btn_here.innerHTML = "true"
        }
        else {
            palindromes_btn_here.innerHTML = "false"
        }
    }
});

// end here

// sawp up value

let sawp_up = document.querySelector(".sawp_up");
let sawp_up_value = document.querySelector(".sawp_up_value");
let sawp_up_value_2 = document.querySelector(".sawp_up_value_2");
let firstvar = 45;
let secondvar = 65;
sawp_up_value.innerHTML = "a =" + firstvar
sawp_up_value_2.innerHTML = "b =" + secondvar
sawp_up.addEventListener("click", function () {
    console.log("thi")
    let thirdvar = firstvar;
    firstvar = secondvar;
    secondvar = thirdvar;
    sawp_up_value.innerHTML = firstvar
    sawp_up_value.innerHTML = "a =" + firstvar
    sawp_up_value_2.innerHTML = "b =" + secondvar
});

// for finding suare root
let squareroot = document.querySelector(".squareroot");
let print_squareroot = document.querySelector(".print_squareroot");
squareroot.addEventListener("click", function () {
    let siu = parseInt(prompt("enter your value"));
    let fine = "this not have perfect squareroot"
    // for(let i = siu; i >= 1; i--){
    //     if(i * i === siu){
    //        fine = i
    //     }
    // }
    fine = siu ** 0.5;
    print_squareroot.innerHTML = fine
});

// for find area of triangle
let print_triangle_are = document.querySelector(".print_triangle_are");
let triangle_are = document.querySelector(".triangle_are");
triangle_are.addEventListener("click", function () {
    let hegt = parseInt(prompt("enter triangle height"));
    let widt = parseInt(prompt("enter triangle width"));
    let final = 0;
    final = (hegt * widt) / 2
    print_triangle_are.innerHTML = final
})

//  Convert Kilometers to Miles


let print_miles = document.querySelector(".print_miles");
let miles = document.querySelector(".miles");
miles.addEventListener("click", function () {
    let kilo = parseInt(prompt("Enter Kilometer Value"));
    let mile = kilo / 1.609;
    print_miles.innerHTML = mile
})

// JavaScript Program to Check Armstrong Number

let armstrong_value = document.querySelector(".armstrong_value");
let armstrong = document.querySelector(".armstrong")

armstrong.addEventListener("click", function () {
    let armstrong_Number = prompt("enter number ");
    let first_x2z = armstrong_Number;
    let x2z;
    let xy = (first_x2z[0]);
    let yz = (first_x2z[1]);
    let zx = (first_x2z[2]);
    let xyz = xy * xy * xy;
    let yzx = yz * yz * yz;
    let zxy = zx * zx * zx;
    x2z = xyz + yzx + zxy;
    if (first_x2z == x2z) {
        armstrong_value.innerHTML = "this is Armstrong Number"
    }
    else {
        armstrong_value.innerHTML = "this is not Armstrong Number"
    }
})


function pickup(valu) {
    document.getElementById("a").value += valu;
}
function clearme() {
    document.getElementById("a").value = " ";
}
function solve() {
    let x = document.getElementById("a").value;
    let y = eval(x);
    document.getElementById("a").value = y;
}

// for lcm

let lcm = document.querySelector(".lcm");
let lcm_value = document.querySelector(".lcm_value");
lcm.addEventListener("click", () => {
    let a = parseInt(prompt("first value"));
    let b = parseInt(prompt("second value"));
    let c;
    c = (a > b) ? a : b;
    let z = c;
    for (let i = z; i = Infinity; z++) {
        if (z % a == 0 && z % b == 0) {
            break;
        }

    }
    lcm_value.innerHTML = z
})



// document.addEventListener("DOMContentLoaded", () => {
//     const taskInput = document.getElementById('taskInput');
//     const addTaskButton = document.getElementById('addTaskButton');
//     const taskList = document.getElementById('taskList');
//     const clearTasksButton = document.getElementById('clearTasksButton');

//     addTaskButton.addEventListener('click', () => {
//         const taskText = taskInput.value.trim();
//         if (taskText) {
//             const li = document.createElement('li');
//             li.textContent = taskText;

//             const removeButton = document.createElement('button');
//             removeButton.textContent = 'Remove';
//             removeButton.addEventListener('click', () => {
//                 taskList.removeChild(li);
//             });

//             li.appendChild(removeButton);
//             taskList.appendChild(li);
//             taskInput.value = '';
//         }
//     });

//     clearTasksButton.addEventListener('click', () => {
//         taskList.innerHTML = '';
//     });
// });
let velidate = document.getElementById("velidate");
velidate.addEventListener("input" , function(){
  let values = velidate.value ;
   if (values - values == "0") {
    velidate.style.border = "2px solid green"
   }
   else{
     velidate.style.border = "2px solid red"
   }
})
