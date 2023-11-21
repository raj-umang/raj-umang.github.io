//how to declare a variable
a=10
console.log(a)

var a=10; //can re-declare
let b=20; //can't re-declare 'b' bcoz of let
const c=30; //cant assign any other values to c bcoz of const


//Data types
var i=56;
console.log(typeof(i));

var s='S'
console.log(typeof(s)); //character is considered as string in js


//Null values
var e; //unassigned e = null value kind off
console.log(e);

var f=null; //null value
console.log(f);


//Boolean data type --> True or False
var bol=true;
console.log(typeof(bol));


//Arrays - Collection of Data
l=[];
console.log(typeof(l))  //object

g=[10,20,30,40,50];
console.log(g[2]);
console.log(g[5]); //no value is present so undefined
g[30]=90
console.log(g);

//object in your javascript
var fan={
    numOfBlades : 4 ,
    rpm : 3000 ,
    color : 'blue' ,
    company : 'Toofan',
    motor:{
        company: 'CG',
        power : 50,
        cores : 30
    }
}
console.log(fan);
console.log(fan.color);


//Operators
//Arithmetic
a=9;
b=8;
console.log(a^b)

//Assignment Operator
a=7;
a=a+2;
a +=2;
a*=2;
a/=2;
console.log(a);


//Intemetation
console.log(++a);

//comparison operator
// < , > , == , === , >= , <=
console.log(5 < 4)
console.log(5 > 4)
console.log(5 == 5)
console.log(5 == '5')
console.log(5 === '5')
console.log(5 >= 5)

//Logical operator
// and - && , OR - || , NOT - !

var a = 9;
var o = 5;
console.log((a>o) && (o>3))

if(true){
    console.log('If Block')
}
else{
    console.log('ELSE block')
}

if(false){
    console.log('If Block')
}
else{
    console.log('ELSE block')
}

//example
var num=5;
if(num%2==0){
    console.log('Even No.');
}
else{
    console.log('Odd No.');
}


//Switch case
var key=1;
switch (key) {
    case 1:
        console.log('its one');
        break;
    case 2:
        console.log('its two')
        break;
    default:
        break;
}


//Looping statement
// While  ,  Do While , For Loop

a=[5,6,7,8,9,2,3]
for(k=0;k<a.length;k++){
    console.log(a[k]);
}

