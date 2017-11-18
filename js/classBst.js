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

module.exports.Bst = Bst

