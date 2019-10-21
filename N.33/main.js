"use strict"

var clock = document.querySelector("#clock");
const radiusClock = clock.offsetWidth / 2; //радиус часов
const sizeOfNumeral = radiusClock / 4; //радиус оболочки цифр
var arrowWidth = radiusClock/20; //толщина стрелок

var r = radiusClock - sizeOfNumeral;
var numeralCenterX = radiusClock - sizeOfNumeral/2;
var numeralCenterY = radiusClock - sizeOfNumeral/2;

for (var h = 1; h <= 12; h++) {
	var angle = h / 12 * Math.PI * 2;
	var nx = numeralCenterX - Math.cos(angle) * r;
	var ny = numeralCenterY + Math.sin(angle) * r;
	var numeral = document.createElement("div");
	numeral.style.width = sizeOfNumeral + "px";
	numeral.style.height = sizeOfNumeral + "px";
	numeral.style.borderRadius = "50%";
	numeral.style.backgroundColor = "#c2c2c2";
	numeral.style.position = "absolute";
	numeral.style.top = nx +"px";
	numeral.style.left = ny + "px";
	numeral.textContent = h;
	numeral.style.textAlign = "center";
	numeral.style.lineHeight = sizeOfNumeral + "px";
	numeral.style.fontSize = sizeOfNumeral / 2 + "px";
	clock.appendChild(numeral);
}

var hourArrow = document.getElementById("hourArrow");
hourArrow.style.width = arrowWidth + "px";
hourArrow.style.height = radiusClock / 2 + "px";
hourArrow.style.position = "absolute";
hourArrow.style.bottom = radiusClock + "px";
hourArrow.style.left = radiusClock - arrowWidth/2 + "px";

var minuteArrow = document.getElementById("minuteArrow");
minuteArrow.style.width = arrowWidth/2 + "px";
minuteArrow.style.height = radiusClock / 1.5 + "px";
minuteArrow.style.position = "absolute";
minuteArrow.style.bottom = radiusClock + "px";
minuteArrow.style.left = radiusClock - arrowWidth/4 + "px";
minuteArrow.style.zIndex = "1";

var secondArrow = document.getElementById("secondArrow");
secondArrow.style.width = arrowWidth/3 + "px";
secondArrow.style.height = radiusClock / 1.2 + "px";
secondArrow.style.position = "absolute";
secondArrow.style.bottom = radiusClock + "px";
secondArrow.style.left = radiusClock - arrowWidth/6 + "px";
secondArrow.style.zIndex = "5";

var currTime = document.getElementById("time");
currTime.style.position = "absolute";
currTime.style.left = radiusClock - radiusClock/4 + "px";
currTime.style.top = radiusClock / 2 + "px";
currTime.style.width = radiusClock/2 + "px";
currTime.style.fontSize = sizeOfNumeral / 2 + "px";


function arrows () {
	var time = new Date();

	currTime.innerHTML = time.toLocaleTimeString();

	var secondAgular = 6 * time.getSeconds() - 6;
	var minuteAgular = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
	var hourAgular = 30 * (time.getHours() + (1 / 60) * time.getMinutes());

	secondAgular += 6;
	secondArrow.style.transform = "rotate(" + secondAgular + "deg)"; 
	minuteAgular += 6 * (1/60);
	minuteArrow.style.transform = "rotate(" + minuteAgular + "deg)";
	hourAgular += 6 * (1/360);
	hourArrow.style.transform = "rotate(" + hourAgular + "deg)";

}

window.onload = arrows();
setInterval(arrows, 1000);
