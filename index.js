var watch = document.getElementById('watch');
var black = document.getElementById('black');
var red = document.getElementById('red');
var purple = document.getElementById('purple');
var blue = document.getElementById('blue');
var pink = document.getElementById('pink');
var time = document.getElementById('time');
var heart = document.getElementById('heart');
var clock = document.getElementById('clock');
var rate = document.getElementById('rate');
var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');

black.addEventListener('click', function(){
     watch.src="https://i.imgur.com/iOeUBV7.png";
})
red.addEventListener('click', function(){
    watch.src="https://i.imgur.com/PTgQlim.png";
})
purple.addEventListener('click',function(){
    watch.src="https://i.imgur.com/xSIK4M8.png";
})
blue.addEventListener('click',function(){
    watch.src="https://i.imgur.com/Mplj1YR.png";
})
pink.addEventListener('click',function(){
    watch.src="https://i.imgur.com/Zygu7I3.png";
})

time.addEventListener('click',function(){
     clock.style.display='block';
     rate.style.display='none';
})
heart.addEventListener('click',function(){
      clock.style.display='none';
      rate.style.display='block';
})

function settime(){
    hour.innerText = new Date().getHours();
    min.innerText = new Date().getMinutes();
    sec.innerText = new Date().getSeconds();
}
setInterval(settime,500);