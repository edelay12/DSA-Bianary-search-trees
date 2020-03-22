const BST = require('./2-BinarySearchTree');

checkForBst = (tree) => {
let bstCounter = 0;
let counter = 0;

    this.bstCount = (tree) => {
    if(!tree || !tree.value){
        return;
    } else {
        // check left
        if(tree.left && tree.left.key > tree.key){
            bstCounter++;
            this.bstCount(tree.left);
        } 


        //check right
        if(tree.right && tree.right.key > tree.key){
            bstCounter++;
            this.bstCount(tree.right);
        }
    }
    return bstCounter;
}
    
this.count = (tree) => {
    if(!tree || !tree.value){
        return;
    } else {
        // check left
        if(tree.left){
            counter++ 
            this.count(tree.left);
        } 


        //check right
        if(tree.right){
            counter++ 
            this.count(tree.right);
       }
    }
return counter;
}


console.log(this.bstCount(tree) == this.count(tree));
}

checkForBst(BST)

