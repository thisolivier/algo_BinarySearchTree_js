const repl = require('repl');

class Bst{
    constructor(){
        this.root = null
    }
}

Bst.prototype.node = (val) => {
    const newNode = {
        val: val,
        left: null,
        right: null
    }
    return newNode
}

Bst.prototype.add = (val, bst) => {
    const newNode = bst.node(val)
    if (!bst.root){
        bst.root = newNode
        return
    }
    let curr = bst.root, done = false
    while (!done){
        let testDirection = val < curr.val ? "left" : "right"
        if (curr[testDirection]){
            curr = curr[testDirection]
        } else {
            curr[testDirection] = newNode
            done = true
        }
    }
    return bst
}

let myBst = new Bst()

for (let index = 0; index < 20; index += 1){
    let newNum = Math.floor(Math.random()*300) 
    if (Math.floor(Math.random()+0.5) == 1){
        newNum *= -1
    }
    myBst.add(newNum, myBst)
}

let context = repl.start().context
context.Bst = Bst
context.myBst = myBst