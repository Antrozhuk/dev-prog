'use strict'
let n=5;
let arr=[];
let MaxIndex=0;
function randomInteger(min, max) 
{
    let rand=min-0.5+Math.random()*(max-min+1);
    return Math.round(rand);
}
for(let i=0;i<n;i++) //автозаполнение массива
{
   arr[i]=randomInteger(1,100);
}
console.log("Массив: "+arr);
let max=arr[0];
for(let i=0;i<n;i++)
{
    if(arr[i]>max)//поиск индекса максимального элемента
    {
        max=arr[i];
        MaxIndex=i;
    }
}
console.log(`Индекс максимального элемента ${MaxIndex}`);