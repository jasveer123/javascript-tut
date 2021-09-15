//call back function

let obj = [{name:'jasveer',lear:'python'}
        ,{name:'navdeep', learn:'javascript'}
    ]

function student_enrolled(){

    setTimeout(function (student) {

        obj.push(student);
        console.log('first box is closed')
        
    }, 1000);



}


function get_student(){

    setTimeout( function () {

      let str ="";
      obj.forEach(function(student){
        
        str+=`<li>${student.name}</li>`
        
      })
      document.getElementById('un').innerHTML=str;
      console.log("2nd box is closed")



        
    }, 5000);


}

let newstudent ={name:'jatin',learn :'machine learning'}

student_enrolled(newstudent);
get_student();


