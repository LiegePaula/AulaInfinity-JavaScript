const numbers = [1,2,3,4,5];

numbers.forEach((number, index)=> {
    console.log('o elemento no indice ' + index + ' é ' + number);
})

const numbers1 = [1,2,3,4,5];
const squares = numbers1.map((number1)=>{
    return number1 * number1;
})
console.log(squares); 

const numbers2 = [1,2,3,4,5]
const evenNumber = numbers2.filter((number2)=>{
    return number2 % 2 === 0
});
console.log(evenNumber)

const number3 = [1,2,3,4,5];
const sun = number3.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
})
console.log(sun)

const numbers4 = [1,2,3,4,5]
const hasEvenNumber = numbers4.some((numbers4)=>{
    return numbers4 % 2 ===0
})

console.log(hasEvenNumber)


const numbers6 = [1,2,3,4,5,6];
const firstEvenNumber = numbers6.find((numbers6) =>{ 
return numbers6 %2=== 0});

console.log(firstEvenNumber)


const numbers7 = [2,4,6,8,10];
const allEven = numbers7.every((numbers7) => {
    return numbers7 % 2 === 0;

});
console.log(allEven);