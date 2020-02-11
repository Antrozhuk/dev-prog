'use strict'
function NumbString(value){
    let a=value%10,b=value%100,c=Math.trunc(value/100),
    A1 = ['один ', 'два ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять '],
    A2 = ['одиннадцать ', 'двенадцать ', 'тринадцать ', 'четырнадцать ', 'пятнадцать ',
        'шестнадцать ', 'семнадцать ', 'восемнадцать ', 'девятнадцать '],
    A3 = ['десять ', 'двадцать ', 'тридцать ', 'сорок ', 'пятьдесят ',
        'шестьдесят ', 'семьдесят ', 'восемьдесят ', 'девяносто '],
    A4 = ['сто ', 'двести ', 'триста ', 'четыреста ', 'пятьсот ',
        'шестьсот ', 'семьсот ', 'восемьсот ', 'девятьсот '],res=' '; 
    if(value>=100)res+=A4[c-1];
   
        if(b>10 && b<20)res=res+A2[b-11];
        else if(b==10 || b>19)
        {
            res+=A3[Math.trunc(b/10)-1];
            if(a!=0)res=res+A1[a-1]; 
        }
        else if(b<10)  {if(a!=0)res=res+A1[a-1]; }     
    return res;
}
let n=123456789101;
let B=['милиард','милион','тысяч'],res='';
for(let i=0;i<3;i++){
    let k=Math.trunc(n/(10**(3*(3-i)))),s,C;
    if(i<2)
        C=['','a','ов'];
    else 
        C=['а','и',''];
    if(k>0){
        if(k%10==1)s=0;
        if(k%10>1 && k%10<5)s=1;
        if(k%10>4)s=2;
        if(k%100>10 && k%100<20)s=2;
        if(k%10==0)s=2;
        res+=NumbString(k)+B[i];
        res+=C[s];
        n=n%(10**(3*(3-i)));
    }
} 
res+=NumbString(n);
console.log(res);  
