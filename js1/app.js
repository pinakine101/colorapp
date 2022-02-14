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
	let tabsContent = document.querySelectorAll(".intro_1"); //содержимое в ТАБЕ
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
	let forslice;
	let mainColor;


	let arrStyleColor = [
		'.color1',
		'.color2',
		'.color3',
		'.color4',
		'.color5',
		'.color6',
		'.color9',
		'.color8'
	];

	let arrayHueMain = [353, 22, 48, 94, 159, 200, 242, 281];
	let arrayLight = [95, 92, 79, 46, 43, 22, 14, 9];


	let arrayHueSleep = [150, 190, 210, 190, 70, 48, 70, 180];
	let arraySaturSleep = [20, 55, 50, 50, 70, 20, 10, 5];
	let arrayLightSleep = [95, 92, 79, 46, 43, 43, 79, 92];


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

		//______ColorPicker_________//

		let deleteColPick = function () {
			$('.colorpickerHolder').remove();
		};
	
		tabsContent.forEach(function (color) {
			color.addEventListener("contextmenu", colorPicker);
			color.addEventListener("click", deleteColPick);
		});
	
		$(tabsContent).on("contextmenu", false);
	
	
	
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

	// sliceColor()
	// let  newArrLight = arrayLight.map(function(item){
	// 	// sliceColor(spanActive);
	// 	let delta;
	// 	if(result[2]<= 100 && result[2] > 97){item[i] = 100 - (result[2])}
	// 	else if(result[2] <= 13 && result[2] >= 0) {item[i]= 0}

	// 	else if(result[2] <= item[0]  && result[2] >=  item[1])   {item[0] -(result[2]/8)}
	// 	else if(result[2] <= item[1]  && result[2] >=  item[2])   {item[1] -(result[2]/8)}
	// 	else if(result[2] <= item[2]  && result[2] >=  item[3])   {item[2] -(result[2]/8)}
	// 	else if(result[2] <= item[3]  && result[2] >=  item[4])   {item[3] -(result[2]/8)}
	// 	else if(result[2] <= item[4]  && result[2] >=  item[5])   {item[4] -(result[2]/8)}
	// 	else if(result[2] <= item[5]  && result[2] >=  item[6])   {item[5] -(result[2]/8)}
	// 	else if(result[2] <= item[6]  && result[2] >=  item[7])   {item[6] -(result[2]/8)}
	// 	else if(result[2] <= item[7]  && result[2] >=  item[0])   {item[7] -(result[2]/8)}

	// return item - 5;
	// });


	// let newArrHue= arrayHueMain.map((item)=>{
	// 	return item + (result[0])
	// });



	//______Active Color_________//


	function findColorName(e) {
		// находим в активном табе активный цвет 
		tabsContent.forEach((item, i) => {
			if (tabsBtn[i].classList.contains('active')) {
				let color = $('span.active').css("background-color");
				//помещаем в  переменную *textColorBuffer*  имя HEX активного цвета
				textColorBuffer = rgb2hex(color);
				sliceColor();
			}
		});
	}

	function activeColor(e) { //функионал режима *span.active*
		let spanActive = document.querySelector('span.active');
		const target = e.target; //получаем элемент клика	
		let activeImg = $(target).children('img');
		//если клик не на *span.active* убираем класс *active, скрываем контейнер с именем цвета
		if (!target.classList.contains("active")) {
			target.classList.remove("active");
			$(spanActive).removeClass('active');
			$(tabsContent).children().removeClass('active');
			target.parentNode.classList.remove('active');
			textColor.classList.remove('textColor');
		}

		target.classList.add('active');

		if (target.classList.contains('loadImg')) {
			$('.loadImg').removeClass('active');
			target.parentNode.classList.add('active');
		}

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

	tabsContent.forEach(function (item, i) { // вешаем на контейнер с цветами фунцию активного цвета
		item.addEventListener('click', activeColor);
	});

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

	tabsContent.forEach(function (item) { // вешаем функцию режима БЕЗ *span.active*
		item.addEventListener('dblclick', deletActivColor);
	});


	function calcCouPlus() { // запускаем перебор гаммы в plus режима БЕЗ *span.active*
		counterPlus(arrStyleColor);
		separateGamms();
	}

	function calcCouMinus() { // запускаем перебор гаммы в minus режима БЕЗ *span.active*
		counterMinus(arrStyleColor);
		separateGamms();
	}

	function actCalcCouPus() { // запускаем перебор гаммы в *+* режима  *span.active*
		counterPlus(arrStyleColor);
		separateGamms();

	}

	function actCalcCouMinus() { // запускаем перебор гаммы в *-* режима *span.active*

		counterMinus(arrStyleColor);
		separateGamms();

	}
	//_______Buttuns_______///



	const containerButtons = document.querySelector('.container_buttons');
	containerButtons.addEventListener('click', (e) => {
		e.target.removeEventListener('click', activeColor);
	});

	icon.addEventListener('click', () => {
		
		shuffleArray(arrStyleColor);
		shuffleArray(arrayHueSleep);
		shuffleArray(arraySaturSleep);

	});

	editButtns[0].addEventListener('click', calcCouPlus);
	editButtns[1].addEventListener('click', calcCouMinus);

	var y = 0;

	function addColor() {
		let arryAddColor = [
			'<span class = color1 ><img class="loadImg"></span>',
			'<span class = color2 ><img class="loadImg"></span>',
			'<span class = color3 ><img class="loadImg"></span>',
			'<span class = color4 ><img class="loadImg"></span>',
			'<span class = color5 ><img class="loadImg"></span>',
			'<span class = color6 ><img class="loadImg"></span>',
			'<span class = color7 ><img class="loadImg"></span>',
			'<span class = color8 ><img class="loadImg"></span>'
		];

		tabsContent.forEach((item, i) => {
			if (tabsBtn[i].classList.contains('active')) {
				if (y >= arryAddColor.length - 1) {
					y = 1;
				}
				counterPlus(arrayHueMain);
				y++;

				let newColor = $(arryAddColor[y]).insertAfter('span.active');
				if (tabsBtn[0].classList.contains('active')) {
					$(newColor).css("background-color", `hsl(${arrayHueSleep[y]}, 
							${arraySaturSleep[y]}%, ${ arrayLight[y]}%)`);
				}
				if (tabsBtn[1].classList.contains('active')) {
					$(newColor).css("background-color", `hsl(${arrayHueGost[cou1]},
							 ${arraySaturGost[cou1]}%, ${ arrayLight[cou1]}%)`);
				}
				if (tabsBtn[2].classList.contains('active')) {
					$(newColor).css("background-color", `hsl(${arrayHueKitch[cou1]}, 
							${arraySaturKitch[cou1]}%, ${ arrayLight[cou1]}%)`);
				}
				if (tabsBtn[3].classList.contains('active')) {
					$(newColor).css("background-color", `hsl(${ arrayHueKids[cou1]}, 
							${arraySaturKids[cou1]}%, ${ arrayLight[cou1]}%)`);
				}
				if (tabsBtn[4].classList.contains('active')) {
					$(newColor).css("background-color", `hsl(${arrayHueGost[cou1]},
							 ${arraySaturGost[cou1]}%, ${ arrayLight[cou1]}%)`);
				}
				if (tabsBtn[5].classList.contains('active')) {
					$(newColor).css("background-color", `hsl(${arrayHueGost[cou1]}, 
							${arraySaturGost[cou1]}%, ${ arrayLight[cou1]}%)`);
				}
				if (tabsBtn[6].classList.contains('active')) {
					$(newColor).css("background-color", `hsl(${arrayHueGost[cou1]}, 
							${arraySaturGost[cou1]}%, ${ arrayLight[cou1]}%)`);
				}

			}
		});
	}

	editButtns[2].addEventListener('click', addColor);

	editButtns[3].addEventListener('click', () => {
		document.querySelector('span.active').style.display = 'none';
	});

	editButtns[4].addEventListener('click', () => {
		editButtns[4].classList.toggle('buttRotate90');
		tabsContent.forEach((i) => {
			i.classList.toggle('intro_1_row');
			if (i.classList.contains('intro_1_row')) {
				axisSort = 'x';
				$('span').css('height', 'auto', 'overflow-y', 'hidden');
				// $('.color2').css('width', '35.4%', 'overflow-x', 'hidden');
				// $('.color6').css('width', '9.1%', 'overflow-x', 'hidden');
				// $('.color5').css('width', '19%', 'overflow-x', 'hidden');
				// $('.loadImg').css('width', '100vw', ' height', '100vw');

				$(textColor).css('margin-left', '10px');
			} else {
				axisSort = 'y';
				$('span').css('width', 'auto', 'overflow-x', 'hidden');

				$(i).children('span').css('height', '');
				$(textColor).css('margin-left', '100px');
			}

		});
	});





	//_______Tabs_________//

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});
		tabsBtn.forEach(item => {
			item.classList.remove('active');
		});
	}

	function showTabsContent(i) {
		tabsContent[i].style.display = 'flex';
		tabsBtn[i].classList.add('active');

	}
	// coloring();
	hideTabContent();
	showTabsContent(0);
	// actColorCalc(color1, arrayHue, arraySaturSleep, arrayLight, counterPlus)
	// // 

	function clickTabsBtn(event) {

		let target = event.target;
		if (target && target.classList.contains('tabs__nav-btn')) {
			tabsBtn.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabsContent(i);
				}
			});
		}

	}

	counterPlus(arrStyleColor);


	if (tabsContent[0].getAttribute('id') == 'sleepRoom') {
		correctGamma(arrayHueSleep, arraySaturSleep, arrayLightSleep);
	}
	$(tabsBtn).on('click', clickTabsBtn);



	function separateGamms() {

		if (tabsBtn[0].classList.contains('active')) {
			correctGamma(arrayHueSleep, arraySaturSleep, arrayLightSleep);
		} else if (tabsBtn[1].classList.contains('active')) {
			correctGamma(arrayHueGost, arraySaturGost, arrayLight);
		} else if (tabsBtn[2].classList.contains('active')) {
			correctGamma(arrayHueKitch, arraySaturKitch, arrayLight);
		} else if (tabsBtn[3].classList.contains('active')) {
			correctGamma(arrayHueKids, arraySaturKids, arrayLightKids);
		} else if (tabsBtn[4].classList.contains('active')) {
			correctGamma(arrayHueCab, arraySaturCab, arrayLightCad);
		} else if (tabsBtn[5].classList.contains('active')) {
			correctGamma(arrayHueHoll, arraySaturHoll, arrayLightHoll);
		} else if (tabsBtn[6].classList.contains('active')) {
			correctGamma(arrayHueHoll, arraySaturHoll, arrayLightCad);
		}
	}

	function onClickTab(e) {
		e.addEventListener('click', () => {
			separateGamms();
		}, {
			once: true
		});
		return e;
	}
	onClickTab(tabsBtn[1]);
	onClickTab(tabsBtn[2]);
	onClickTab(tabsBtn[3]);
	onClickTab(tabsBtn[4]);
	onClickTab(tabsBtn[5]);
	onClickTab(tabsBtn[6]);




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



	function sliceColor() {
		let actCol = document.querySelector('span.active');
		$(actCol).each(function () {
			const color = $(this).css("backgroundColor"),
				[r, g, b] = color.match(/\d+/g);
			const colHsl = RGB2HSL(r, g, b);
			result = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(colHsl).slice(1);

			return result;
		});
		// return e;

	}

	function correctGamma(gammaHue, gammaSat, gammaLight) {

		tabsContent.forEach((item, i) => {

			if (tabsBtn[i].classList.contains('active')) {

				if (gammaHue[cou1] >= 0 && gammaHue[cou1] <= 22) {
					$(tabsContent[i]).children(arrStyleColor[0]).css("background",
						`hsl(${ gammaHue[cou1]}, ${ + gammaSat[cou1]}%, ${ gammaLight [0]  }%)`);
					$(tabsContent[i]).children(arrStyleColor[1]).css("background",
						`hsl(${ gammaHue[cou2]}, ${ + gammaSat[cou2]}%, ${ gammaLight [1]   }%)`);
					$(tabsContent[i]).children(arrStyleColor[2]).css("background",
						`hsl(${ gammaHue[cou3]}, ${ + gammaSat[cou3]}%, ${ gammaLight [2] +3  }%)`);
					$(tabsContent[i]).children(arrStyleColor[3]).css("background",
						`hsl(${ gammaHue[cou4]}, ${ + gammaSat[cou4]}%, ${ gammaLight [3] +10  }%)`);
					$(tabsContent[i]).children(arrStyleColor[4]).css("background",
						`hsl(${ gammaHue[cou5]}, ${ + gammaSat[cou5]}%, ${ gammaLight [4]   }%)`);
					$(tabsContent[i]).children(arrStyleColor[5]).css("background",
						`hsl(${ gammaHue[cou6]}, ${ + gammaSat[cou6]}%, ${ gammaLight [5]   }%)`);
					$(tabsContent[i]).children(arrStyleColor[6]).css("background",
						`hsl(${ gammaHue[cou7]}, ${ + gammaSat[cou7]}%, ${ gammaLight [6]   }%)`);
					$(tabsContent[i]).children(arrStyleColor[7]).css("background",
						`hsl(${ gammaHue[cou8]}, ${ + gammaSat[cou8]}%, ${ gammaLight [7]    }%)`);
				} else if (gammaHue[cou1] >= 23 && gammaHue[cou1] <= 48) {
					$(tabsContent[i]).children(arrStyleColor[0]).css("background",
						`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1]     }%, ${  gammaLight [0] -1 }%)`);
					$(tabsContent[i]).children(arrStyleColor[1]).css("background",
						`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2]     }%, ${  gammaLight [1]  -2}%)`);
					$(tabsContent[i]).children(arrStyleColor[2]).css("background",
						`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3]     }%, ${  gammaLight [2] -3 }%)`);
					$(tabsContent[i]).children(arrStyleColor[3]).css("background",
						`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +10 }%, ${  gammaLight [3] +10 }%)`);
					$(tabsContent[i]).children(arrStyleColor[4]).css("background",
						`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5]     }%, ${  gammaLight [4] -7 }%)`);
					$(tabsContent[i]).children(arrStyleColor[5]).css("background",
						`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6]     }%, ${  gammaLight [5] }%)`);
					$(tabsContent[i]).children(arrStyleColor[6]).css("background",
						`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7]     }%, ${  gammaLight [6]  }%)`);
					$(tabsContent[i]).children(arrStyleColor[7]).css("background",
						`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8] +30 }%, ${  gammaLight [7]   }%)`);
				} else if (gammaHue[cou1] >= 49 && gammaHue[cou1] <= 93) {
					$(tabsContent[i]).children(arrStyleColor[0]).css("background",
						`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1]     }%, ${  gammaLight [0] }%)`);
					$(tabsContent[i]).children(arrStyleColor[1]).css("background",
						`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2]     }%, ${  gammaLight [1] }%)`);
					$(tabsContent[i]).children(arrStyleColor[2]).css("background",
						`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3]     }%, ${  gammaLight [2] }%)`);
					$(tabsContent[i]).children(arrStyleColor[3]).css("background",
						`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +35 }%, ${ +gammaLight [3] }%)`);
					$(tabsContent[i]).children(arrStyleColor[4]).css("background",
						`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5] +5  }%, ${  gammaLight [4]}%)`);
					$(tabsContent[i]).children(arrStyleColor[5]).css("background",
						`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6] +30 }%, ${  gammaLight [5] }%)`);
					$(tabsContent[i]).children(arrStyleColor[6]).css("background",
						`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7] +5  }%, ${  gammaLight [6] }%)`);
					$(tabsContent[i]).children(arrStyleColor[7]).css("background",
						`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8] +10 }%, ${  gammaLight [7]  }%)`);
				} else if (gammaHue[cou1] >= 94 && gammaHue[cou1] <= 158) {
					$(tabsContent[i]).children(arrStyleColor[0]).css("background",
						`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1]     }%, ${  gammaLight [0] -1}%)`);
					$(tabsContent[i]).children(arrStyleColor[1]).css("background",
						`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2]     }%, ${  gammaLight [1] -2}%)`);
					$(tabsContent[i]).children(arrStyleColor[2]).css("background",
						`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3]     }%, ${  gammaLight [2] -5}%)`);
					$(tabsContent[i]).children(arrStyleColor[3]).css("background",
						`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +20 }%, ${  gammaLight [3] }%)`);
					$(tabsContent[i]).children(arrStyleColor[4]).css("background",
						`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5]     }%, ${  gammaLight [4] -7}%)`);
					$(tabsContent[i]).children(arrStyleColor[5]).css("background",
						`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6]     }%, ${  gammaLight [5] }%)`);
					$(tabsContent[i]).children(arrStyleColor[6]).css("background",
						`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7]     }%, ${  gammaLight [6] }%)`);
					$(tabsContent[i]).children(arrStyleColor[7]).css("background",
						`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8]     }%, ${  gammaLight [7]  }%)`);
				} else if (gammaHue[cou1] >= 159 && gammaHue[cou1] <= 199) {
					$(tabsContent[i]).children(arrStyleColor[0]).css("background",
						`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1]     }%, ${ gammaLight [0] -7 }%)`);
					$(tabsContent[i]).children(arrStyleColor[1]).css("background",
						`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2]     }%, ${  gammaLight [1] -8 }%)`);
					$(tabsContent[i]).children(arrStyleColor[2]).css("background",
						`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3]     }%, ${  gammaLight [2] -10}%)`);
					$(tabsContent[i]).children(arrStyleColor[3]).css("background",
						`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +10 }%, ${  gammaLight [3] }%)`);
					$(tabsContent[i]).children(arrStyleColor[4]).css("background",
						`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5] +10 }%, ${  gammaLight [4] -5}%)`);
					$(tabsContent[i]).children(arrStyleColor[5]).css("background",
						`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6] +10 }%, ${  gammaLight [5] }%)`);
					$(tabsContent[i]).children(arrStyleColor[6]).css("background",
						`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7] +20 }%, ${  gammaLight [6] }%)`);
					$(tabsContent[i]).children(arrStyleColor[7]).css("background",
						`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8] +20 }%, ${  gammaLight [7]  }%)`);
				} else if (gammaHue[cou1] >= 200 && gammaHue[cou1] <= 241) {
					$(tabsContent[i]).children(arrStyleColor[0]).css("background",
						`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1] +30 }%, ${  gammaLight [0] -4 }%)`);
					$(tabsContent[i]).children(arrStyleColor[1]).css("background",
						`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2] +50 }%, ${  gammaLight [1]-3  }%)`);
					$(tabsContent[i]).children(arrStyleColor[2]).css("background",
						`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3] +70 }%, ${  gammaLight [2]-3  }%)`);
					$(tabsContent[i]).children(arrStyleColor[3]).css("background",
						`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +20 }%, ${  gammaLight [3] +8 }%)`);
					$(tabsContent[i]).children(arrStyleColor[4]).css("background",
						`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5]     }%, ${  gammaLight [4] +1}%)`);
					$(tabsContent[i]).children(arrStyleColor[5]).css("background",
						`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6] +5  }%, ${  gammaLight [5] +5 }%)`);
					$(tabsContent[i]).children(arrStyleColor[6]).css("background",
						`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7] +10 }%, ${  gammaLight [6] +5 }%)`);
					$(tabsContent[i]).children(arrStyleColor[7]).css("background",
						`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8] +20 }%, ${  gammaLight [7] +5  }%)`);
				} else if (gammaHue[cou1] >= 242 && gammaHue[cou1] <= 280) {
					$(tabsContent[i]).children(arrStyleColor[0]).css("background",
						`hsl(${gammaHue[cou1]}, ${+ gammaSat[cou1] +20  }%, ${  gammaLight [0] -1}%)`);
					$(tabsContent[i]).children(arrStyleColor[1]).css("background",
						`hsl(${gammaHue[cou2]}, ${+ gammaSat[cou2] +20  }%, ${  gammaLight [1] }%)`);
					$(tabsContent[i]).children(arrStyleColor[2]).css("background",
						`hsl(${gammaHue[cou3]}, ${+ gammaSat[cou3] +30  }%, ${  gammaLight [2] +4}%)`);
					$(tabsContent[i]).children(arrStyleColor[3]).css("background",
						`hsl(${gammaHue[cou4]}, ${+ gammaSat[cou4] +30  }%, ${  gammaLight [3] +25}%)`);
					$(tabsContent[i]).children(arrStyleColor[4]).css("background",
						`hsl(${gammaHue[cou5]}, ${+ gammaSat[cou5] +30  }%, ${  gammaLight [4] +20 }%)`);
					$(tabsContent[i]).children(arrStyleColor[5]).css("background",
						`hsl(${gammaHue[cou6]}, ${+ gammaSat[cou6] +30  }%, ${  gammaLight [5] +18}%)`);
					$(tabsContent[i]).children(arrStyleColor[6]).css("background",
						`hsl(${gammaHue[cou7]}, ${+ gammaSat[cou7] +30  }%, ${  gammaLight [6] +15}%)`);
					$(tabsContent[i]).children(arrStyleColor[7]).css("background",
						`hsl(${gammaHue[cou8]}, ${+ gammaSat[cou8] +30  }%, ${  gammaLight [7] +12 }%)`);
				} else if (gammaHue[cou1] >= 281 && gammaHue[cou1] <= 352) {
					$(tabsContent[i]).children(arrStyleColor[0]).css("background",
						`hsl(${gammaHue[cou1]}, ${ + gammaSat[cou1]     }%, ${  gammaLight [0] -1 }%)`);
					$(tabsContent[i]).children(arrStyleColor[1]).css("background",
						`hsl(${gammaHue[cou2]}, ${ + gammaSat[cou2]     }%, ${  gammaLight [1]  }%)`);
					$(tabsContent[i]).children(arrStyleColor[2]).css("background",
						`hsl(${gammaHue[cou3]}, ${ + gammaSat[cou3] +10 }%, ${  gammaLight [2]  }%)`);
					$(tabsContent[i]).children(arrStyleColor[3]).css("background",
						`hsl(${gammaHue[cou4]}, ${ + gammaSat[cou4] +10 }%, ${  gammaLight [3] +5 }%)`);
					$(tabsContent[i]).children(arrStyleColor[4]).css("background",
						`hsl(${gammaHue[cou5]}, ${ + gammaSat[cou5]     }%, ${  gammaLight [4]  }%)`);
					$(tabsContent[i]).children(arrStyleColor[5]).css("background",
						`hsl(${gammaHue[cou6]}, ${ + gammaSat[cou6]     }%, ${  gammaLight [5] +6}%)`);
					$(tabsContent[i]).children(arrStyleColor[6]).css("background",
						`hsl(${gammaHue[cou7]}, ${ + gammaSat[cou7]     }%, ${  gammaLight [6] +6 }%)`);
					$(tabsContent[i]).children(arrStyleColor[7]).css("background",
						`hsl(${gammaHue[cou8]}, ${ + gammaSat[cou8] -5  }%, ${  gammaLight [7] +5  }%)`);
				} else if (gammaHue[cou1] >= 353 && gammaHue[cou1] <= 360) {
					$(tabsContent[i]).children(arrStyleColor[0]).css("background",
						`hsl(${gammaHue[cou1]}, ${gammaSat[cou1]     }%, ${  gammaLight [0]  }%)`);
					$(tabsContent[i]).children(arrStyleColor[1]).css("background",
						`hsl(${gammaHue[cou2]}, ${gammaSat[cou2]     }%, ${  gammaLight [1]  }%)`);
					$(tabsContent[i]).children(arrStyleColor[2]).css("background",
						`hsl(${gammaHue[cou3]}, ${gammaSat[cou3]     }%, ${  gammaLight [2]  }%)`);
					$(tabsContent[i]).children(arrStyleColor[3]).css("background",
						`hsl(${gammaHue[cou4]}, ${gammaSat[cou4]     }%, ${  gammaLight [3] +18 }%)`);
					$(tabsContent[i]).children(arrStyleColor[4]).css("background",
						`hsl(${gammaHue[cou5]}, ${gammaSat[cou5]     }%, ${  gammaLight [4] +5 }%)`);
					$(tabsContent[i]).children(arrStyleColor[5]).css("background",
						`hsl(${gammaHue[cou6]}, ${gammaSat[cou6]     }%, ${  gammaLight [5]  }%)`);
					$(tabsContent[i]).children(arrStyleColor[6]).css("background",
						`hsl(${gammaHue[cou7]}, ${gammaSat[cou7]     }%, ${  gammaLight [6]  }%)`);
					$(tabsContent[i]).children(arrStyleColor[7]).css("background",
						`hsl(${gammaHue[cou8]}, ${gammaSat[cou8]     }%, ${  gammaLight [7]   }%)`);
				}

				if (gammaLight[i] == 100) {
					$(tabsContent).children(item).css("background",
						`hsl(${gammaLight[i]}, ${50}%, ${ gammaLight [i]-11}%)`);
				} else if (gammaLight[i] == 0) {
					$(tabsContent).children(item).css("background",
						`hsl(${gammaLight[i]}, ${50}%, ${ gammaLight [i]+11}%)`);
				}
			}

			$('span.active').css('backgroundColor', `hsl(${result[0]}, ${result[1]}%, ${result[2]}%)`);

		});

		return gammaHue, gammaSat, gammaLight;

	}



	// function coloring(callback){
	// 	// let idTabsContent;






	// 	callback(arrStyleColor);
	// };	

	//   else if(tabsContent[1].getAttribute('id') == 'gostinaya'){
	// 	actColorCalc( arrayHueGost, arraySaturGost, arrayLight)

	// 			}
	//    else if(tabsContent[2].getAttribute('id') == 'kitchen'){
	// 	actColorCalc( arraySaturKitch, arraySaturSleep, arrayLight)

	// 	};

	// actColorCalc()

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


	// function test(){
	// 	tabsContent.forEach((item, i) => {
	// 		let span = item.querySelectorAll("span");

	// let	sleepRoom = [

	// 	arryTable_6_Step[ cou1 ],
	// 	arryTable_3_Step[ cou1 ]
	// ];

	// let	gostinaya = [

	// 	arryTable_1_Step[ cou1 ],
	// 	arryTable_2_Step[ cou1 ]
	// ];

	// function getColor(arraySpace){
	// 	counterPlus(arryTable_1_Step);

	// 			span[0].style.background = `${arraySpace[0]}`;
	// 			span[1].style.background = `${arraySpace[1]}`;
	// };

	// 		let idTabsContent = item.getAttribute('id');

	// 		if(tabsBtn[i].classList.contains('active') ){


	// 			if (idTabsContent == 'sleepRoom'){getColor(sleepRoom)}
	// 			else if (idTabsContent == 'gostinaya'){getColor(gostinaya)};


	// 			console.log(idTabsContent);
	// 		};	
	// 	});	
	// }


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
		console.log('plus');
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
		console.log('minus');
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
		return (256 + r).toString(16).substr(1) +((1 << 24) + (g << 16) | (b << 8) | a).toString(16).substr(1);
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

	tabsContent.forEach(function (item) {
		item.addEventListener('mouseover', (e) => {

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
			// }
		});
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
	tabsContent.forEach(function (item) {
		item.addEventListener('touchstart', function (event) {
			event.preventDefault();
			event.stopPropagation();
			initialPoint = event.changedTouches[0];
		}, false);

		item.addEventListener('touchend', function (event) {
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
	});

	

	// ХОРОШАЯ ГАММА 
	// H_2 = H_1 - 100; S_2 = 100;	L_2 =  L_1 + 3;
	// H_3 = H_1 - 180;	S_3 = 32;	L_3 = 14;


	// let colAct = document.querySelector('.color.active');

	// let  coco = RGB2HSL(colAct);

	// coco = `hsl(${4}, ${54}%, ${45}%)`;

	// colActh = 360, s = 100, l = 50

	// let h = 360, s = 100, l = 50 ;

	//   function randomInteger2(min, max, e, r) {
	// 	// случайное число от min до (max+1)
	// 	let rand = min + Math.random() * (max  - min) + (r-e);
	// 	return Math.floor(rand);
	//   }

	// h = randomInteger2(20, 50, 80, 90);


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