"use strict";

let area=document.getElementById("area"), 
	ball=document.getElementById("ball"),
	leftRacket = document.getElementById("leftRacket"),
	start = document.getElementById("start"),
	rightRacket = document.getElementById("rightRacket");

const areaW = 500, //ширина игровой арены
	  areaH = 300, //высота игровой арены
	  ballRadius = 13, //радиус шара
	  racketW = 10, //ширина ракеток
	  racketH = 75; //высотка ракеток	

let setting = {
	start: false,
	ballSpeedX: 2, //скорость мяча по X
	ballSpeedY: 2, //скорость мяча по Y
	speed: 3 //скорость ракеток
};

let keys = {
	ArrowUp: false,
	ArrowDown: false,
	Shift: false,
	Control: false
}

area.style.width = areaW + "px";
area.style.height = areaH + "px";

let ballHash = {
	width: ballRadius * 2,
	height: ballRadius * 2,
	ballX:  areaW / 2 - ballRadius,
	ballY:  areaH / 2 -  ballRadius,
	update: function(){
		ball.style.left = this.ballX + "px";
		ball.style.top = this.ballY +"px";
		ball.style.width =  this.width +"px";
		ball.style.height = this.height + "px";
	} 
}

let leftRacketHash = {
	width: racketW,
	height: racketH,
	lrX: 0,
	lrY: 20,
	update: function (){
		leftRacket.style.left = this.lrX + "px";
		leftRacket.style.bottom = this.lrY + "px";
		leftRacket.style.width = this.width + "px";
		leftRacket.style.height = this.height + "px";
	}
}

let rightRacketHash = {
	width: racketW,
	height: racketH,
	rrX: 0,
	rrY: 20,
	update: function(){
		rightRacket.style.right = this.rrX + "px";
		rightRacket.style.bottom = this.rrY + "px";
		rightRacket.style.width = this.width + "px";
		rightRacket.style.height = this.height + "px";
	} 
}

start.addEventListener("click", startGame);
document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);

function startGame(){
	ballHash.ballX = areaW / 2 - ballRadius;
	ballHash.ballY =  areaH / 2 -  ballRadius;
	setting.rt = rightRacket.offsetTop;
	setting.lt = leftRacket.offsetTop;
	setting.start = true;
	requestAnimationFrame(playGame);
}

function playGame(){
	if(setting.start){
		ballHash.update();
		if(keys.ArrowUp && setting.rt > 0) {
			setting.rt -= setting.speed;
		}
		if(keys.ArrowDown && setting.rt < (areaH - rightRacket.offsetHeight)){
			setting.rt += setting.speed;
		}
		if(keys.Shift && setting.lt > 0) {
			setting.lt -= setting.speed;
		}
		if(keys.Control && setting.lt < (areaH - leftRacket.offsetHeight)){
			setting.lt += setting.speed;
		}
	rightRacket.style.top = setting.rt + "px";
	leftRacket.style.top = setting.lt + "px";

	ballHash.ballX += setting.ballSpeedX;
	//касания правой стенки
	if(ballHash.ballX + ballHash.width >= areaW){
		ballHash.ballX = areaW -  ballHash.width;
		setting.start = false;
		(function(){
			let scoreRight = document.getElementById("rightScore");
			scoreRight.innerHTML = ++scoreRight.innerHTML;  
		}());
	}
	//касается правой ракетки
	if(ballHash.ballX + ballHash.width >= areaW - racketW && ball.offsetTop + ballRadius >= rightRacket.offsetTop && ball.offsetTop + ballRadius <= rightRacket.offsetTop + racketH){
		setting.ballSpeedX =-setting.ballSpeedX;
	}
	//касание левой стенки
	if(ballHash.ballX < 0){
		ballHash.ballX = 0;
		setting.start = false;
		(function(){
			let scoreLeft = document.getElementById("leftScore");
			scoreLeft.innerHTML = ++scoreLeft.innerHTML;  
		}());
	}
	//касается левой ракетки
	if(ballHash.ballX <= racketW && ball.offsetTop + ballRadius >= leftRacket.offsetTop && ball.offsetTop + ballRadius <= leftRacket.offsetTop + racketH){
		setting.ballSpeedX =-setting.ballSpeedX;
	}
	//верхняя и нижняя границы поля
	ballHash.ballY += setting.ballSpeedY;
	if(ballHash.ballY + ballHash.height > areaH){
		setting.ballSpeedY =- setting.ballSpeedY;
		ballHash.ballY = areaH - ballHash.height;
	} 
	if(ballHash.ballY < 0){
		setting.ballSpeedY =- setting.ballSpeedY;
		ballHash.ballY = 0;
	}
	requestAnimationFrame(playGame); 
	}
}

function startRun(event) {
	event.preventDefault();
	keys[event.key] = true;
}

function stopRun(event) {
	event.preventDefault();
	keys[event.key] = false;
}
leftRacketHash.update();
rightRacketHash.update();
ballHash.update();