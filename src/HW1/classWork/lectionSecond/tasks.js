//1
///////////////////////////////////
console.log('1 ',typeof function(){});
//2
///////////////////////////////////
console.log('2 ',typeof []);
//3
///////////////////////////////////
console.log('3 ',typeof Array.isArray([]));
//4
///////////////////////////////////
console.log('4 ',typeof null);
//5
///////////////////////////////////
console.log('5 ',typeof NaN);
//6
///////////////////////////////////
console.log('6 ',10);
//7
///////////////////////////////////
console.log('7 ',0xff4cc6);
//8
///////////////////////////////////
console.log('8 ',03645);
//9
///////////////////////////////////
console.log('9 ',012348);
//10
///////////////////////////////////
console.log('10 ',12.45);
//11
///////////////////////////////////
console.log('11 ',.89);
//12
///////////////////////////////////
console.log('12 ',1.24e5);
//13
///////////////////////////////////
console.log('13 ',0/0);
//14
///////////////////////////////////
console.log('14 ',Infinity/Infinity);
//15
///////////////////////////////////
console.log('15 ',Math.sqrt(-10));
//16
///////////////////////////////////
console.log('16 ',NaN==NaN);
//17
///////////////////////////////////
console.log('17 ',1/0);
//18
///////////////////////////////////
console.log('18 ',-1/0);
//19
///////////////////////////////////
console.log('19 ',12.45);
//20
///////////////////////////////////
let number=4000;
console.log('20 ', typeof number);
//21
///////////////////////////////////
let newNumber=new Number(4000);
console.log('21 ', typeof newNumber);
//22
///////////////////////////////////
console.log('22 ', number.toFixed(3));
//23
///////////////////////////////////
console.log('23 ', newNumber.toFixed(3));
//24
///////////////////////////////////
let count=10;
console.log('24 ', ++count);
//25
///////////////////////////////////
console.log('25 ', count);
//26
///////////////////////////////////
console.log('26 ', count++);
//27
///////////////////////////////////
console.log('27 ', count);
//28
///////////////////////////////////
let variable=100;
console.log('28 ', variable+=20);
//29
///////////////////////////////////
let anotherVariable=15;
console.log('29 ', anotherVariable*=5);
//30
///////////////////////////////////
console.log('30 ', 5>10);
//31
///////////////////////////////////
console.log('31 ', 5<10);
//32
///////////////////////////////////
console.log('32 ', 10>=10);
//33
///////////////////////////////////
console.log('33 ', 10===10);
//34
///////////////////////////////////
console.log('34 ', '10'==10);
//35
///////////////////////////////////
console.log('35 ', '10'===10);
//36
///////////////////////////////////
console.log('36 ', 10!==10);
//37
///////////////////////////////////
console.log('37 ', 0.2+0.1);
//38
///////////////////////////////////
console.log('38 ', "string");
//39
///////////////////////////////////
console.log('39 ', 'newString');
//40
///////////////////////////////////
console.log('40 ', `myString`);
//41
///////////////////////////////////
console.log('41 ', "this is my \"string\"");
//42
///////////////////////////////////
let str='new string';
console.log('42 ', str[2]);
//43
///////////////////////////////////
console.log('43 ', 8===10);
//44
///////////////////////////////////
console.log('44 ', !!10);
//45
///////////////////////////////////
console.log('45 ', 5&&10+5);
//46
///////////////////////////////////
console.log('46 ', "my String"||"default");
//47
///////////////////////////////////
console.log('47 ', !8);
//48
///////////////////////////////////
let temp;
console.log('48 ', temp);
//49
///////////////////////////////////
let obj={};
console.log('49 ', obj.property);
//50
///////////////////////////////////
let ar=[1,2,3];
console.log('50 ', ar[3]);
//51
///////////////////////////////////
console.log('51 ', typeof null);
//52
///////////////////////////////////
console.log('52 ', typeof undefined);
//53
///////////////////////////////////
console.log('53 ', null==undefined);
//54
///////////////////////////////////
console.log('54 ', null===undefined);
//55
///////////////////////////////////
let symb=Symbol();
console.log('55 ', symb);
//56
///////////////////////////////////
console.log('56 ', typeof symb);
//57
///////////////////////////////////
let symbol=Symbol('name');
console.log('57 ', symbol);
let anotherSymbol=Symbol('name');
console.log('   ', anotherSymbol);
console.log('   ', symbol===anotherSymbol);
//58
///////////////////////////////////
let symbol1=Symbol.for('name');
console.log('58 ', symbol1);
let name=Symbol.keyFor(symbol1);
console.log('   ', name);
console.log('   ', typeof name);
//59
///////////////////////////////////
let object={
    x:20,
    y:30,
}
console.log('59 ',object.hasOwnProperty('x'))
console.log('   ',object)
delete object.y
console.log('   ',object)
//60
///////////////////////////////////
let newObject=Object.create({
    x:20,
    y:30,
    test:()=>console.log('test'),
})
// let parent={
//     x:20,
//     y:30,
//     test:()=>console.log('test')
// }
// let child=Object.create(parent)
console.log('60 ',newObject.hasOwnProperty('x'))
console.log('   ','x'in newObject)
console.log('   ',newObject)
console.log('   ',newObject.__proto__)
console.log('   ',__proto__)
//61
///////////////////////////////////
const array=['61  q','    w','    e']
for(const key of array)console.log(key)
//62
///////////////////////////////////
function hiName(name) {
    return '62  Hello '+name+'!';
}
console.log(hiName('Anton'))
//63
///////////////////////////////////
let myFunc=function(name) {
    return '63  Hello '+name+'!';
}
console.log(myFunc('Anton'))
//64
///////////////////////////////////
const qwe=()=>{return 'qwe'}
console.log('64 ',qwe)
//65
///////////////////////////////////
let sum=new Function('a,b','return a+b;')
console.log('65 ',sum(1,6))
//66
///////////////////////////////////
setTimeout(function () {
    console.log('66 ','qwe')
},1000)
//67
///////////////////////////////////
function F() {
    console.log('67 ',arguments)
}
F('',1,[],{}) 

