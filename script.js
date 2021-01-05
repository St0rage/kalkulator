let tampung = [];
let nilai1;
let nilai2;
let operator;
let tombolInput = document.querySelectorAll('.tombolA');
let tombolOperator = document.querySelectorAll('.tombolO');
let outputs = document.querySelector('.output');
let samadengan  = document.querySelector('.samadengan');

// CLEAR
document.querySelector('.clear').addEventListener('click', function() {
	window.location.reload();
});
// DELETE
document.querySelector('.delete').addEventListener('click' ,function() {
	tampung.pop();
	let tampungOutput = outputs.innerHTML.split("");
	tampungOutput.pop();
	let output = tampungOutput.join('');
	outputs.innerHTML = output;
});

tombolInput.forEach(function(el) {
	el.addEventListener('click', function(e){
		tampung.push(e.target.innerHTML);
		let i = tampung.length - 1;
		let output = document.createTextNode(tampung[i]);
		outputs.appendChild(output);
	});
});

tombolOperator.forEach(function(el) {
	el.addEventListener('click', function(e) {
		operator = e.target.innerHTML;
		nilai1 = parseFloat(tampung.join(''));
		if (Number.isNaN(nilai1) == true) {
			nilai1 = 0;
		}
		tampung = [];
		outputs.innerHTML = '';
		document.querySelector('.operator').innerHTML = operator;
		return el;
	});
});

samadengan.addEventListener('click', function() {
	nilai2 = parseFloat(tampung.join(''));
	if (Number.isNaN(nilai2) == true) {
			nilai2 = 0;
		}
	tampung = [];
	outputs.innerHTML = '';
	document.querySelector('.operator').innerHTML = samadengan.innerHTML;

		switch(operator) {
			case "+":
				tambah(nilai1, nilai2);
				break;
			case "-":
				kurang(nilai1, nilai2);
				break;
			case "÷":
				bagi(nilai1, nilai2);
				break;
			case "x":
				kali(nilai1, nilai2);
		}
});

function tambah(operand1, operand2) {
	let hasil = operand1 + operand2;
	outputs.innerHTML = hasil;
	console.log(hasil);
	return hasil;
}

function kurang(operand1, operand2) {
	let hasil = operand1 - operand2;
	outputs.innerHTML = hasil;
	console.log(hasil);
	return hasil;
}

function bagi(operand1, operand2) {
	let hasil = operand1 / operand2;
	outputs.innerHTML = hasil;
	console.log(hasil);
	return hasil;
}

function kali(operand1, operand2) {
	let hasil = operand1 * operand2;
	outputs.innerHTML = hasil;
	console.log(hasil);
	return hasil;
}