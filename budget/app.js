/*
 85-292pg
3ch to 6ch
----------------------
85-144 3ch
function method object

best page
97, 124, 126, 128, 132, 134, 137
97 is function
124 is bom
126 is dom
128 is string object

need to work on
best page
 113, 115
113 ps is different ways to create object
115 pg is try to understand this keyword
----------------------
145-182 4ch
decision and loop
----------------------
183-242 5ch
dom

187 is dom tree

best page
188-189
----------------------
243-292 6ch
event

study these chapters for later
8,9,10,12,13
*/
const month_name = ['january','february','march','april','may','june','july','august','september','october','november','december'];
const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

const season = [
    'fall', 
    'winter', 
    'spring', 
    'summer'
];

let today = new Date(); 
let currentmonth = today.getMonth();
let currentyear = today.getFullYear();

console.log(month_name[currentmonth]);
getmonth = document.getElementsByClassName('month')[0]
getmonth.innerHTML = month_name[currentmonth].toUpperCase() +"<br> "+ currentyear;






season === 'spring' && temperature < 70 ? console.log('It\'s spring! The trees are budding!'): 
season === 'winter' && temperature < 65 ? console.log('It\'s winter! Everything is covered in snow.'):
season === 'fall' ? console.log('It\'s fall! Leaves are falling!'): 
season === 'summer' && temperature > 70 ? console.log('It\'s sunny and warm because it\'s summer!'): 
console.log('Invalid season.');

function add() {

    let new1 = document.createElement('p');
    let msg = document.createTextNode('hello world');
    new1.appendChild(msg);
    let main = document.getElementsByClassName('put')[0];
    main.appendChild(new1);
}
function remove(){
    let p = document.getElementsByTagName('p')
    
    p[0].remove();
    

}
const needtoworkon = [document.getElementsByTagName('div'),document.getElementsByTagName('section')]
console.log(needtoworkon);
needtoworkon[0][7].style.border = 'solid red';
console.log(needtoworkon[0][1]);
/* $$$$$$$$--------idea--------$$$$$$$$ */
/*
flash green when diff get low <
flash red when inrease diff >
flash black when same =
*/
/*
function diff(){
    case 0 < 1;
    flash green;
    break;
    case 0 > 1;
    flash red;
    break;
    case 0 = 1;
    black;
    break;
}
*/
function getmoney(){
    let inputNumber = document.getElementsByClassName('money');
    v=0;
        for (let i = 0; i < inputNumber.length; i++) {
            const element = inputNumber[i];
            value = parseFloat(element.value);
            v+=value;   
        }
        
    let answer = document.getElementsByClassName('answer')[0];
    let go = document.getElementsByClassName('go')[0];
    answer.innerHTML = v;
        
        if(v >= 100){
            go.style.cssText = "background:green;"
        }else{
            go.style.cssText = "background:red;"
        }
}



/*
learn how to make table with javascript
function row(how_many) {
    let table = document.getElementsByClassName('test2');
    let tablerow = '<tr><td>hellow<td></tr>'
    for(i=0;i<=how_many;i++){
        tablerow
        console.log(tablerow);
        table[0].innerHTML = tablerow
    }
    
    
}
row(3)
 */