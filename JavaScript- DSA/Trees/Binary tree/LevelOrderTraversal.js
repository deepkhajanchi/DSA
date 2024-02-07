/*
Algorithm:
The zero level contains only one node root. The algorithm is simple :
    Initiate queue with a root and start from the level number 0 : level = 0.
    While queue is not empty :
        Start the current level by adding an empty list into output structure levels.
        Compute how many elements should be on the current level : it's a queue length.
        Pop out all these elements from the queue and add them into the current level.
        Push their child nodes into the queue for the next level.
        Go to the next level level++.
O(n)
O(n)
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var levelOrder = function(root) {
    // If root is null return an empty array
    if(!root)   return []
    
    const queue = [root]    //initialize the queue with root
    const levels = []       //output array as levels

    while(queue.length !== 0){
       const queueLength = queue.length // Get the length prior to dequeueing
       const currLevel = [] // Declare this level
       // loop through to exhaust all options and only to include nodes at currLevel
       for(let i = 0; i < queueLength; i++){
           // Get next node
           const current = queue.shift()
           
           if(current.left){
               queue.push(current.left)
           }
           if(current.right){
               queue.push(current.right)
           }
           // After we add left and right for current, we add to currLevel
           currLevel.push(current.val)
       }
       // Level has been finished. Push into output array
       levels.push(currLevel)
   }
    return levels
};

root= new TreeNode(10);
root.left = new TreeNode(8);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(2);

console.log(root);
console.log(postorderTraversal(root));