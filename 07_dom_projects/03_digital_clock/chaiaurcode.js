const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    let currTime = date.toLocaleTimeString()
    clock.innerHTML=currTime
}, 1000)



