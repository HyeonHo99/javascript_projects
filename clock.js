const clockContainer = document.querySelector('.js-clock');
const h1 = clockContainer.querySelector('h1');

function showTime(){
  var date = new Date()
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  h1.innerText = `${h<10 ? `0${h}`:h}:${m<10 ? `0${m}`:m}:${s<10 ? `0${s}`:s}`;
}

(function init(){
  showTime();
  setInterval(showTime,1000);
})();
