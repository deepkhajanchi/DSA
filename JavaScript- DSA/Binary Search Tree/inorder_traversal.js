function Node(val, left, right){
    this.val= (val === undefined ? 0 :val);
    this.left= (left === undefined ? null: left);
    this.right= (right === undefined ? null: right); 
}

/*
Algorithm: Recursion
Time: O(n)
Space: O(n)
*/

var inorderTraversal= function(root){
    let res=[];
    helper(root, res);
    function helper(root,res){
        if(root){
            helper(root.left, res);
            res.push(root.val);
            helper(root.right, res);
        }
    }
    return res;
}

/**
 * Algorithm: Stack- iteration
 * Space: O(n)
 * Time: O(n)
 */

var inorderTraversal= function(root){
    let stack= [], res=[];
    while(root || stack.length){
        if(root){
            stack.push(root);
            root= root.left;
        }
        else{
            root= stack.pop();
            res.push(root.val);
            root= root.right;
        }
    }
    return res;
}

var tree3 = new Node(6);
tree3.left = new Node(3);

var tree4 = new Node(5);
tree4.left = new Node(3);
tree4.left.left = new Node(2);
tree4.left.left.left = new Node(1);

var tree5 = new Node(8);
tree5.left = new Node(6);
tree5.right = new Node(9);
tree5.left.left = new Node(5);
tree5.left.right = new Node(7);
tree5.right.right = new Node(10);

var example= inorderTraversal(tree4);
console.log(example);