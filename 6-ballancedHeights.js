const BST = require('./2-BinarySearchTree');


isBalanced = (tree) => {
    let lHeight = 0;
    let rHeight = 0;

    this.check = (tree) => {
        if(!tree || tree.value){
            return;
        } else {
            // check left
            if(tree.left && tree.left.key > tree.key){
                console.log(tree.left)
                this.check(tree.left);
                lHeight++;
            } 


            //check right
            if(tree.right && tree.right.key > tree.key){
                console.log(tree.right)
                this.check(tree.right);
                rHeight++;
            }
        }
        let diff;
        rHeight >= lHeight ? diff = rHeight = lHeight : diff = lHeight - rHeight
        return console.log(diff <=1);
    }
    this.isBalanced(tree);
}

isBalanced(BST);