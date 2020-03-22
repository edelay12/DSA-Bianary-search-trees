const BST = require('./2-BinarySearchTree');


checkHeight = (tree) => {
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
        
        rHeight > lHeight ? console.log('Height: ' +rHeight) : console.log('Height: ' + lHeight);

    }
    this.check(tree)
}

checkHeight(BST);