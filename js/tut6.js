console.log('tut6');

//string


const name= 'harry';
const harry ='names';
console.log(name+harry);// concatinate


let html;
html= "<h1> this my heading</h>"+"<p> this is my paragraph</p>";
console.log(html)
console.log(html.length)
console.log(html.toUpperCase())
console.log(html.toLowerCase())


console.log(html.indexOf("my"));   

console.log(html.endsWith(">"))//es se khtm hota hai ja nahi
console.log(html.includes("my"))//mojud hai ki nahi
console.log(html.substring(10,14)) //substring
console.log(html.slice(0,3))  //n-1

console.log(html[1])//index

console.log(html.split('<'))//split from the given argument.

console.log(html.replace('my' ,'go'));


let fruit='mango';      //template literal
let fruit2='oragnge';
let myhtml= `hello ${name}
            <h1>this is heading</h>
            <p>this is paragraph</p>
            ${fruit}

`;

document.body.innerHTML = myhtml;