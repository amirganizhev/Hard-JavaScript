let prom = new Promise(function (resolve, reject) {
	console.log('Hello');
	/*говорим нашему промису, что он завершил свое выполнение*/
	resolve();
});
/*Выводится после кода промиса*/
prom.then(function () {
	console.log('world');
});
/*Выводится после кода промиса*/
prom.then(function () {
	console.log('people');
});
/*Выводится при ошибке*/
prom.catch(function () {
	console.log('error');
});
/*Выводится в любом случае (необязательно)*/
prom.finally(function () {
	console.log('final');
});

/*promise позволяет выполнить 
код в .then, после того как он 
будет выполнен в resolve()*/