console.log('this tut on the ajax')

let btn1 = document.getElementById('btn1');

btn1.addEventListener('click',this_is_btn1);

function this_is_btn1(){

   console.log('this btn1 is pressed')

   const xhr = new XMLHttpRequest();

  xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
   /*  xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true)
     xhr.getResponseHeader('content-type','application/json')*/


   xhr.onprogress = function(){
       console.log('on progress');
   }
   xhr.onload = function(){
       if(this.status==200){
           console.log("this is a good way" , this.responseText);
       }
       else
       {
           console.error('this is a an error')
       }
   }

   //let parameter= 	`{"name":"test6673","salary":"123","age":"23"}`;
   //xhr.send(parameter);
   xhr.send()
}
console.log('this is done')

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click',this_is_btn2)
function this_is_btn2(){

    console.log('the btn2 is pressed')

     let xhr = new XMLHttpRequest();
     xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true)

    xhr.onprogress = function()
    {
        console.log('progress on load')
    }
    xhr.onload = function(){
        if(this.status==200){
            let obj = JSON.parse(this.responseText)
            console.log(obj)
            let list = document.getElementById('list')
            str=""
            for(key in obj){
                str+= `<li>${obj[key].employee_name}<li>`;
                
            }
            list.innerHTML=str;
           
        }
        else{
            console.log('this is error')
        }
    }
    xhr.send()

    
        

}


/*on the place of xhr.onload we can previous used xhr.readystate this will t
old the progress values in 5 different stages (google)*/
