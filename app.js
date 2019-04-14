function clock(){
	const today= new Date();

let Hours= today.getHours();
let Minutes= today.getMinutes();
let Seconds=today.getSeconds();

document.getElementById('hours').innerHTML=Hours;
document.getElementById('minutes').innerHTML=':' + Minutes;
document.getElementById('seconds').innerHTML=':' + Seconds;

}

setInterval(clock,100);


