let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

let decrescente = numbers.sort((a, b)=> b-a); //[25, 12, 8, 7, 6, 5, 5, 3, 2, 1, -2, -4] 
console.log(decrescente); 

let crescente = numbers.sort((a, b)=> a-b); //[-4, -2, 1, 2, 3, 5, 5, 6, 7, 8, 12, 25] 
console.log(crescente);

