let alarmTime
const audio = document.getElementById('alarmAudio')
let alarmTimeout 

function updateTime(){
    let date = new Date();
    let day = styleValue(date.getDate());
    let month = styleValue(date.getMonth());
    let year = styleValue(date.getFullYear())
    let hour = styleValue(date.getHours());
    let min = styleValue(date.getMinutes());
    let sec = styleValue(date.getSeconds());
    document.getElementById('clock').innerHTML=`${day}-${month}-${year} <br> ${hour} : ${min} : ${sec}`
}
function styleValue(value){
    if(value >= 10) return value
    return '0' + value
}
function setTime(value){
    alarmTime = value
}
function setAlarm() {
    if(alarmTime) {
        const currentTime = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > currentTime) {
            const timeout = timeToAlarm.getTime() - currentTime.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm Created Succesfully');
        }
    }
}
function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime,1000)
