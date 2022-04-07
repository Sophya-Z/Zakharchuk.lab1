//Приветствие
const myName = document.querySelector('#name'),
        mybtn = document.querySelector('#mybtn');
var nameVal;
var navName = document.querySelector('.nav_js_profile');

function save_name(){
    event.preventDefault();
    if (myName.value.length <= 1) {
        return;
    }
    nameVal = myName.value;
    localStorage.setItem('name', nameVal);
    myName.value = "";
    //console.log(nameVal);
    navName.style.opacity=1.;
    navName.innerHTML = nameVal;
}

if (localStorage.getItem('name') != ""){
    navName.style.opacity=1.;
    navName.innerHTML = localStorage.getItem('name');
}

//Площадь треугольника
const baseEl = document.querySelector('#Base'),
    heightEl = document.querySelector('#Height'),
    field = document.querySelector('#out');
let base, height;

baseEl.addEventListener('input', () => {
    base = +baseEl.value
    if (height!=undefined) setField()
})
heightEl.addEventListener('input', () => {
    height = +heightEl.value
    if (base!=undefined) setField()
})
function setField() {
    field.innerHTML = base * height / 2
}

//Наибольшая строка
const strOne = document.querySelector('#stringOne'),
    strTwo = document.querySelector('#stringTwo'),
    strOut = document.querySelector('#strOut');
let first,
    sec;

function len(){
    first = strOne.value;
    sec = strTwo.value;
}

function out() {
    event.preventDefault();
    len();
    if (first > sec) {
        strOut.innerHTML = "Первая"
    }
    else if (first < sec) {
        strOut.innerHTML = "Вторая"
    }
    else strOut.innerHTML = "Равны"
}

//Поиск максимального и минимального чисел
const minMaxValue = document.querySelector('#minMaxValue'),
    maxMinValue = document.querySelector('.maxminValue');
var strValue;

minMaxValue.addEventListener('change', () => {
    event.preventDefault();
    strValue = minMaxValue.value;
})

function counter() {
    event.preventDefault();
    strValue = strValue.split(' ');
    let min = Math.min.apply(null, strValue);
    let max = Math.max.apply(null, strValue);
    maxMinValue.innerHTML = "Min: " + min + ", " + "max: " + max;
    minMaxValue.value = "";
    console.log("Min: " + min + ", " + "max: " + max);
}

btnValue.addEventListener('click', () => {
    event.preventDefault();
    counter();
})

//Тест
const ans = document.querySelectorAll('[data-ans]'),
    divAns = document.querySelectorAll('[data-wrapper]'),
    btnTest = document.querySelector('#test_js_submit'),
    testInput = document.getElementsByName('test_input');
var count = 0;
const answersList = [
    {
        ans: `"No"`
    },
    {
        ans: `alert("Hi");`
    },
    {
        ans: `5`
    },
    {
        ans: `undefined`
    },
]

btnTest.addEventListener('click', function() {
    event.preventDefault();
    for (let i = 0; i<testInput.length; i++){
        if (testInput[i].value === answersList[i].ans) {
            count++;
            console.log(testInput[i].value);
        }
    }
    ans.forEach(item => {
        if (item.checked) {
        console.log(item.checked);
            count++;
        }
    divAns.forEach(itemAns => {
        if (item.checked && itemAns.getAttribute('data-wrapper') == "true") {
            itemAns.style = "border: 1px solid green; width: 85%;";
        }
    });
});

alert(`У вас ${count} правильных ответов`);
count = 0;
});

//Таймер
const hours = document.querySelector('.time_hour'),
    minutes = document.querySelector('.time_minute'),
    seconds = document.querySelector('.time_second');
const startTimerBtn = document.querySelector("#button_timer_start"),
    pauseTimerBtn = document.querySelector("#button_timer_pause"),
    stopTimerBtn = document.querySelector("#button_timer_stop"),
    btnValuesTimer = document.querySelector("#button_timer_start_value");

let hour = 00,
    minute = 00,
    second = 00,
    interval;

btnValuesTimer.addEventListener("click", function values(){
    hour = prompt("Введите количество часов",00);
    minute = prompt("Введите количество минут",00);
    second = prompt("Введите количество секунд",00);
    if(hour>23 || minute>59 || second>59) alert("Неправильно введены данные!");
        else if(hour==null || minute==null || second==null){
                hours.innerText = "00";
                minutes.innerText = "00";
                seconds.innerText = "00";
            } else{
                hours.innerText = hour;
                minutes.innerText = minute;
                seconds.innerText = second;
            }
});

startTimerBtn.addEventListener("click", ()=>{
    if(hour==0 && minute==0 && second==0){
        alert("Введите данные!");
    } else {
        clearInterval(interval);
    interval = setInterval(startTimer, 1000);
    }
});

pauseTimerBtn.addEventListener("click", ()=>{
    clearInterval(interval);
});

stopTimerBtn.addEventListener("click", ()=>{
    clearInterval(interval);
    hour = 00;
    minute = 00;
    second = 00;
    hours.textContent = "00";
    seconds.textContent = "00";
    minutes.textContent = "00";
});


function startTimer(){
    second--;

    //секунды
    if(second < 9){
        seconds.innerText = "0" + second;
    }
    if(second > 9){
        seconds.innerText = second;
    }
    if(second < 0){
        minute--;
        minutes.innerText = "0" + minute;
        second = 59;
        seconds.innerText = second;
    }

    //минуты
    if(minute < 9){
        minutes.innerText = "0" + minute;
    }
    if(minute > 9){
        minutes.innerText = minute;
    }
    if(minute < 0){
        hour--;
        hours.innerText = "0" + hour;
        minute = 59;
        minutes.innerText = minute;
    }

    //часы
    if(hour < 9){
        hours.innerText = "0" + hour;
    }
    if(hour > 9){
        hours.innerText = hour;
    }
    if(hour < 0){
        alert("Время вышло!");
        clearInterval(interval);
        hour = 00;
        minute = 00;
        second = 00;
        hours.textContent = "00";
        seconds.textContent = "00";
        minutes.textContent = "00";
    }
    
}