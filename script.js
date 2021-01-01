let tampung = [];
let nilai1;
let nilai2;
let operator;
tombolA = document.querySelectorAll('.tombolA');
tombolO = document.querySelectorAll('.tombolO');
samadengan  = document.querySelector('.samadengan');

tombolA.forEach(function(el) {
	el.addEventListener('click', function(e){
		tampung.push(e.target.innerHTML);
	});
});

tombolO.forEach(function(el) {
	el.addEventListener('click', function(e) {
		operator = e.target.innerHTML;
		let tampungg = tampung.slice(0,14);
		nilai1 = parseInt(tampungg.join(''));
		tampung = [];
	})
});