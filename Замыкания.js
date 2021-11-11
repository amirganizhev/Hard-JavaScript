function upFunc(a) {
	return function downFunc(b) {
		return (a + b)
	}
}

const mainFunc = upFunc(5);

console.log(mainFunc(10));

/*В переменной mainFunc записана функция upFunc(5), и при вызове 
mainFunc(10) значение в скобках, это значение downFunc(b), т.е. выведет 15, 
так и работают замыкания*/

/*
замыкания - это функция внутри другой функции
*/