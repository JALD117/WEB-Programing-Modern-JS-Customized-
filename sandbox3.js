//--------------function declaration---------------------//
function greet ( ){
    console.log('Hello Jose :3');
}
greet();
greet();
greet();

//-------------function expression------------------------//
const speak =  function (){
console.log('Good day José!');
};
speak();

//-------------arguments & parameters----------------------//
const speak1 = function (name = 'José', time= 'Night'){
console.log(`good ${time} ${name}`)
};
speak ();
speak ('Sergio', 'Morning');

//-------------Returning Values---------------------------//

//const speak2 = function (name = 'José', time= 'Night'){
//  console.log(`good ${time} ${name}`)
//  };

const calcArea = function (radius){
    return  3.14 * radius **2;
   
}
const area = calcArea(5);
console.log(area);

//--------Regular function-----------//
const calcArea1 = function (radius1){
    return  3.14 * radius **3;
}

//--------Arrow function-------------//
const calcArea2 = (radius1) =>{
    return  3.14 * radius1 **4;
}
const area1 = calcArea2(5);
console.log('Area is: ',area1);

//---------------Practice Arrow function---------------------//
const greet1= function  ( ){
    return 'Hello José';
}

const greet2 = ()=>'Hello Arrow';
const result =  greet2();
console.log(result);

/*const bill = function (products, tax){
    let total = 0;
    for (let i = 0; i<products.lenght;i++){
        total +=products[i]+products[i]*tax;
    }
    return total;
}
*/
const bill = (products, tax)=>{
    let total = 0;
    for (let i = 0; i<products.lenght;i++){
        total +=products[i]+products[i]*tax;
    }
    return total;
};
console.log(bill([10,15,30],0.2));

const name1 = 'José';

//---------------------Functions-----------------------------//
const greet3 = () => 'Hello :3';
let resultOne = greet3 ();
console.log(resultOne);
//---------------------Methods-------------------------------//
let resultTow = name1.toUpperCase();
console.log(resultTow);

//---------------------CallBacks & foreach-------------------------//
const myFunc = (callBackFunc) =>{
    //do something
    let value = 50;
    callBackFunc(value);
};

myFunc(function(value){
    //do something
        console.log(value);
    });

myFunc(value=>{
//do something
    console.log(value);
});

let people = ['José', 'Sergio', 'Lizeth'];
people.forEach(function(person){
 console.log(person);
});


people.forEach((person,index)=>{
 console.log(index, person);
});

const logPerson = (person,index)=>{
    console.log(`${index}- Hello ${person}`)
}; 
people.forEach(logPerson); 
//----------------Get a references to the 'ul'
const ul = document.querySelector('.persons');
const persons = ['José Alejandro López Doblado', 'Sergio Torres', 'Lizeth Corona'];
let html = '';
persons.forEach(function(person){
    //Create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML= html;