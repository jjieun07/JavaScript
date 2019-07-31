/* 
let str = ''
str += '토끼'

console.log(str);
str += '   '
str += '거북이'

console.log(str);
str += '\n'
str += '호랑이'

console.log(str);
 */

 // 별찍기는 for문 2개만 사용!!!!! (왠만하면)

 // (1) 나
 let num = 11

 let a = num /2 
 let str = ''
 
 for(let i = 0; i < a; i++) {
     let c = num - (i *2 + 1)
    for(let k = 0; k < c; k++) {
        str += ' '
    }
     let b = i * 2 + 1
    for(let j = 0; j < b; j++) {
        str += '* '
    }
    console.log(str);
    str = ''
 }
 for(let i = 1; i <= a; i++) {
     c = i * 2
     for(let k = 0; k < c; k++) {
         str += ' '
     }
    b = num - (i * 2) 
    for(let j = 0; j < b; j++) {
        str += '* '
    }
    console.log(str)
    str = ''
 }

 // (2) 강사님
let str2 = "";
let half = parseInt(num/2);
for (let i=-half; i <= half; i++ ) {
    for (let j=-half; j <= half; j++ ) {
        if (Math.abs(i)+Math.abs(j) <= half)
            str2 += "*";
        else
            str2 += " ";
    }
    str2 += "\n";
}
console.log(str2);

// (3) 자겸오빠
let num3 = 9;
let str3 = "";
let half3 = parseInt(num3/2);
for (let i=0; i<num3; i++) {
    for (let j=0; j<num3; j++) {
        if (j < Math.abs(i-half3))
            str3 += " ";
        else if (j<num3-Math.abs(i-half3))
            str3 += "*";
    }
    str3 += "\n";
}
console.log(str3);


// (4) 3번이랑 동일
let num4 = 5
let str4 = ''
let half4 = parseInt(num4 / 2)

for(let i = 0; i < num4; i++) {
    for(let j = 0; j < num4; j++) {
        if(j < Math.abs(i-half4))
            str4 += ' '
        else if(j < num4 - Math.abs(i-half4))
            str4 += "*"
    }
    str4 += '\n'
}

console.log(str4)
