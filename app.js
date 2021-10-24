let myTime = document.querySelector('.timer');
let restart = document.getElementById('restart')
let start = document.getElementById('start');
let edit = document.getElementById('edit');
let editTable = document.querySelector('.edit-table')
let submit = document.querySelector('.submit')
let alarm = new Audio('sounds/381382__coltonmanz__alarm.wav')
let timeE;
let timeR;
let minutesE;
let secondsE;
let minutesR;
let secondsR;

restart.addEventListener('click',()=>{

    
})

function show(){
    editTable.classList.toggle('mostrar')
}

submit.addEventListener('click',()=>{
    show();
    checkMinuteE();
    checkMinuteR();
    checkSecondsE();
    checkSecondsR();
    timeE = minutesE * 60 + secondsE;
    timeR = minutesR * 60 + secondsR;
    console.log(`${timeE},${timeR}`)
})


edit.addEventListener('click',function(){
    show();
});
start.addEventListener('click',function(){
    setInterval(time,1000)
            function time(){
                if(timeE > 0 ){
                    if (Math.floor(timeE/60) < 10 && Math.floor(timeE%60) <10) {
                    myTime.innerHTML = `0${Math.floor(timeE/60)}:0${Math.floor(timeE%60)}`;
                    timeE--;
                    }
                    else if(Math.floor(timeE/60) < 10 && Math.floor(timeE%60) > 10){
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
                        else{
                            myTime.innerHTML = `${Math.floor(timeR/60)}:${Math.floor(timeR%60)}`;
                            timeR--;
                        }
                }
                else if(timeE == -1 && timeR == 0){
                    alarm.play();
                    timeE =+ minutesE * 60 + secondsE;
                    timeR =+ minutesR * 60 + secondsR;
                }
            }
})




    function checkMinuteE(){
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
    function checkMinuteR(){
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