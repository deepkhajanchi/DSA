
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val) 
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/*
Algorithm:
- left - right - root node
time: O(n)
space: O(n)
*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let stack= [], res = [];
    if(!root)   return res;
    stack.push(root)
    while(root>0 || stack.length>0){
        let node= stack.pop();
        res.push(node.val);
        if(node.left)   stack.push(node.left);
        if(node.right)  stack.push(node.right);
    }
    return res.reverse();
};

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

var example= postorderTraversal(tree4);
console.log(example);