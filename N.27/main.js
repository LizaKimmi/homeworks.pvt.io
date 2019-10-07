"use strict"

var form=document.forms.info;
var email=form.elements.email;
var author=form.elements.author;
var title=form.elements.title;
var urlTitle=form.elements.urlTitle;
var startdate=form.elements.startdate;
var persons = form.elements.persons;
var rubric = form.elements.rubric;
var variants = document.getElementById("variants");
var comments = form.elements.comments;
var article = form.elements.article;


// поле РАЗРАБОТЧИКИ, проверка на пустое поле
function valAuthor(fwe) {
	var author=form.elements.author;
	var authorValue=author.value;
	if(authorValue == "") {
		author.classList.add("invalid");
		var error=document.getElementById("errorAuthor");
		error.textContent = "Поле не может быть пустым, пожалуйста, введите данные!";
		error.style.color="red";
		if (fwe) {
			author.focus();
		}
		return false;
	}
	else {
		var error=document.getElementById("errorAuthor");
		author.classList.remove("invalid");
		error.textContent ="";
		return true;
	}
}


// поле НАЗВАНИЕ САЙТА, проверка на пустое поле
function valTitle(fwe) {
	var title=form.elements.title;
	var titleValue=title.value;
	if (titleValue == "") {
		title.classList.add("invalid");
		var error=document.getElementById("errorTitle");
		error.textContent = "Поле не может быть пустым, пожалуйста, введите данные!";
		error.style.color="red";
		if (fwe) {
			title.focus();
		}
		return false;
	}
	else {
		var error=document.getElementById("errorTitle");
		title.classList.remove("invalid");
		error.textContent ="";
		return true; 
	}
}


// поле URL САЙТА, проверк на пустое поле
function valUrlTitle (fwe) {
	var urlTitle=form.elements.urlTitle;
	var urlTitleValue=urlTitle.value;
	if (urlTitleValue == "" ) {
		urlTitle.classList.add("invalid");
		var error = document.getElementById("errorUrlTitle");
		error.textContent = "Поле не может быть пустым, пожалуйста, введите данные!";
		error.style.color="red";
		if (fwe) {
			urlTitle.focus();
		}
		return false;
	}
	else {
		var error=document.getElementById("errorUrlTitle");
		urlTitle.classList.remove("invalid");
		error.textContent ="";
		return true; 
	}
}


//поле ДАТА ЗАПУСКА, проверка на пустое поле
function valStartdate(fwe) {
	var valid = true;
	var startdate=form.elements.startdate;
	var startdateValue=startdate.value;
	if(startdateValue == "") {
		valid = false;
		startdate.classList.add("invalid");
		var error = document.getElementById("errorStartdate");
		error.textContent = "Вам необходимо выбрать дату, она не может быть пустой!";
		error.style.color="red";
		if (fwe) {
			startdate.focus();
		}
		return false;
	}
	else {
		var error=document.getElementById("errorStartdate");
		startdate.classList.remove("invalid");
		error.textContent ="";
		return true;
	}
}


// поле ПОСЕТИТЕЛЕЙ В СУТКИ, проверка на пустое поле и корректную цифру
function valPersons (fwe) {
	var persons = form.elements.persons;
	var personsValue = persons.value;
	if (personsValue == "") {
		persons.classList.add("invalid");
		var error = document.getElementById("errorPersons");
		error.textContent = "Поле не может быть пустым, пожалуйста, введите данные!";
		error.style.color = "red";
		if (fwe) {
			persons.focus();
		}
		return false;
	}
	else if(isNaN(personsValue)) {
		persons.classList.add("invalid");
		var error = document.getElementById("errorPersons");
		error.textContent = "Количество посетителей должно быть указано корректной цифрой!";
		error.style.color = "red";
		if (fwe) {
			persons.focus();
		}
		return false;
	}
	else{
		var error=document.getElementById("errorPersons");
		persons.classList.remove("invalid");
		error.textContent ="";
		return true;
	}
}

// поле E-MAIL ДЛЯ СВЯЗИ, проверка на пустое поле и наличие @
function valEmail(fwe) {
	var email=form.elements.email;
	var emailValue = email.value;
	if(emailValue == ""){
		email.classList.add("invalid");
		var error=document.getElementById("errorEmail");
		error.textContent = "Поле не может быть пустым, пожалуйста, введите данные!";
		error.style.color="red";
		if (fwe) {
			email.focus();
		}
		return false;
	}
	if(!emailValue.includes("@")) {
		email.classList.add("invalid");
		var error=document.getElementById("errorEmail");
		error.textContent = "Проверьте корректность введеной почты, у вас отсутствует: '@'!";
		error.style.color="red";
		if (fwe) {
			email.focus();
		}
		return false;
	}
	else{
		var error=document.getElementById("errorEmail");
		email.classList.remove("invalid");
		error.textContent ="";
		return true;
	}
}


//поле РУБРИКА, рубрика "бытовая техника" недоступна, нужно выбрать другую
function valRubric(fwe) {
	var rubric = form.elements.rubric;
	var rubricValue = rubric.value;
	if (rubricValue == 3 ) {
		rubric.classList.add("invalid");
		var error = document.getElementById("errorRubric");
		error.textContent = "Данная рубрика, к сожалению, недоступна, выберите другой вариант!";
		error.style.color = "red";
		if (fwe) {
			rubric.focus();
		}
		return false;
	}
	else{
		var error=document.getElementById("errorRubric");
		rubric.classList.remove("invalid");
		error.textContent ="";
		return true;
	}
}


//поле РАЗМЕЩЕНИЕ, вариант vip не доступен и проверка на пустое поле
function valVar(fwe) {
	var variants = form.elements.publicVar;
	var variantsValue = variants.value;
	if(variantsValue == "") {
		var error = document.getElementById("errorVar");
		error.textContent="Поле не может быть пустым, пожалуйста введите данные!";
		error.style.color = "red";
		if (fwe) {
			document.getElementById('radioFirst').scrollIntoView();
		}
		return false;
	}
	else if (variantsValue == "vip"){
		var error = document.getElementById("errorVar");
		error.textContent="Вариант VIP, к сожалению, недоступен, выберите другой вариант!";
		error.style.color = "red";
		if (fwe) {
			document.getElementById('radioFirst').scrollIntoView();
		}
		return false;
	}
	else{
		var error=document.getElementById("errorVar");
		error.textContent ="";
		return true;
	}
}

//поле РАЗРЕШИТЬ ОТЗЫВЫ, проверка на наличие галочки
function valComments(fwe) {
	var comments = form.elements.comments;
	var commentsValue = comments.checked;
	if (!commentsValue) {
		comments.classList.add("invalid");
		var error = document.getElementById("errorComment");
		error.textContent = "Вам необходимо дать согласие на отзывы!";
		error.style.color = "red";
			if (fwe) {
			comments.focus();
		}
		return false;
	}
	else{
		var error=document.getElementById("errorComment");
		comments.classList.remove("invalid");
		error.textContent ="";
		return true;
	}
}

//поле ОПИСАНИЕ САЙТА, проверка на пустое поле и текст должен быть более 10 символов
function valArticle(fwe) {
	var article = form.elements.article;
	var articleValue = article.value;
	if (articleValue == "") {
		article.classList.add("invalid");
		var error = document.getElementById("errorArticle");
		error.textContent = "Поле не может быть пустым, пожалуйста введите данные!";
		error.style.color = "red";
		if (fwe) {
			article.focus();
		}
		return false;
	}
	else if (articleValue.length < 10) {
		article.classList.add("invalid");
		var error = document.getElementById("errorArticle");
		error.textContent = "Описание сайта должно содержать более 10 символов!";
		error.style.color = "red";
		if (fwe) {
			article.focus();
		}
		return false;
	}
	else{
		var error=document.getElementById("errorArticle");
		article.classList.remove("invalid");
		error.textContent ="";
		return true;
	}
}


author.addEventListener("blur", (EO)=> valAuthor(false));
email.addEventListener("blur", (EO)=> valEmail(false));
title.addEventListener("blur", (EO)=> valTitle(false));
urlTitle.addEventListener("blur", (EO)=> valUrlTitle(false));
startdate.addEventListener("blur", (EO)=> valStartdate(false));
persons.addEventListener("blur", (EO)=> valPersons(false));
rubric.addEventListener("change", (EO)=> valRubric(false));
variants.addEventListener("change", (EO)=> valVar(false));
comments.addEventListener("change", (EO)=> valComments(false));
article.addEventListener("blur", (EO)=> valArticle(false));


form.onsubmit = function validForm (EO) {
	EO=EO||window.event;
	var valid = true;
	valid = valAuthor(valid) && valid;
	valid = valTitle(valid) && valid;
	valid = valUrlTitle(valid) && valid;
	valid = valStartdate(valid) && valid;
	valid = valPersons(valid) && valid;
	valid = valEmail(valid) && valid;
	valid = valRubric(valid) && valid;
	valid = valVar(valid) && valid;
	valid = valComments(valid) && valid;
	valid = valArticle(valid) && valid;
	if(!valid) {
		 EO.preventDefault();
	}
}




