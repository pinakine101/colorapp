// / function generateHslaColors (saturation, lightness, alpha, amount) {
//     // 	let colors = []
//     // 	let huedelta = Math.trunc(360 / amount)
      
//     // 	for (let i = 0; i < amount; i++) {
//     // 	  let hue = i * huedelta
//     // 	  colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`)
//     // 	}
      
//     // 	return colors
//     // };
//     // // });
    
    
//     function setTheme(color) {
//         // Convert hex to RGB first
//         let r = 0,
//           g = 0,
//           b = 0;
//         if (color.length == 4) {
//           r = "0x" + color[1] + color[1];
//           g = "0x" + color[2] + color[2];
//           b = "0x" + color[3] + color[3];
//         } else if (color.length == 7) {
//           r = "0x" + color[1] + color[2];
//           g = "0x" + color[3] + color[4];
//           b = "0x" + color[5] + color[6];
//         }
//         // Then to HSL
//         r /= 255;
//         g /= 255;
//         b /= 255;
//         let cmin = Math.min(r, g, b),
//           cmax = Math.max(r, g, b),
//           delta = cmax - cmin,
//           h = 0,
//           s = 0,
//           l = 0;
      
//         if (delta == 0) h = 0;
//         else if (cmax == r) h = ((g - b) / delta) % 6;
//         else if (cmax == g) h = (b - r) / delta + 2;
//         else h = (r - g) / delta + 4;
      
//         h = Math.round(h * 60);
      
//         if (h < 0) h += 360;
      
//         l = (cmax + cmin) / 2;
//         s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
//         s = +(s * 100).toFixed(1);
//         l = +(l * 100).toFixed(1);
      
//     //    root.style.setProperty(`--primary-color-h`, h);
//     //    root.style.setProperty(`--primary-color-s`, s + "%");
//     //    root.style.setProperty(`--primary-color-l`, l + "%");
      
    
//       };
    
//     //   console.log(setTheme(colors))
    
    
//     let root = document.documentElement;
//     function changeColorLeft (){
        
//         let colAct = document.querySelector('.color.active');
//         // let r = 0,
//         // 	 g =  15,
//         // 	 b = 15;
//         // 	 setTheme(hsl)
//         colAct.root.style.setProperty(' --primary-color--dark',"100%")
        
    
//         // $(colAct).each(function(indx, el){
//         // 	$(el).css("backgroundColor").style.setProperty(' --primary-color--dark', el.target)
//         //   });
//                 // $(colAct).each(function(indx, el){
//                 // 	let  color = root.setProperty(' --primary-color--dark', item);
//                 // 	// let  color = $(el).css("backgroundColor"), [r,g,b] = color.match(/\d+/g);
//                 // 	setTheme();
//                 // 	//  r =+r+ 15;
//                 // 	//  g = +g+ 15;
//                 // 	//  b =+b+ 15;
//                 // 	 colAct.style.backgroundColor = color;
//                     //  colAct.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//                      console.log (colAct);	
//                         };
    
//         // let colAct = document.querySelector('.color.active');
//         // colAct.classList.add('.color4');
//         // console.log(colAct);
    
    
//         // $(function  changeColorLeft(item){
//         // 	$(item).each(function(indx, el){
//         // 		let  color = $(el).css("backgroundColor"), [r,g,b] = color.match(/\d+/g);
//         // 		 r =+r+ 150;
//         // 		 g = +g+ 15;
//         // 		 b =+b+ 15;
//         // 		item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                
//         // 		console.log (item);
//         // 			});
//         //  });
        
//                         // $(item).each(function(indx, el){
                            
//                         // 	let  color = $(el).css("backgroundColor"), [h,s,l] = color.match(/\d+/g);
//                         // 	 h -= 15;
//                         // 	 s = +s+ 15;
//                         // 	 l =+l+ 15;
//                         // 	item.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
//                         // 	rgb2Hsl(color);
//                         // 	console.log (item);
//                         // 		});
    
//     // rgbToHsl();
//     // let	x = 100,
//     // 	y = 50,
//     // 	z = 50;
//     // let = ChangedColor;
//     // ChangedColor = `hsl(${x}, ${y}%, ${z}%)`;
    
//     // let initialPoint;
//     // let finalPoint;
//     // colors.forEach(function (color) {
//     // 	color.addEventListener('touchstart', function (event) {
//     // 		event.preventDefault();
//     // 		event.stopPropagation();
//     // 		initialPoint = event.changedTouches[0];
//     // 	}, false);
    
//     // 	color.addEventListener('touchend', function (event) {
//     // 		event.preventDefault();
//     // 		event.stopPropagation();
//     // 		finalPoint = event.changedTouches[0];
//     // 		var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
//     // 		var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
//     // 		if (xAbs > 10 || yAbs > 10) {
//     // 			if (xAbs > yAbs) {
//     // 				if (finalPoint.pageX < initialPoint.pageX) {
//     // 					console.log('left!');
//     // 				} else {
//     // 					console.log('right!');/*СВАЙП ВПРАВО*/
//     // 				}
//     // 			} else {
//     // 				if (finalPoint.pageY < initialPoint.pageY) {
//     // 					console.log('up!');
//     // 				} else {
//     // 					console.log('down!');
//     // 				}
//     // 			}
//     // 		}
//     // 	}, false);
//     // });