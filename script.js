let tampung = [];
let nilai1;
let nilai2;
let operator;
let tombolA = document.querySelectorAll('.tombolA');
let tombolO = document.querySelectorAll('.tombolO');
let outputs = document.querySelector('.output');
let samadengan  = document.querySelector('.samadengan');

// CLEAR
document.querySelector('.clear').addEventListener('click', function() {
	window.location.reload();
});

tombolA.forEach(function(el) {
	el.addEventListener('click', function(e){
		tampung.push(e.target.innerHTML);
		let i = tampung.length - 1;
		let output = document.createTextNode(tampung[i]);
		outputs.appendChild(output);
	});
});

tombolO.forEach(function(el) {
	el.addEventListener('click', function(e) {
		operator = e.target.innerHTML;
		nilai1 = parseFloat(tampung.join(''));
		tampung = [];
		outputs.innerHTML = '';
		document.querySelector('.operator').innerHTML = operator;
	});
});

samadengan.addEventListener('click', function() {
	nilai2 = parseFloat(tampung.join(''));
	tampung = [];
	outputs.innerHTML = '';
	document.querySelector('.operator').innerHTML = samadengan.innerHTML;

		switch(operator) {
			case "+":
				tambah(operator, nilai1, nilai2);
				break;
			case "-":
				kurang(operator, nilai1, nilai2);
				break;
			case "&#247":
				bagi(operator, nilai1, nilai2);
				break;
			case "x":
				kali(operator, nilai1, nilai2);
		}
});

function tambah(operator, operand1, operand2) {
	let hasil = operand1 + operand2;
	if(hasil) {
		outputs.innerHTML = hasil;
	}else {
		outputs.innerHTML = operand1;	
	}
	console.log(hasil);
	return hasil;
}

function kurang(operator, operand1, operand2) {
	let hasil = operand1 + operand2;
	if(hasil) {
		outputs.innerHTML = hasil;
	}else {
		outputs.innerHTML = operand1;	
	}
	console.log(hasil);
	return hasil;
}

function bagi(operator, operand1, operand2) {
	let hasil = operand1 + operand2;
	if(hasil) {
		outputs.innerHTML = hasil;
	}else {
		outputs.innerHTML = operand1;	
	}
	console.log(hasil);
	return hasil;
}

function kali(operator, operand1, operand2) {
	let hasil = operand1 + operand2;
	if(hasil) {
		outputs.innerHTML = hasil;
	}else {
		outputs.innerHTML = operand1;	
	}
	console.log(hasil);
	return hasil;
}