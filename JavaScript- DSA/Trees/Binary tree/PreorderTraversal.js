//Preorder traversal
// Iterative DFS Solution
/*

Algo:
- check if root exists, if not return empty array.
- initialize stack and result array. stack to perform push root, right and left nodes and, pop those values from stack as per requirements and push into result array.
- push root to stack and this is how stack is non-empty. pop root and push it to result.
- push right and left nodes to stack, while popping them left will be pushed into result first. continue this until stack becomes empty.
- return array.
Time Complexity: O(n) 
Space Complexity: O(n)

*/

function TreeNode(val,left,right){
    this.val = (val === undefined ? 0: val);
    this.left= (left === undefined ? 0: left);
    this.right= (right === undefined ? 0: right);
}

var preorderTraversal= function(root){
    if(!root) return [];
    let stack= [], res=[];
    stack.push(root);
    while(stack.length > 0){
        let node= stack.pop();
        res.push(node.val);
        if(node.right)  stack.push(node.right);
        if(node.left)   stack.push(node.left);
    }
    return res;
}

root= new TreeNode(10);
root.left = new TreeNode(8);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(2);

console.log(root);
console.log(preorderTraversal(root));
