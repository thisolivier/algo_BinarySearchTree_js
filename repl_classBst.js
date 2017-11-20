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

Bst.prototype.tallness = (bst) => {
    const recurse = (node) => {
        if (node === null){ return 0 }
        const leftDepth = node.left ? recurse(node.left) : 0
        const rightDepth = node.right ? recurse(node.right) : 0
        return(leftDepth > rightDepth ? leftDepth : rightDepth) + 1
    }
    return recurse(bst.root)
}

Bst.prototype.isBalanced = (bst) => {
    let allGood = true
    const recurse = (node) => {
        if (node === null || allGood == false){ 
            return 0 
        }
        const leftDepth = node.left ? recurse(node.left) : 0
        const rightDepth = node.right ? recurse(node.right) : 0
        if(Math.abs(leftDepth - rightDepth) > 1){
            allGood = false
        }
        return(leftDepth > rightDepth ? leftDepth : rightDepth) + 1
    }
    recurse(myBst.root)
    return allGood
}

let myBst

do {
    myBst = new Bst()
    for (let index = 0; index < 10; index += 1){
        let newNum = Math.floor(Math.random()*300) 
        // Generate negatives too
        if (Math.floor(Math.random()+0.5) == 1){
            newNum *= -1
        }
        myBst.add(newNum, myBst)
    }
} while (!myBst.isBalanced(myBst))


let context = repl.start().context
context.Bst = Bst
context.myBst = myBst