function showTime() {
    let now = new Date()
    let hour = now.getHours()
    // let ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour === 0 ? 12 : hour

    let minute = now.getMinutes()
    let second = now.getSeconds()

    let miliSecond = Math.floor(now.getMilliseconds() / 10);

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second
    miliSecond = miliSecond < 10 ? "0" + miliSecond : miliSecond

    let sendTime = `${hour} : ${minute} : ${second} : ${miliSecond} `
    document.getElementById('clock').innerHTML = sendTime

}

showTime()