"use strict";

/** ARRAY - MÉTODO MAP */
var arr = [1, 2, 4, 7, 10];
var newArray = arr.map(function (item, index) {
  return item + index;
});
console.log(newArray);
/** END ARRAY - MÉTODO MAP */

/** ARRAY - MÉTODO REDUCE */

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // Reduce: variavel total vai receber o valor total da proxima interação. Estamos usando o array de cima
// Total = 0
// Next = 1
// Total = 1
// Next = 2
// Total = 3
// Next = 4

/** END ARRAY - MÉTODO REDUCE */

/** ARRAY - MÉTODO FILTER */
// Ele sempre vai retornar BOLEANO, nesse caso vai pegar os valores TRUE da condição

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // 2,4,10

/** END ARRAY - MÉTODO FILTER */

/** ARRAY - MÉTODO FIND */
// Ele vai trazer o que voce pedir, ele faz uma pesquisa

var find = arr.find(function (item) {
  return item === 2;
});
console.log(find);
/** END ARRAY - MÉTODO FIND */
