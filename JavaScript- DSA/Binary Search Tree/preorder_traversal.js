function Node(val, left, right){
    this.val= (val === undefined ? 0 :val);
    this.left= (left === undefined ? null: left);
    this.right= (right === undefined ? null: right); 
}

/**
 * Algo: Iterative DFS Solution
- check if root exists, if not return empty array.
- initialize stack and result array. stack to perform push root, right and left nodes and, pop those values from stack as per requirements and push into result array.
- push root to stack and this is how stack is non-empty. pop root and push it to result.
- push right and left nodes to stack, while popping them left will be pushed into result first. continue this until stack becomes empty.
- return array.
Time Complexity: O(n) 
Space Complexity: O(n)
 */

var preorderTraversal = function(root) {
    if (!root) return [];
    let stack = [], res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return res;
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

var example= preorderTraversal(tree4);
console.log(example);