/*Plan_Committtttttttt
1. Сделать выбор цвета по клику на цвете - DONE
2   выбор образца цвета по движению мыши - DONE
3. Функция добавить/убрать блока - DONE
4. Выпадающее меню для меню  DONE
5. Кнопка "canculate color" - DONE
6. Сверстать три страницы
7. Добавить функционал поиска по сайту
сайтmap octopus.do/ffvvih840cc
*/

//  poem___________ChooCol______________   //


document.addEventListener('DOMContentLoaded', () => {

	// ___________character

	let tabsBtn = document.querySelectorAll(".tabs__nav-btn"); // кнопки на ТАБЕ
	let tabsContent = document.querySelector(".intro_1"); //содержимое в ТАБЕ
	// let tabsNav = document.querySelector(".tabs__nav"); 
	// let intro = document.querySelector(".intro")
	// let colors = document.querySelectorAll('span');
	let icon = document.querySelector('.icon'); // кнопка рандомного подбора
	let editButtns = document.querySelectorAll('.butt'); // кнопки редактирования гаммы
	let result = []; // цвет разделенный на HSL каналы в массиве из трёх значений
	let color1 = document.querySelector('.color1');
	let color2 = document.querySelector('.color2');
	let color3 = document.querySelector('.color3');


	let cou1 = 0,
		cou2 = 1,
		cou3 = 2,
		cou4 = 3,
		cou5 = 4,
		cou6 = 5,
		cou7 = 6,
		cou8 = 7;
	//счётчики перебора цветов в каждом блоке
	// let spanActive = $('span.active');
	let spanActive = document.querySelector('span.active');
	let textColorBuffer; // содержит имя цвета
	let textColor = document.createElement('div'); // показывает имя цвета
	


	let arrStyleColor = [
		'.color1',
		'.color2',
		'.color3',
		'.color4',
		'.color5',
		'.color6',
		'.color7',
		'.color8'
	];

	let arrayHueMain = [353, 22, 48, 94, 159, 200, 242, 281];
	let arrayLight = [95, 92, 79, 46, 43, 22, 14, 9];


	let arrayHueSleep = [150, 190, 210, 190, 70, 48, 70, 180];
	let arraySaturSleep = [50, 50, 50, 50, 50, 50, 50, 50];
	let arrayLightSleep = [95, 92, 79, 46, 43, 43, 79, 92];

	result[2] = 100;	
	// randomInteger2(90, 100);


	if (result[2] >= 100 && result[2] > 97) {
		result[2] = 100 - (result[2]);
	} else if (result[2] <= 13 && result[2] >= 0) {
		result[2] = 10;
	}

	arrayLight[0] =  result[2];
	arrayLight[1] = arrayLight[0] - 3;
	arrayLight[2] = arrayLight[1] -13;
	arrayLight[3] = arrayLight[2] -33;
	arrayLight[4] = arrayLight[3] -3;
	arrayLight[5] = arrayLight[4] -21;
	arrayLight[6] = arrayLight[5] -8;
	arrayLight[7] = arrayLight[6] -5;

	// arrayLight.forEach(function(item, i) {
	// 	if (item < 0 ) {
	// 		item = item + 35;
	// 	}
	// });

	// let newArrayLight = arrayLight;

	console.log(arrayLight[0],arrayLight[1],arrayLight[2],
		arrayLight[3],arrayLight[4],arrayLight[5],
		arrayLight[6],arrayLight[7]);
	
	let newArrayLight = arrayLight.map(function (item, i) {
		if (item <= 0 ) {
			item = item + 35;
		}
	return item;
    });

	//______ColorPicker_________//

	let deleteColPick = function () {
		$('.colorpickerHolder').remove();
	};


	$(tabsContent).on("contextmenu", false);
	$(tabsContent).on("contextmenu", colorPicker);
	$(tabsContent).on("click", deleteColPick);



	function colorPicker(e) {
		const contextBox = document.createElement('ColPick');
		contextBox.classList.add('colorpickerHolder');
		document.querySelector('body').append(contextBox);
		let spanColor = $(e.target).css('backgroundColor');

		$(contextBox).css({
			"position": "absolute",
			"left": e.pageX + "px",
			"top": e.pageY + "px"
		});

		$(contextBox).ColorPicker({

			flat: true,
			color: rgb2hex(spanColor),
			onChange: function (hsb, hex, rgb) {
				$(e.target).css('backgroundColor', '#' + hex, );
			}
		});

	}

	function sliceColor() {
		let actCol = document.querySelector('span.active');
		$(actCol).each(function () {
			const color = $(this).css("backgroundColor"),
				[r, g, b] = color.match(/\d+/g);
			const colHsl = RGB2HSL(r, g, b);
			result = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(colHsl).slice(1);
			
			return result;
		});
		

	}
	

	// console.log(result[2]);

	// let newArrHue = arrayHueMain.map((item) => {
	// 	sliceColor();
	// 	console.log(result[0]);
	// 	return item + 10;
	// });



	//______Active Color_________//


	function findColorName() {
		// находим в активном табе активный цвет 

		let color = $('span.active').css("backgroundColor");
		//помещаем в  переменную *textColorBuffer*  имя HEX активного цвета
		textColorBuffer = rgb2hex(color);
		sliceColor();
	}

	function activeColor(e) { //функионал режима *span.active*
		// let spanActive = document.querySelector('span.active');
		const target = e.target; //получаем элемент клика	
		// let activeImg = $(target).children('img');
		//если клик не на *span.active* убираем класс *active, скрываем контейнер с именем цвета
		if (!target.classList.contains("active")) {
			target.classList.remove("active");
			$(spanActive).removeClass('active');
			$(tabsContent).children().removeClass('active');
			target.parentNode.classList.remove('active');
			textColor.classList.remove('textColor');
		}

		target.classList.add('active');

		// if (target.classList.contains('loadImg')) {
		// 	$('.loadImg').removeClass('active');
		// 	target.parentNode.classList.add('active');
		// }

		textColor.classList.add('textColor'); // показываем контейнер с именем цвета, добовляем *active,

		findColorName(); //вызываем имя цвета
		textColor.innerHTML = textColorBuffer; //  добавляем имя цвета
		target.append(textColor); //добовляем контейнер с именем цвета

		// description.innerHTML = `<input type='text'	id = "description" value = "description"></input>`;

		editButtns[0].removeEventListener('click', calcCouPlus); //удаляем пребор гаммы в "+" без *span.active*  
		editButtns[1].removeEventListener('click', calcCouMinus); //удаляем пребор гаммы в "-" без *span.active*  
		editButtns[0].addEventListener('click', actCalcCouPus); //добавляем пребор гаммы в "+" с *span.active*  
		editButtns[1].addEventListener('click', actCalcCouMinus); //добавляем пребор гаммы в "-" с *span.active*  
		window.removeEventListener('mousemove', sorTable); //удаляем возможность перетаскивания блоков

	}

	// tabsContent.forEach(function (item, i) { // вешаем на контейнер с цветами фунцию активного цвета
	// 	item.addEventListener('click', activeColor);
	// });
	tabsContent.addEventListener('click', activeColor);

	function deletActivColor(e) { //функионал режима БЕЗ *span.active*
		const target = e.target;
		target.classList.remove('active');
		textColor.remove();
		editButtns[0].addEventListener('click', calcCouPlus); // оброботчики перебора гаммы в режиме  *span.active*
		editButtns[1].addEventListener('click', calcCouMinus);
		editButtns[0].removeEventListener('click', actCalcCouPus); //удаляем перебора гаммы в режиме БЕЗ *span.active*
		editButtns[1].removeEventListener('click', actCalcCouMinus);
		window.addEventListener('mousemove', sorTable); //включаем возможность перетаскивания блоков
		// $('.loadImg').removeClass('active');
		target.parentNode.classList.remove('active');

		// оповещение о копировании имени цвета

	}

	textColor.addEventListener('click', () => {
		navigator.clipboard.writeText(textColorBuffer); //пишем в буфер обмена имя цвета
		textColor.remove();
		let copied = document.createElement('div'); //созаем элемент оповещения о копировании
		copied.classList.add('textColor'); // добовляем класс видимости
		copied.innerHTML = `<div>Copied!</div>`; // добовляем строку элемнта
		document.querySelector('span.active').append(copied); // добовляем элемент в тело
		function deleteCopied() { // удаляем элемент через 1 секунды
			copied.remove();
		}
		setTimeout(deleteCopied, 1000);
	});


	tabsContent.addEventListener('dblclick', deletActivColor);

	function calcCouPlus() { // запускаем перебор гаммы в plus режима БЕЗ *span.active*
		counterPlus(arrStyleColor);
		correctGamma(arrayHueMain, arraySaturSleep, newArrayLight);
	}

	function calcCouMinus() { // запускаем перебор гаммы в minus режима БЕЗ *span.active*
		counterMinus(arrStyleColor);
		correctGamma(arrayHueMain, arraySaturSleep, newArrayLight);
	}

	function actCalcCouPus() { // запускаем перебор гаммы в *+* режима  *span.active*
		counterPlus(arrStyleColor);
		correctGamma(arrayHueMain, arraySaturSleep, newArrayLight);
	}

	function actCalcCouMinus() { // запускаем перебор гаммы в *-* режима *span.active*
		counterMinus(arrStyleColor);
		correctGamma(arrayHueMain, arraySaturSleep, newArrayLight);
	}

	
	//_______Buttuns_______///



	const containerButtons = document.querySelector('.container_buttons');
	containerButtons.addEventListener('click', (e) => {
		e.target.removeEventListener('click', activeColor);
	});

	icon.addEventListener('click', () => {

		shuffleArray(arrStyleColor);
		

	});

	editButtns[0].addEventListener('click', calcCouPlus);
	editButtns[1].addEventListener('click', calcCouMinus);

	var y = 0;

	function addColor() {
		let arryAddColor = [
			'<span class = color1 ></span>',
			'<span class = color2 ></span>',
			'<span class = color3 ></span>',
			'<span class = color4 ></span>',
			'<span class = color5 ></span>',
			'<span class = color6 ></span>',
			'<span class = color7 ></span>',
			'<span class = color8 ></span>'
		];

		if (y >= arryAddColor.length - 1) {
			y = 1;
		};
		y++;

		let newColor = $(arryAddColor[y]).insertAfter('span.active');
		$(newColor).css("background-color", `hsl(${arrayHueSleep[y]}, 
					${arraySaturSleep[y]}%, ${ arrayLight[y]}%)`);
	}

	editButtns[2].addEventListener('click', addColor);
	editButtns[3].addEventListener('click', () => {
		document.querySelector('span.active').style.display = 'none';
	});

	editButtns[4].addEventListener('click', () => {
		editButtns[4].classList.toggle('buttRotate90');

		tabsContent.classList.toggle('intro_1_row');

		if (tabsContent.classList.contains('intro_1_row')) {
			axisSort = 'x';
			$('span').css('height', 'auto', 'overflow-y', 'hidden');
			$(textColor).css('margin-left', '10px');
		} else {
			axisSort = 'y';
			$('span').css('width', 'auto', 'overflow-x', 'hidden');
			$(textColor).css('margin-left', '100px');
		}

	});

	//_______Tabs_________//

	function showTabsContent() {
		tabsContent.style.display = 'flex';
	}

	showTabsContent();

	correctGamma(arrayHueMain, arraySaturSleep, newArrayLight);

	//______ToolTip___________//
	$("[data-tooltip]").mousemove(function (eventObject) {

		let dataTooltip = $(this).attr("data-tooltip");

		$("#tooltip").text(dataTooltip)
			.css({
				"top": eventObject.pageY + 5,
				"left": eventObject.pageX + 5
			})
			.show();

	}).mouseout(function () {

		$("#tooltip").hide()
			.text("")
			.css({
				"top": 0,
				"left": 0
			});
	});

	/*______CalcColor____________________
	из выбранного цвета генерируется массив цветов в 
	8 параметрах тона и в 8 параметрах цвета_*/





	function correctGamma(gammaHue, gammaSat, gammaLight) {
		
	
	

		if (gammaLight[cou1] == 100) {
			$(tabsContent).children().css("background",
				`hsl(${gammaHue[cou1]}, ${50}%, ${ gammaLight[cou1] -11}%)`);
		} else if (gammaLight[cou1] == 0) {
			$(tabsContent).children().css("background",
				`hsl(${gammaHue[cou1]}, ${50}%, ${ gammaLight [cou1]+11}%)`);
		}
		
	
		
		if (gammaHue[cou1] >= 0 && gammaHue[cou1] <= 22) {
			$(arrStyleColor[0]).css("background-color", 
			    `hsl(${ gammaHue[cou1]}, ${ + gammaSat[cou1]}%, ${ gammaLight [cou1]}%)`);
			$(arrStyleColor[1]).css("background-color", 
			    `hsl(${ gammaHue[cou2]}, ${ + gammaSat[cou2]}%, ${ gammaLight [cou2]  }%)`);
			$(arrStyleColor[2]).css("background-color", 
			    `hsl(${ gammaHue[cou3]}, ${ + gammaSat[cou3]}%, ${ gammaLight [cou3]  }%)`);
			$(arrStyleColor[3]).css("background", 
			    `hsl(${ gammaHue[cou4]}, ${ + gammaSat[cou4]}%, ${ gammaLight [cou4] +10  }%)`);
			$(arrStyleColor[4]).css("background",
				`hsl(${ gammaHue[cou5]}, ${ + gammaSat[cou5]}%, ${ gammaLight [cou5]   }%)`);
			$(arrStyleColor[5]).css("background",
				`hsl(${ gammaHue[cou6]}, ${ + gammaSat[cou6]}%, ${ gammaLight [cou6]   }%)`);
			$(arrStyleColor[6]).css("background",
				`hsl(${ gammaHue[cou7]}, ${ + gammaSat[cou7]}%, ${ gammaLight [cou7]   }%)`);
			$(arrStyleColor[7]).css("background",
				`hsl(${ gammaHue[cou8]}, ${ + gammaSat[cou8]}%, ${ gammaLight [cou8]    }%)`);
		
		
	    } else if (gammaHue[cou1] >= 23 && gammaHue[cou1] <= 48) {
			$(tabsContent).children(arrStyleColor[0]).css("background",
				`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1]     }%, ${  gammaLight [0] -1 }%)`);
			$(tabsContent).children(arrStyleColor[1]).css("background",
				`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2]     }%, ${  gammaLight [1]  -2}%)`);
			$(tabsContent).children(arrStyleColor[2]).css("background",
				`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3]     }%, ${  gammaLight [2] -3 }%)`);
			$(tabsContent).children(arrStyleColor[3]).css("background",
				`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +10 }%, ${  gammaLight [3] +10 }%)`);
			$(tabsContent).children(arrStyleColor[4]).css("background",
				`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5]     }%, ${  gammaLight [4] -7 }%)`);
			$(tabsContent).children(arrStyleColor[5]).css("background",
				`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6]     }%, ${  gammaLight [5] }%)`);
			$(tabsContent).children(arrStyleColor[6]).css("background",
				`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7]     }%, ${  gammaLight [6]  }%)`);
			$(tabsContent).children(arrStyleColor[7]).css("background",
				`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8] +30 }%, ${  gammaLight [7]   }%)`);
		} else if (gammaHue[cou1] >= 49 && gammaHue[cou1] <= 93) {
			$(tabsContent).children(arrStyleColor[0]).css("background",
				`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1]     }%, ${  gammaLight [0] }%)`);
			$(tabsContent).children(arrStyleColor[1]).css("background",
				`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2]     }%, ${  gammaLight [1] }%)`);
			$(tabsContent).children(arrStyleColor[2]).css("background",
				`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3]     }%, ${  gammaLight [2] }%)`);
			$(tabsContent).children(arrStyleColor[3]).css("background",
				`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +35 }%, ${ +gammaLight [3] }%)`);
			$(tabsContent).children(arrStyleColor[4]).css("background",
				`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5] +5  }%, ${  gammaLight [4]}%)`);
			$(tabsContent).children(arrStyleColor[5]).css("background",
				`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6] +30 }%, ${  gammaLight [5] }%)`);
			$(tabsContent).children(arrStyleColor[6]).css("background",
				`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7] +5  }%, ${  gammaLight [6] }%)`);
			$(tabsContent).children(arrStyleColor[7]).css("background",
				`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8] +10 }%, ${  gammaLight [7]  }%)`);
		} else if (gammaHue[cou1] >= 94 && gammaHue[cou1] <= 158) {
			$(tabsContent).children(arrStyleColor[0]).css("background",
				`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1]     }%, ${  gammaLight [0] -1}%)`);
			$(tabsContent).children(arrStyleColor[1]).css("background",
				`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2]     }%, ${  gammaLight [1] -2}%)`);
			$(tabsContent).children(arrStyleColor[2]).css("background",
				`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3]     }%, ${  gammaLight [2] -5}%)`);
			$(tabsContent).children(arrStyleColor[3]).css("background",
				`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +20 }%, ${  gammaLight [3] }%)`);
			$(tabsContent).children(arrStyleColor[4]).css("background",
				`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5]     }%, ${  gammaLight [4] -7}%)`);
			$(tabsContent).children(arrStyleColor[5]).css("background",
				`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6]     }%, ${  gammaLight [5] }%)`);
			$(tabsContent).children(arrStyleColor[6]).css("background",
				`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7]     }%, ${  gammaLight [6] }%)`);
			$(tabsContent).children(arrStyleColor[7]).css("background",
				`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8]     }%, ${  gammaLight [7]  }%)`);
		} else if (gammaHue[cou1] >= 159 && gammaHue[cou1] <= 199) {
			$(tabsContent).children(arrStyleColor[0]).css("background",
				`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1]     }%, ${ gammaLight [0] -7 }%)`);
			$(tabsContent).children(arrStyleColor[1]).css("background",
				`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2]     }%, ${  gammaLight [1] -8 }%)`);
			$(tabsContent).children(arrStyleColor[2]).css("background",
				`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3]     }%, ${  gammaLight [2] -10}%)`);
			$(tabsContent).children(arrStyleColor[3]).css("background",
				`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +10 }%, ${  gammaLight [3] }%)`);
			$(tabsContent).children(arrStyleColor[4]).css("background",
				`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5] +10 }%, ${  gammaLight [4] -5}%)`);
			$(tabsContent).children(arrStyleColor[5]).css("background",
				`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6] +10 }%, ${  gammaLight [5] }%)`);
			$(tabsContent).children(arrStyleColor[6]).css("background",
				`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7] +20 }%, ${  gammaLight [6] }%)`);
			$(tabsContent).children(arrStyleColor[7]).css("background",
				`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8] +20 }%, ${  gammaLight [7]  }%)`);
		} else if (gammaHue[cou1] >= 200 && gammaHue[cou1] <= 241) {
			$(tabsContent).children(arrStyleColor[0]).css("background",
				`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1] +30 }%, ${  gammaLight [0] -4 }%)`);
			$(tabsContent).children(arrStyleColor[1]).css("background",
				`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2] +50 }%, ${  gammaLight [1]-3  }%)`);
			$(tabsContent).children(arrStyleColor[2]).css("background",
				`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3] +70 }%, ${  gammaLight [2]-3  }%)`);
			$(tabsContent).children(arrStyleColor[3]).css("background",
				`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +20 }%, ${  gammaLight [3] +8 }%)`);
			$(tabsContent).children(arrStyleColor[4]).css("background",
				`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5]     }%, ${  gammaLight [4] +1}%)`);
			$(tabsContent).children(arrStyleColor[5]).css("background",
				`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6] +5  }%, ${  gammaLight [5] +5 }%)`);
			$(tabsContent).children(arrStyleColor[6]).css("background",
				`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7] +10 }%, ${  gammaLight [6] +5 }%)`);
			$(tabsContent).children(arrStyleColor[7]).css("background",
				`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8] +20 }%, ${  gammaLight [7] +5  }%)`);
		} else if (gammaHue[cou1] >= 242 && gammaHue[cou1] <= 280) {
			$(tabsContent).children(arrStyleColor[0]).css("background",
				`hsl(${gammaHue[cou1]}, ${+ gammaSat[cou1] +20  }%, ${  gammaLight [0] -1}%)`);
			$(tabsContent).children(arrStyleColor[1]).css("background",
				`hsl(${gammaHue[cou2]}, ${+ gammaSat[cou2] +20  }%, ${  gammaLight [1] }%)`);
			$(tabsContent).children(arrStyleColor[2]).css("background",
				`hsl(${gammaHue[cou3]}, ${+ gammaSat[cou3] +30  }%, ${  gammaLight [2] +4}%)`);
			$(tabsContent).children(arrStyleColor[3]).css("background",
				`hsl(${gammaHue[cou4]}, ${+ gammaSat[cou4] +30  }%, ${  gammaLight [3] +25}%)`);
			$(tabsContent).children(arrStyleColor[4]).css("background",
				`hsl(${gammaHue[cou5]}, ${+ gammaSat[cou5] +30  }%, ${  gammaLight [4] +20 }%)`);
			$(tabsContent).children(arrStyleColor[5]).css("background",
				`hsl(${gammaHue[cou6]}, ${+ gammaSat[cou6] +30  }%, ${  gammaLight [5] +18}%)`);
			$(tabsContent).children(arrStyleColor[6]).css("background",
				`hsl(${gammaHue[cou7]}, ${+ gammaSat[cou7] +30  }%, ${  gammaLight [6] +15}%)`);
			$(tabsContent).children(arrStyleColor[7]).css("background",
				`hsl(${gammaHue[cou8]}, ${+ gammaSat[cou8] +30  }%, ${  gammaLight [7] +12 }%)`);
		} else if (gammaHue[cou1] >= 281 && gammaHue[cou1] <= 352) {
			$(tabsContent).children(arrStyleColor[0]).css("background",
				`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1]     }%, ${  gammaLight [0] -1 }%)`);
			$(tabsContent).children(arrStyleColor[1]).css("background",
				`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2]     }%, ${  gammaLight [1]  }%)`);
			$(tabsContent).children(arrStyleColor[2]).css("background",
				`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3] +10 }%, ${  gammaLight [2]  }%)`);
			$(tabsContent).children(arrStyleColor[3]).css("background",
				`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +10 }%, ${  gammaLight [3] +5 }%)`);
			$(tabsContent).children(arrStyleColor[4]).css("background",
				`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5]     }%, ${  gammaLight [4]  }%)`);
			$(tabsContent).children(arrStyleColor[5]).css("background",
				`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6]     }%, ${  gammaLight [5] +6}%)`);
			$(tabsContent).children(arrStyleColor[6]).css("background",
				`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7]     }%, ${  gammaLight [6] +6 }%)`);
			$(tabsContent).children(arrStyleColor[7]).css("background",
				`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8] -5  }%, ${  gammaLight [7] +5  }%)`);
		} else if (gammaHue[cou1] >= 353 && gammaHue[cou1] <= 360) {
			$(tabsContent).children(arrStyleColor[0]).css("background",
				`hsl(${gammaHue[cou1]}, ${gammaSat[cou1]     }%, ${  gammaLight [0]  }%)`);
			$(tabsContent).children(arrStyleColor[1]).css("background",
				`hsl(${gammaHue[cou2]}, ${gammaSat[cou2]     }%, ${  gammaLight [1]  }%)`);
			$(tabsContent).children(arrStyleColor[2]).css("background",
				`hsl(${gammaHue[cou3]}, ${gammaSat[cou3]     }%, ${  gammaLight [2]  }%)`);
			$(tabsContent).children(arrStyleColor[3]).css("background",
				`hsl(${gammaHue[cou4]}, ${gammaSat[cou4]     }%, ${  gammaLight [3] +18 }%)`);
			$(tabsContent).children(arrStyleColor[4]).css("background",
				`hsl(${gammaHue[cou5]}, ${gammaSat[cou5]     }%, ${  gammaLight [4] +5 }%)`);
			$(tabsContent).children(arrStyleColor[5]).css("background",
				`hsl(${gammaHue[cou6]}, ${gammaSat[cou6]     }%, ${  gammaLight [5]  }%)`);
			$(tabsContent).children(arrStyleColor[6]).css("background",
				`hsl(${gammaHue[cou7]}, ${gammaSat[cou7]     }%, ${  gammaLight [6]  }%)`);
			$(tabsContent).children(arrStyleColor[7]).css("background",
				`hsl(${gammaHue[cou8]}, ${gammaSat[cou8]     }%, ${  gammaLight [7]   }%)`);
		}
// gammaLight[0] =  result[2];
// 		gammaLight[1] = gammaLight[0] - 3;
// 		gammaLight[2] = gammaLight[1] -13;
// 		gammaLight[3] = gammaLight[2] -33;
// 		gammaLight[4] = gammaLight[3] -3;
// 		gammaLight[5] = gammaLight[4] -21;
// 		gammaLight[6] = gammaLight[5] -8;
// 		gammaLight[7] = gammaLight[6] -5;

		$('span.active').css('background-color', `hsl(${result[0]}, ${result[1]}%, ${result[2]}%)`);
		return gammaHue, gammaSat, gammaLight;

	}


	function randomInteger(min, max) {
		// случайное число от min до (max+1)
		let rand = min + Math.random() * (max - min);
		return Math.floor(rand);
	}

	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}

	//___COUNTER____///
	function counterPlus(a) {
		cou1++;
		cou2++;
		cou3++;
		cou4++;
		cou5++;
		cou6++;
		cou7++;
		cou8++;
		if (cou1 > a.length - 1) {
			cou1 = 0;
		}
		if (cou2 > a.length - 1) {
			cou2 = 0;
		}
		if (cou3 > a.length - 1) {
			cou3 = 0;
		}
		if (cou4 > a.length - 1) {
			cou4 = 0;
		}
		if (cou5 > a.length - 1) {
			cou5 = 0;
		}
		if (cou6 > a.length - 1) {
			cou6 = 0;
		}
		if (cou7 > a.length - 1) {
			cou7 = 0;
		}
		if (cou8 > a.length - 1) {
			cou8 = 0;
		}

		return a;
	}

	function counterMinus(a) {
		cou1--;
		cou2--;
		cou3--;
		cou4--;
		cou5--;
		cou6--;
		cou7--;
		cou8--;
		if (cou1 < 0) {
			cou1 = a.length - 1;
		}
		if (cou2 < 0) {
			cou2 = a.length - 1;
		}
		if (cou3 < 0) {
			cou3 = a.length - 1;
		}
		if (cou4 < 0) {
			cou4 = a.length - 1;
		}
		if (cou5 < 0) {
			cou5 = a.length - 1;
		}
		if (cou6 < 0) {
			cou6 = a.length - 1;
		}
		if (cou7 < 0) {
			cou7 = a.length - 1;
		}
		if (cou8 < 0) {
			cou8 = a.length - 1;
		}

		return a;
	}


	// function wheel() {
	// window.addEventListener("mousewheel", function (e) {

	// 	if (e.wheelDelta / 120 > 0) {
	// 		calcColor(cou++, cou1++, cou2++);
	// 		console.log('plus');
	// 	} else {
	// 		calcColor(cou--, cou1--, cou2--);
	// 		console.log('minus');
	// 	}
	// });
	// }
	// wheel();




	//______SORTABLE_______////

	let axisSort = 'y';

	function sorTable(event) {
		if (event.clientX > 0 && event.clientX < 30 ||
			event.clientY > 115 && event.clientY < 145) {
			document.documentElement.style.cursor = "move";
			$(function () {
				$('div').sortable({
					"disabled": false,
					axis: axisSort
				});
			});
		} else {
			document.documentElement.style.cursor = "default";
			$(function () {
				$('div').sortable({
					"disabled": true
				});
			});
		}
	}

	window.addEventListener('mousemove', sorTable);

	///____Convert RGB to HEX______////

	function rgbToHex(red, green, blue) {
		const rgb = (red << 16) | (green << 8) | (blue << 0);
		return '#' + (0x1000000 + rgb).toString(16).slice(1);
	}

	function rgba2hex(r, g, b, a) {
		if (r > 255 || g > 255 || b > 255 || a > 255)
			throw "Invalid color component";
		return (256 + r).toString(16).substr(1) + ((1 << 24) + (g << 16) | (b << 8) | a).toString(16).substr(1);
	}

	function rgb2hex(rgb) {

		// Choose correct separator
		let sep = rgb.indexOf(",") > -1 ? "," : " ";
		// Turn "rgb(r,g,b)" into [r,g,b]
		rgb = rgb.substr(4).split(")")[0].split(sep);

		let r = (+rgb[0]).toString(16),
			g = (+rgb[1]).toString(16),
			b = (+rgb[2]).toString(16);

		if (r.length == 1) {
			r = "0" + r
		}
		if (g.length == 1) {
			g = "0" + g
		}
		if (b.length == 1) {
			b = "0" + b
		}
		return r + g + b;
	}

	///____Convert RGB to HSL______////


	function RGB2HSL(r, g, b) {

		r /= 255;
		g /= 255;
		b /= 255;
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;

		if (delta == 0) {
			h = 0;
		} else if (cmax == r) {
			h = ((g - b) / delta) % 6;
		} else if (cmax == g) {
			h = (b - r) / delta + 2;
		} else {
			h = (r - g) / delta + 4;
		}

		h = Math.round(h * 60);

		if (h < 0) {
			h += 360;
		}

		l = (cmax + cmin) / 2;
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);

		return "hsl(" + h + "," + s + "%," + l + "%)";

	}

	//______Swip_________//

	let clickStartX = 0;
	let clickStartY = 0;
	let clickEndX = 0;
	let clickEndY = 0;


	tabsContent.addEventListener('mouseover', (e) => {

		const target = e.target;

		target.addEventListener('mousedown', function (event) {

			clickStartX = event.clientX;
			clickStartY = event.clientY;

			// console.log(event)
		}, false);

		target.addEventListener('mouseup', function (event) {

			clickEndX = event.clientX;
			clickEndY = event.clientY;

			handleGesure();

		}, false);

	});


	function handleGesure() {
		let xAbs = Math.abs(clickStartX - clickEndX);
		let yAbs = Math.abs(clickStartY - clickEndY);

		sliceColor();

		if (xAbs > 10 || yAbs > 10) {

			if (xAbs > yAbs) {
				if (clickEndX < clickStartX && result[2] < 94) {
					// counterPlus(spaRoomColor1);

					$('span.active').css('backgroundColor',
						`hsl(${+ result[0]}, ${+ result[1]}%, ${ + result[2] +5 }%)`);

					console.log('left');
				} else if (result[2] > 10) {
					counterMinus(arrayHueMain);
					// $('span.active').css('backgroundColor', 
					// `hsl(${+ result[0]}, ${+ result[1] }%, ${ + result[2] - 5 }%)`);

					console.log('right');
				}
			} else {
				if (clickEndY < clickStartY) {
					$('span.active').css('backgroundColor',
						`hsl(${ + result[0] + 15}, ${result[1]}%, ${result[2] }%)`);
					console.log(result[0]);
					console.log('up');
				} else {
					$('span.active').css('backgroundColor',
						`hsl(${result[0] - 15}, ${result[1]}%, ${result[2] }%)`);
					console.log(result[0]);
					console.log('down');
				}
			}
		}
	}


	var initialPoint;
	var finalPoint;

	tabsContent.addEventListener('touchstart', function (event) {
		event.preventDefault();
		event.stopPropagation();
		initialPoint = event.changedTouches[0];
	}, false);

	tabsContent.addEventListener('touchend', function (event) {
		event.preventDefault();
		event.stopPropagation();
		finalPoint = event.changedTouches[0];
		var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
		var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
		if (xAbs > 10 || yAbs > 10) {
			if (xAbs > yAbs) {
				if (finalPoint.pageX < initialPoint.pageX) {

					console.log('left!');
				} else {
					console.log('right!'); /*СВАЙП ВПРАВО*/
				}
			} else {
				if (finalPoint.pageY < initialPoint.pageY) {
					// calcColor(cou++, cou1++, cou2++);
					console.log('up!');
				} else {
					// calcColor(cou--, cou1--, cou2--);
					console.log('down_!');
				}
			}
		}
	}, false);


	let arrayHueGost = [15, 27, 15, 94, 48, 43, 38, 48];
	let arraySaturGost = [20, 85, 50, 10, 50, 20, 50, 50];


	let arrayHueKitch = [350, 15, 350, 58, 15, 94, 27, 15];
	let arraySaturKitch = [100, 5, 20, 10, 20, 15, 60, 50];


	let arrayHueKids = [22, 48, 43, 94, 159, 48, 48, 353, ];
	let arraySaturKids = [100, 100, 100, 70, 80, 80, 100, 80];
	let arrayLightKids = [95, 92, 79, 46, 43, 43, 79, 92];

	let arrayHueCab = [252, 169, 246, 152, 98, 200, 217, 190, ];
	let arraySaturCab = [5, 5, 5, 5, 0, 5, 5, 5];
	let arrayLightCad = [95, 92, 92, 46, 27, 14, 14, 4];

	let arrayHueHoll = [15, 27, 15, 94, 48, 43, 38, 48];
	let arraySaturHoll = [10, 25, 20, 5, 0, 5, 5, 5];
	let arrayLightHoll = [95, 92, 97, 46, 79, 79, 28, 4];

	// ХОРОШАЯ ГАММА 
	// H_2 = H_1 - 100; S_2 = 100;	L_2 =  L_1 + 3;
	// H_3 = H_1 - 180;	S_3 = 32;	L_3 = 14;


	// let colAct = document.querySelector('.color.active');

	// let  coco = RGB2HSL(colAct);

	// coco = `hsl(${4}, ${54}%, ${45}%)`;

	// colActh = 360, s = 100, l = 50

	// let h = 360, s = 100, l = 50 ;

	  function randomInteger2(min, max) {
		// случайное число от min до (max+1)
		let rand = min + Math.random() * (max  - min);
		return Math.floor(rand);
	  }

	 randomInteger2(0, 100);


	// if (h >= 30 && h <=100) {
	// 	s -=  10,
	// 	l -= 20;

	// };



	// function generateHslaColors (saturation, lightness, alpha, amount) {
	// 	let colorsQ = []
	// 	let huedelta = Math.trunc(360 / amount)

	// 	for (let i = 0; i < amount; i++) {
	// 	  let hue = i * huedelta
	// 	  colorsQ.style.backgroundColor = `hsla(${hue},${saturation}%,${lightness}%,${alpha})`;
	// 	}

	// 	console.log(colorsQ);
	// };
	// generateHslaColors(100, 50, 50);



});