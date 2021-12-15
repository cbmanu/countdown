
let editTable = document.querySelector('.edit-table')
let submit = document.querySelector('.submit')
let myTime = document.getElementById('timer');
let restart = document.getElementById('restart')
let start = document.getElementById('start');
let edit = document.getElementById('edit');
let end = document.getElementById('stop')
let alarm = new Audio('sounds/381382__coltonmanz__alarm.wav');
let checkbox = document.getElementById('checkbox');
let cycles = document.getElementById('cycles');
let percentLoaded = document.querySelector('.percent-loaded')
let percentComplete = 0;
let progressBar = document.querySelector('.progress')
let timeE;
let timeR;
let minutesE;
let secondsE;
let minutesR;
let secondsR;

restart.addEventListener('click',()=>{
    timeE = 0;
    timeR = 0;
    timeE =+ minutesE * 60 + secondsE;
    timeR =+ minutesR * 60 + secondsR;
    if(minutesE == undefined && secondsE == undefined){
        timeE = 0;
    }
    if(minutesR == undefined && secondsR == undefined){
        timeR = 0;
    }
    if (Math.floor(timeE/60) < 10 && Math.floor(timeE%60) <10) {
        myTime.innerHTML = `0${Math.floor(timeE/60)}:0${Math.floor(timeE%60)}`;
        timeE--;
        }
        else if(Math.floor(timeE/60) < 10 && Math.floor(timeE%60) > 10){
            myTime.innerHTML = `0${Math.floor(timeE/60)}:${Math.floor(timeE%60)}`;
            timeE--;
        }
        else if(Math.floor(timeE/60) == 10 && Math.floor(timeE%60) < 10){
            myTime.innerHTML = `${Math.floor(timeE/60)}:0${Math.floor(timeE%60)}`;
            timeE--;
        }
        else{
            myTime.innerHTML = `${Math.floor(timeE/60)}:${Math.floor(timeE%60)}`;
            timeE--;
        }

})

function show(){
    editTable.classList.toggle('mostrar')
}

submit.addEventListener('click',()=>{
    show();
    checkMinutesE();
    checkMinutesR();
    checkSecondsE();
    checkSecondsR();
    timeE = minutesE * 60 + secondsE;
    timeR = minutesR * 60 + secondsR;
    if (Math.floor(timeE/60) < 10 && Math.floor(timeE%60) <10) {
        myTime.innerHTML = `0${Math.floor(timeE/60)}:0${Math.floor(timeE%60)}`;
        timeE--;
        }
        else if(Math.floor(timeE/60) < 10 && Math.floor(timeE%60) > 10){
            myTime.innerHTML = `0${Math.floor(timeE/60)}:${Math.floor(timeE%60)}`;
            timeE--;
        }
        else if(Math.floor(timeE/60) > 10 && Math.floor(timeE%60) < 10){
            myTime.innerHTML = `${Math.floor(timeE/60)}:0${Math.floor(timeE%60)}`;
            timeE--;
        }
        else if(Math.floor(timeE/60) == 10 && Math.floor(timeE%60) < 10){
            myTime.innerHTML = `${Math.floor(timeE/60)}:0${Math.floor(timeE%60)}`;
            timeE--;
        }
        else if(Math.floor(timeE/60) < 10 && Math.floor(timeE%60) == 10){
            myTime.innerHTML = `0${Math.floor(timeE/60)}:${Math.floor(timeE%60)}`;
            timeE--;
        }
        else{
            myTime.innerHTML = `${Math.floor(timeE/60)}:${Math.floor(timeE%60)}`;
            timeE--;
        }
        if (cycles.value > 0) {
            progressBar.classList.remove('d-none')
        }

})


edit.addEventListener('click',function(){
    show();
});

function time(){
    if(timeE > 0 ){
        if (checkbox.checked) {
            if (minutesE * 60 + secondsE > 1) {
                let halfTime = ((minutesE * 60) + secondsE)/2;
                if (Math.floor(halfTime) == timeE){
                    alarm.play();
                } 
            }
        }

        if (Math.floor(timeE/60) < 10 && Math.floor(timeE%60) <10) {
        myTime.innerHTML = `0${Math.floor(timeE/60)}:0${Math.floor(timeE%60)}`;
        timeE--;
        }
        else if(Math.floor(timeE/60) < 10 && Math.floor(timeE%60) > 10){
            myTime.innerHTML = `0${Math.floor(timeE/60)}:${Math.floor(timeE%60)}`;
            timeE--;
        }
        else if(Math.floor(timeE/60) > 10 && Math.floor(timeE%60) < 10){
            myTime.innerHTML = `${Math.floor(timeE/60)}:0${Math.floor(timeE%60)}`;
            timeE--;
        }
        else if(Math.floor(timeE/60) == 10 && Math.floor(timeE%60) < 10){
            myTime.innerHTML = `${Math.floor(timeE/60)}:0${Math.floor(timeE%60)}`;
            timeE--;
        }
        else if(Math.floor(timeE/60) < 10 && Math.floor(timeE%60) == 10){
            myTime.innerHTML = `0${Math.floor(timeE/60)}:${Math.floor(timeE%60)}`;
            timeE--;
        }
        else{
            myTime.innerHTML = `${Math.floor(timeE/60)}:${Math.floor(timeE%60)}`;
            timeE--;
        }
    }
    else if(timeE == 0){
        alarm.play();
        timeE--
    }
    else if(timeE == -1 && timeR > 0){
        if (Math.floor(timeR/60) < 10 && Math.floor(timeR%60) <10) {
            myTime.innerHTML = `0${Math.floor(timeR/60)}:0${Math.floor(timeR%60)}`;
            timeR--;
            }
            else if(Math.floor(timeR/60) < 10 && Math.floor(timeR%60) > 10){
                myTime.innerHTML = `0${Math.floor(timeR/60)}:${Math.floor(timeR%60)}`;
                timeR--;
            }
            else if(Math.floor(timeR/60) > 10 && Math.floor(timeR%60) < 10){
                myTime.innerHTML = `${Math.floor(timeR/60)}:0${Math.floor(timeR%60)}`;
                timeR--;
            }
            else if(Math.floor(timeR/60) == 10 && Math.floor(timeR%60) < 10){
                myTime.innerHTML = `${Math.floor(timeR/60)}:0${Math.floor(timeR%60)}`;
                timeR--;
            }
            else if(Math.floor(timeR/60) < 10 && Math.floor(timeR%60) == 10){
                myTime.innerHTML = `0${Math.floor(timeR/60)}:${Math.floor(timeR%60)}`;
                timeR--;
            }
            else{
                myTime.innerHTML = `${Math.floor(timeR/60)}:${Math.floor(timeR%60)}`;
                timeR--;
            }
    }
    else if(timeE == -1 && timeR == 0){
        alarm.play();
        timeE =+ minutesE * 60 + secondsE;
        timeR =+ minutesR * 60 + secondsR;
        if (cycles.value > 0) {
            let cyclesProgress = 100/cycles.value;
            percentComplete = percentComplete + cyclesProgress;
            percentLoaded.setAttribute("aria-valuenow", percentComplete)
            percentLoaded.style.width = `${percentComplete}%`
            percentLoaded.textContent = `${Math.floor(percentComplete)}%`;
            timesCycles++
            if(timesCycles == cycles.value){
                clearInterval(tick);
                end.style.display = 'none'
                start.style.display = 'inline-block'
            }
        }

    }
}

end.addEventListener('click',()=>{
    clearInterval(tick)
    end.style.display = 'none'
    start.style.display = 'inline-block'
    })
start.addEventListener('click',function(){
    if(cycles.value > 0){
         timesCycles = 0;
    }
    if (percentLoaded.textContent == '100%') {
        percentComplete = 0;
        percentLoaded.setAttribute("aria-valuenow", 0)
        percentLoaded.style.width = `0`
        percentLoaded.textContent = `0`;
        timesCycles = 0
    }
     tick = setInterval(time,1000)
    start.style.display = 'none'
    end.style.display = 'inline-block'

})



    function checkMinutesE(){
    minutesE = document.getElementById('minutesExercise').value;
    secondsE = document.getElementById('secondsExercise').value;
        if(minutesE == ''){
            minutesE = 0
        }
        timeE = minutesE * 60 + secondsE
        minutesE = Math.floor(timeE/60);
        return minutesE
    }
    function checkSecondsE(){
    minutesE = document.getElementById('minutesExercise').value;
    secondsE = document.getElementById('secondsExercise').value;

        if(secondsE == ''){
            secondsE
        }
        timeE = minutesE * 60 + secondsE
        secondsE = timeE % 60
        return secondsE
    }
    function checkMinutesR(){
        minutesR = document.getElementById('minutesRest').value;
        secondsR = document.getElementById('secondsRest').value;

        if (minutesR == '') {
            minutesR = 0
            } 
           timeR = minutesR * 60 + secondsR
           minutesR = Math.floor(timeR/60)
           return minutesR
    }
    function checkSecondsR(){
    minutesR = document.getElementById('minutesRest').value;
    secondsR = document.getElementById('secondsRest').value;

        if (secondsR == '') {
            secondsR = 0
            }
            timeR = minutesR * 60 + secondsR
            secondsR = timeR % 60
            return secondsR
    }