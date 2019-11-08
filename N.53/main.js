"use strict"

		var drinkStorage = new LocStorage("drinks"),
			dishesStorage = new LocStorage("dishes");

		function addValueDrink() {
			var drinkName=prompt("Введите название напитка", "название");
			var alco=confirm("Напиток алкогольный?");
			if (alco) {
				alco="да";
			}
			else {
				alco="нет";
			}

			var recipe=prompt("Введите рецепт напитка", "ингредиенты");
			drinkStorage.addValue(drinkName,{a:alco, r:recipe});
		}

		function  getValueDrink() {
			var drinkName=prompt("Введите название напитка", "название");
			var info=drinkStorage.getValue(drinkName);
			if (info) {
				alert("Название напитка: "+ drinkName +"\n\r " + "Алкогольный: " + info.a + '\n\r '+ "Рецепт приготовления: " + info.r);
			}
			else {
				alert("Напиток не найден!");
			}
		}

		function deleteValueDrink(){
			var drinkName=prompt("Введите название напитка", "название");
			var del=drinkStorage.deleteValue(drinkName);
			if (del) {
				alert("Информация о напитке " + "'" + drinkName + "'" + " удалена!");
			}
			else {
				alert("Напиток " + "'" + drinkName + "'" + " в списке отсутствует!")
			}
		}

		function getKeyDrink(){
			var empty=drinkStorage.getKey();
			if (empty.length > 0) {
			alert(empty);}
			else {
				alert("Список пуст!")
			}
		}

		function addValueDish() {
			var dishName=prompt("Введите название блюда", "название");
			var dietary=confirm("Блюдо диетическое?");
			if (dietary) {
				dietary="да";
			}
			else {
				dietary="нет";
			}

			var recipe=prompt("Введите рецепт блюда", "ингредиенты");
			dishesStorage.addValue(dishName,{a:dietary, r:recipe});
		}

		function  getValueDish() {
			var dishName=prompt("Введите название блюда", "название");
			var info=dishesStorage.getValue(dishName);
			if (info) {
				alert("Название блюда: "+ dishName +"\n\r " + "Диетическое: " + info.a + '\n\r '+ "Рецепт приготовления: " + info.r);
			}
			else {
				alert("Блюдо не найдено!");
			}
		}

		function deleteValueDish(){
			var dishName=prompt("Введите название блюда", "название");
			var del=dishesStorage.deleteValue(dishName);
			if (del) {
				alert("Блюдо " + "'" + dishName + "'" + " удалено!");
			}
			else {
				alert("Блюдо " + "'" + dishName + "'" + " в списке отсутствует!")
			}
		}

		function getKeyDish(){
			var empty=dishesStorage.getKey();
			if (empty.length > 0) {
			alert(empty);}
			else {
				alert("Список пуст!")
			}
		}