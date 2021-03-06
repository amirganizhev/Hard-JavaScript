/*Запрос 1*/
async function f1() {
	const res = await fetch('ссылка_на_сервер_1')
	console.log(res);
}

/*Запрос 2*/
async function f2() {
	const res = await fetch('ссылка_на_сервер_2')
	console.log(res);
}     

/*Запрос 3*/
async function f3() {
	const res = await fetch('ссылка_на_сервер_3')
	console.log(res);
}

/*Оберточная функция*/
async function go() {
	let a = await f1();
	console.log(a);
	let b = await f2();
	console.log(b);
	let c = await f3();
	console.log(c);
}

/*если у нас данные с сервера зависимы друг от друга 
(например в одном запросе список, а другой запрос 
использует этот список), то мы используем async await, 
для того чтобы функции с ajax запросами запускались 
в том порядке который нам нужен. 
Синтаксис следующий:
1) Перед функцией с запросом мы пишем async; 
2) Сам запрос внутри функции нужно нужно обернуть 
либо в функцию либо в переменную и написать перед 
ним await: const res = await fetch('ссылка_на_сервер_1');
3) после того как мы завернули все запросы как указано выше,
нужно создать отдельную оберточную функцию и в ней разместить 
функцию запросы в том порядке вызова какой нам нужен;
*/