window.addEventListener('load',  ()=> {

    let countries = ["Австралия", "Австрия", "Азербайджан", "Албания", "Алжир", "Ангола", "Андорра", "Антигуа и Барбуда", "Антильские острова", "Аргентина", "Армения", "Афганистан", "Багамские острова", "Бангладеш", "Барбадос", "Бахрейн", "Белиз", "Белоруссия", "Бельгия", "Бенин", "Болгария", "Боливия", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Буркина-Фасо", "Бурунди", "Бутан", "Вануату", "Ватикан", "Великобритания", "Венгрия", "Венесуэла", "Вьетнам", "Габон", "Гаити", "Гайана", "Гамбия", "Гана", "Гватемала", "Гвинея", "Гвинея-Бисау", "Германия", "Голландия", "Гондурас", "Гонконг", "Гренада", "Гренландия", "Греция", "Грузия", "Гуам", "Дания", "Демократическая Республика Конго", "Джибути", "Доминиканская республика", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо-Верде", "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Киргизия", "Кирибати", "Китай", "КНДР", "Колумбия", "Коморские острова", "Коста-Рика", "Кот-д'Ивуар", "Куба", "Кувейт", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", "Македония", "Малави", "Малайзия", "Мали", "Мальдивы", "Мальта", "Марокко", "Мартиника", "Мексика", "Микронезия", "Мозамбик", "Молдавия", "Монако", "Монголия", "Мьянма", "Намибия", "Непал", "Нигер", "Нигерия", "Никарагуа", "Новая Зеландия", "Новая Каледония", "Норвегия", "ОАЭ", "Оман", "Пакистан", "Палестина", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", "Польша", "Португалия", "Пуэрто-Рико", "Республика Конго", "Республика Корея", "Россия", "Руанда", "Румыния", "Сальвадор", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Свазиленд", "Сенегал", "Сент-Китс и Невис", "Сент-Люсия", "Сербия", "Сингапур", "Сирия", "Словакия", "Словения", "Соломоновы острова", "Сомали", "Судан", "Суринам", "США", "Сьерра-Леоне", "Таджикистан", "Таиланд", "Тайвань", "Танзания", "Того", "Тонга", "Тринидад и Тобаго", "Тунис", "Туркменистан", "Турция", "Уганда", "Узбекистан", "Украина", "Уругвай", "Фиджи", "Филиппины", "Финляндия", "Франция", "Французская Гвиана", "Хорватия", "Центральноафриканская Республика", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "ЮАР", "Ямайка", "Япония"];
		let input = document.getElementById('country');
		let list = document.getElementById('autocomplite_list');
        let input1 = document.getElementById('country1');
		let list1 = document.getElementById('autocomplite_list1');



		input.addEventListener('keyup', complite);
		list.addEventListener('click', selectWord);
        input1.addEventListener('keyup', complite);
		list1.addEventListener('click', selectWord);

		function selectWord(event) {
			let targ = event.target 
			if (targ.parentNode === list) {
				input.value = targ.innerHTML;
				list.style.display = 'none';
			}

            if (targ.parentNode === list1) {
				input1.value = targ.innerHTML;
				list1.style.display = 'none';
			}
		}
		function complite() {


			let val = input.value.trim().toLowerCase();
            let val1 = input1.value.trim().toLowerCase();

			if (val) {
				let words = countries.filter(function(item) {
					return item.toLowerCase().indexOf(val) === 0;
				});
				list.innerHTML = getComliteHtml(words);
				list.style.display = 'block';
				positionList(input,list);
			} else {
				list.style.display = 'none';
			}

            if (val1) {
				let words = countries.filter(function(item) {
					return item.toLowerCase().indexOf(val) === 0;
				});
				list1.innerHTML = getComliteHtml(words);
				list1.style.display = 'block';
				positionList(input1,list1);
			} else {
				list1.style.display = 'none';
			}
		}
		function positionList(inp,li) {
			li.style.width = inp.offsetWidth - 2 + 'px';
			// let XY = inp.getBoundingClientRect();
			// li.style.left = XY.left + pageXOffset + 'px';
			// li.style.top = XY.bottom + pageYOffset + 'px';
		}
		function getComliteHtml(words) {
			let html = "";
			for (let i = 0; i < words.length; i++) {
				html += '<div>' + words[i] + '</div>'
			}
			return html;
		}
})