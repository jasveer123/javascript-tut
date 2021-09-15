console.log('this is tut 17')

//events and events object

let variable;
let doc = document.getElementById('myclass').addEventListener('mouseover', function (e) {
    console.log('you have clicked the heading ')
    // location.href='https://facebook.com/'
    //console.log(e);
   //s variable = e.target;
    //variable = e.target.className;
    //variable = e.target.classList;
    variable = Array.from(e.target.classList);

   // variable= e.offsetX;
   // variable = e.offsetY;

   //variable = e.clientX;
    
    console.log(variable)
})
console.log(doc)
