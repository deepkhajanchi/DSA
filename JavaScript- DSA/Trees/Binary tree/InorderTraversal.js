/*
Algorithm:
- initialize empty stack and result array.
- if root or stack is not empty
    - push root to the stack. set root as left node.
    
Time:O(n) 
Space:O(n)
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right) 
}

var inorderTraversal = function(root) {
    const stack = [], res = [];
    if(!root)   return res;
    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
};

root= new TreeNode(10);
root.left = new TreeNode(8);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(2);

console.log(root);
console.log(inorderTraversal(root));