// 연습

/* 
let obj = {
    kor:0,
    eng:0,
    mat:0,    
    getSum:function() {
        return this.kor + this.eng + this.mat
    }
} 
*/

function score(name, kor, eng, mat) {
    return {
        name:name,
        kor:kor,
        eng:eng,
        mat:mat,
        getSum:function() {
           return this.kor + this.eng + this.mat
        }
    }
}

let student = []
student.push(score('dog', 10, 20, 30))
student.push(score('cat', 60, 40, 80))
student.push(score('tut', 50, 70, 20))

for(let i = 0; i < student.length; i++) {
    student[i].total = student[i].getSum()
}

student.sort(function(std1, std2) {
    return std1.total - std2.total
}) 

console.log('┌───────┬───────┬───────┬───────┬───────┐')
console.log('│'+center('name') + '│' + center('kor') + '│' + center('eng') + '│' + center('mat') + '│' + center('sum') + '│');

for(let i = 0; i < student.length; i++) {
    console.log('├───────┼───────┼───────┼───────┼───────┤')
    console.log("│"+ center(student[i].name) + "│" + center(student[i].kor) + "│" + center(student[i].eng) + "│" + center(student[i].mat) + "│" + center(student[i].total) + "│");
}
console.log('└───────┴───────┴───────┴───────┴───────┘')

console.log('뿌듯ㅎ')

function center(text) {
    text += ""
    for (let i=0; i<(8-text.length)/2;i++) 
        text = " "+text;
    return text+"\t";
}