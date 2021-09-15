console.log('this is a tut no 27')

//oject literals, object and constructor

let obj ={

    'student':'name',
    'age':45,
    marks:function(){
        console.log('he gave no marks');
    }


}

function obj2(name1,age2,marks2){
     
    this.name=name1;
    this.age=age2;
    this.marks=function(){
        console.log(`he will give marks ${marks2}`)
    }


}

obj1 = new obj2('jasveer',21,90);
console.log(obj1);