console.log('this is tut 20')

//local and session storage
let imarray = ['jasveer','jaswinder','nardiner'];

localStorage.setItem('harry','panku');
localStorage.setItem('kalu','jasveer')
let y = localStorage.setItem('din', JSON.stringify(imarray)); // JASON create string to array



let ree = localStorage.getItem('harry');
let tii = localStorage.getItem('kalu')
let yy = JSON.parse(localStorage.getItem('din'));

console.log(ree)
console.log(tii)
console.log(yy)

