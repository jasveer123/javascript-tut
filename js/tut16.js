console.log('this is a tut 16')


//ADD the element in document by javascript

let ele = document.createElement('li')

// add class 

ele.className='mynewclass';
ele.id='mynewid';
ele.setAttribute('title','mytitle');
ele.innerHTML='<h1>this is created my jasveer </h>'
//console.log(ele);


let sel = document.querySelector('ul')
sel.append(ele)
//console.log(sel)


//removing the element
let text='this is a new li';

let yi = document.getElementById('myclass');

yi.replaceWith(text,document.getElementById('myclass2'))
console.log(yi)
