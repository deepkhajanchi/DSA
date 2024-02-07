/*
Algorithm:
- left - right - root node
time: O(n)
space: O(n)
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var postorderTraversal = function(root) {
    let stack= [], res = [];
    if(!root)   return res;
    stack.push(root)
    while(root || stack.length){
        let node= stack.pop();
        res.push(node.val);
        if(node.left)   stack.push(node.left);
        if(node.right)  stack.push(node.right);
    }
    return res.reverse();
};

root= new TreeNode(10);
root.left = new TreeNode(8);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(2);

console.log(root);
console.log(postorderTraversal(root));