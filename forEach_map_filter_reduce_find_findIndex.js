const myArray = ['Amir', 'Yakow', 'Andrey', 'Nikita']

/*for*/
for (let i = 0; i < myArray.length; i++) {
	console.log(myArray[i])
}

/*for... of*/
for (let variable of myArray) {
	console.log(variable)
}

/*for... in данный цикл нужен для вывода ключей 
(console.log(key)) или значений console.log(obj[key]) 
объекта (ассоциативного массива)*/
const obj = {
	name: 'Amir',
	surname: 'Ginizhev',
	patronymic: 'Ginardonich' 
}

for (let key in obj) {
	console.log(obj[key])
}

/*while цикл с предусловием, вначале 
проверяет условия, потом выполняет тело цикла*/
let i = 0;

while (i < 50) {
	i += 5
	console.log(i)
} 

/*do while цикл с постусловием, вначале
выполняет тело цикла (гарантированно 1 раз),
потом проверяет условия*/
let j = 0;

do {
	console.log(j)
	j += 5
}
while (j < 30)

/*forEach самый главный параметр тут variable, 
остальные по желанию index - индекс элемента,
pAr - массив целиком*/
myArray.forEach(function (variable, index, pArr) {
	console.log(variable)
	console.log(index) 
	console.log(pArr)
}) 

/*map он хорош тем что можно как угодно трансформировать 
данные и заносить ихх в результирующий массив, например:
return variable[0], в этом случае выведет только первые
буквы имен*/
const newPeople = myArray.map(function (variable) {
	return variable
})

console.log(newPeople)

/*filter позволяет отфильтровать массив по определенным
критериям и вывести новый массив*/
const wordLength = myArray.filter(function (variable) {
	if (variable.length <= 4) {
		return true
	}
})

console.log(wordLength)

/*reduce служит для того чтобы мы получили какое то финальное
значение совершив иттерацию (перебор) по какому то массиву.
Описание примера ниже:
1) total - параметр равный цифре в конце, в данном случае 0
2) прибавив к total длину каждого элемента мы выяснили общее
количество букв во всем массиве*/
const amount = myArray.reduce(function (total, variable) {
	return total + variable.length
}, 0)

console.log(amount)

/*find служит для того чтобы по условию найти какой либо элемент*/
const amir = myArray.find(function (variable) {
	return variable === 'Amir'
})

console.log(amir)

/*findIndex работает также как и find, только на выходе получаем
индекс элемента по условию*/
const nikitaIndex = myArray.findIndex(function (variable) {
	return variable === 'Nikita'
})

console.log(nikitaIndex)
