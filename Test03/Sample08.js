function makerObj(n, k, e) {
    return {
        n:n, 
        k:k,
        e:e,
        s:function() {
            return  this.k + this.e
        },
        output:function() {
            console.log(this.n, this.k, this.e, this.s());  
        }
    }
}

const ar = []

ar.push(makerObj('강아지', 4, 3))
ar.push(makerObj('고양이', 5, 6))
ar.push(makerObj('거북이', 1, 2))

for(let i = 0; i < ar.length; i++) {
    ar[i].output()
}

ar.sort(function(o1, o2) {
    return o1.s() - o2.s()
})

console.log("---------sort------------");


for(let i = 0; i < ar.length; i++) {
    ar[i].output()
}