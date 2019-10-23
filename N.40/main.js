"use strict"

function arrows () {

var wrap = document.getElementById("clock");
var clock = wrap.getContext("2d");
var radiusClock = 200;
var radiusNumeral = radiusClock / 8;
var clockX = wrap.offsetWidth / 2;
var clockY = wrap.offsetHeight / 2;
var arrowWidth = radiusClock / 20;


//оболочка часов
clock.beginPath();	
clock.fillStyle = "#F7F7F7"
clock.strokeStyle = "#181818";
clock.arc(clockX, clockY, radiusClock, 0,Math.PI*2, false);
clock.lineWidth = 2;
clock.stroke();
clock.fill();
clock.closePath();

var r = radiusClock - radiusNumeral * 1.5;
var numeralCenterX = radiusClock;
var numeralCenterY = radiusClock;

for (var h = 1; h <= 12; h++) {
	var angle = h / 12 * Math.PI * 2;
	var ny = numeralCenterY - Math.cos(angle) * r;
	var nx = numeralCenterX + Math.sin(angle) * r;
    clock.beginPath();
    clock.arc(nx, ny, radiusNumeral, 0, 2 * Math.PI, false);
    clock.fillStyle = "#c2c2c2";
    clock.fill();

    clock.fillStyle = "black";
	clock.font =  "bold 22px sans-serif";
	clock.textAlign = "center";
	clock.textBaseline = "middle";
	clock.fillText(h,nx, ny);
}

//цифровые часы
var time = new Date ();
var currTime = time.toLocaleTimeString();
clock.beginPath();
clock.font =  "22px sans-serif";
clock.textBaseline = "middle";
clock.fillText(currTime, clockX, clockY - radiusClock/2);
clock.fill;
clock.closePath();

// секундная стрелка
var secondAgular = 6 * time.getSeconds()
var secondLength = 160;
clock.beginPath();
clock.lineCap = "round";
clock.strokeStyle = "rgba(28, 26, 26, 0.6)";
clock.moveTo(clockX, clockY);
clock.lineTo(clockX + secondLength * Math.sin(secondAgular/180*Math.PI), clockY - secondLength * Math.cos(secondAgular / 180 * Math.PI));
clock.lineWidth = arrowWidth/4;
clock.stroke();
clock.closePath();

// минутная стрелка
var minuteAgular = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
var minuteLength = 130;
clock.beginPath();
clock.lineCap = "round";
clock.strokeStyle = "rgba(28, 26, 26, 0.6)";
clock.moveTo(clockX, clockY);
clock.lineTo(clockX + minuteLength * Math.sin(minuteAgular/180*Math.PI), clockY - minuteLength * Math.cos(minuteAgular / 180 * Math.PI));
clock.lineWidth = arrowWidth / 2;
clock.stroke();
clock.closePath();

// часовая стрелка
var hourAgular = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
var hourLength = 100;
clock.beginPath();
clock.lineCap = "round";
clock.strokeStyle = "rgba(28, 26, 26, 0.6)";
clock.moveTo(clockX, clockY);
clock.lineTo(clockX + hourLength * Math.sin(hourAgular/180*Math.PI), clockY - hourLength * Math.cos(hourAgular / 180 * Math.PI));
clock.lineWidth = arrowWidth;
clock.stroke();
clock.closePath();

setTimeout(arrows, 1000 - time.getMilliseconds());
}

arrows();

