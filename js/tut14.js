//html element selectors
 //sngle and multi elemetent selector 

 
 //single element selector 

 //let ele =document.getElementById('myclass')
//ele=document.getElementsByClassName('map')
//ele=document.childNodes;
//ele=document.parentNodes

//ele.innerHTML=`<p>this is a pararaph</P>`
//ele.style.color="red"

//console.log(ele)

//quary selector

/*let sel = document.querySelector('#myclass')
console.log(sel)
let se= document.querySelector('.map')  //also add tag in the argument 
console.log(se)*/


//multielement selector

let self = document.getElementsByClassName('map')


Array.from(self).forEach(selft=> {    //muti selector

    console.log(selft)
    selft.style.color='red'
    
});
