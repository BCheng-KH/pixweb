const myForm = document.getElementById('myform');
const myCanvas = document.getElementById('myCanvas');
const pixels = document.getElementById('pixels');
const colorBtn = document.getElementById('check');
const ctx = myCanvas.getContext("2d");
console.log(pixels.innerHTML)
let pixlist = pixels.innerHTML.split(" ");
//let pixlist = ["FFFFFF", "000000", "333333"];
const body = document.querySelector('body');
let themeNum = 6;
let theme = Math.floor(Math.random()*themeNum)
if (theme === 0){
	body.classList.add('grey')
} else if (theme === 1){
	body.classList.add('pink')
} else if (theme === 2){
	body.classList.add('blue')
} else if (theme === 3){
	body.classList.add('aqua')
} else if (theme === 4){
	body.classList.add('almond')
} else if (theme === 5){
	body.classList.add('green')
}

console.log(pixlist);
for(let i = 0; i < pixlist.length; i++){
	console.log(i)
	let x = i%80;
	let y = Math.floor(i/80);
	ctx.fillStyle = ("#"+pixlist[i]).toUpperCase();
	ctx.fillRect(x*10, y*10, 10, 10);
}

colorBtn.addEventListener('click', (e) => {
	e.preventDefault;
	let working2 = true;
	if (255<Number(document.getElementById('red').value)|Number(document.getElementById('red').value)<0){
		working2 = false
	} else if (255<Number(document.getElementById('green').value)|Number(document.getElementById('green').value)<0){
		working2 = false
	} else if (255<Number(document.getElementById('blue').value)|Number(document.getElementById('blue').value)<0){
		working2 = false
	}
	if (working2){
		colorBtn.style.backgroundColor = "rgb("+Number(document.getElementById('red').value)+","+ Number(document.getElementById('green').value)+","+ Number(document.getElementById('blue').value)+")"
		
	}
})

myCanvas.addEventListener('click', (e) => {
	e.preventDefault();
	let rect = myCanvas.getBoundingClientRect();

	document.getElementById('x').value = Math.floor((e.clientX - rect.left - 5)/10)
	document.getElementById('y').value = Math.floor((e.clientY - rect.top - 5)/10)
	if (document.getElementById('x').value < 0){
		document.getElementById('x').value = 0
	} else if (document.getElementById('x').value > 80){
		document.getElementById('x').value = 80
	}
	if (document.getElementById('y').value < 0){
		document.getElementById('y').value = 0
	} else if (document.getElementById('y').value > 80){
		document.getElementById('y').value = 80
	}
	let working = true;
	//console.log(Number(document.getElementById('red').value), Number(document.getElementById('green').value), Number(document.getElementById('blue').value));
	if (255<Number(document.getElementById('red').value)|Number(document.getElementById('red').value)<0){
		working = false
	} else if (255<Number(document.getElementById('green').value)|Number(document.getElementById('green').value)<0){
		working = false
	} else if (255<Number(document.getElementById('blue').value)|Number(document.getElementById('blue').value)<0){
		working = false
	}
	if (working){
		myForm.submit();
		for(let i = 0; i < pixlist.length; i++){
			let x = i%80;
			let y = Math.floor(i/80);
			ctx.fillStyle = ("#"+pixlist[i]).toUpperCase();
			ctx.fillRect(x*10, y*10, 10, 10);
		}
	}

	
	//console.log(document.getElementById('x').value);
});


/*myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
	myForm.submit();
}*/

