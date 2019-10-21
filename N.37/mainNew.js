"use strict"

var clock = document.getElementById("clock");
var wrap = document.getElementById("wrap");
var radiusClock = wrap.offsetWidth / 2; //радиус часов
var sizeOfNumeral = radiusClock / 6; //радиус обертки цифр
var arrowWidth = radiusClock/20; //толщина стрелок

var clockCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
  clockCircle.setAttribute("fill", "#F7F7F7");
  clockCircle.setAttribute("stroke", "#181818");
  clockCircle.setAttribute("r", radiusClock);
  clockCircle.setAttribute("cx", radiusClock);
  clockCircle.setAttribute("cy", radiusClock);
  clock.appendChild(clockCircle);

var r = radiusClock - sizeOfNumeral;
var numeralCenterX = radiusClock;
var numeralCenterY = radiusClock;

for (var h = 1; h <= 12; h++) {
	var angle = h / 12 * Math.PI * 2;
	var ny = numeralCenterY - Math.cos(angle) * r;
	var nx = numeralCenterX + Math.sin(angle) * r;

	var numeral = document.createElementNS("http://www.w3.org/2000/svg","circle");
	numeral.setAttribute("r", 20);
	numeral.setAttribute("cx", nx);
	numeral.setAttribute("cy", ny);
	numeral.setAttribute("fill", "#c2c2c2");
	document.querySelector("svg").appendChild(numeral);

    var text = document.createElementNS("http://www.w3.org/2000/svg","text");
     text.textContent=h;
     text.setAttribute("x", nx);    
     text.setAttribute("y", ny);
     text.setAttribute("text-anchor", "middle");
	 text.setAttribute("dominant-baseline", "central");
	 text.style.fontSize = 20;
     clock.appendChild(text);
	}

	var hourArrow = document.createElementNS("http://www.w3.org/2000/svg","line");
	hourArrow.setAttribute("stroke", "black");
	hourArrow.setAttribute("stroke-opacity", 0.6);
	hourArrow.setAttribute("stroke-width", arrowWidth);
	hourArrow.setAttribute("x1", radiusClock);
	hourArrow.setAttribute("y1", radiusClock);
	hourArrow.setAttribute("x2", radiusClock);
	hourArrow.setAttribute("y2", radiusClock/2);
	hourArrow.setAttribute("stroke-linecap", "round");
    clock.appendChild(hourArrow);

    var minuteArrow = document.createElementNS("http://www.w3.org/2000/svg","line");
	minuteArrow.setAttribute("stroke", "black");
	minuteArrow.setAttribute("stroke-opacity", 0.6);
	minuteArrow.setAttribute("stroke-width", arrowWidth/2);
	minuteArrow.setAttribute("x1", radiusClock);
	minuteArrow.setAttribute("y1", radiusClock);
	minuteArrow.setAttribute("x2", radiusClock);
	minuteArrow.setAttribute("y2", radiusClock*0.3);
	minuteArrow.setAttribute("stroke-linecap", "round");
    clock.appendChild(minuteArrow);

    var secondArrow = document.createElementNS("http://www.w3.org/2000/svg","line");
	secondArrow.setAttribute("stroke", "black");
	secondArrow.setAttribute("stroke-opacity", 0.6);
	secondArrow.setAttribute("stroke-width", arrowWidth/3);
	secondArrow.setAttribute("x1", radiusClock);
	secondArrow.setAttribute("y1", radiusClock);
	secondArrow.setAttribute("x2", radiusClock);
	secondArrow.setAttribute("y2", radiusClock*0.2);
	secondArrow.setAttribute("stroke-linecap", "round");
    clock.appendChild(secondArrow);

    var currTime = document.createElementNS("http://www.w3.org/2000/svg",'text');
    currTime.setAttribute("id",'time');
    currTime.setAttribute("stroke","black");
    currTime.setAttribute("x",radiusClock);
    currTime.setAttribute("y",radiusClock/2 + sizeOfNumeral);
    currTime.setAttribute("text-anchor","middle");
    clock.appendChild(currTime);

    hourArrow.style.transformOrigin = "center 200px";
    minuteArrow.style.transformOrigin = "center 200px";
    secondArrow.style.transformOrigin = "center 200px";

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