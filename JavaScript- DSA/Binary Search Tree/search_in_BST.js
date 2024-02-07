/*
//Recursion-
- var searchBST = function (root, val) {
    
	// We have reached a leaf node
	// This mean's we never found the
	// node we were looking for.
	if (!root) {
		return null;
	}

	// We found the node we're looking for
	// Return it.
	if (root.val === val) {
		return root;
	}

	// The 2 parts below only make sense if you understand
	// Binary Search Trees. It helps if you understand divide and conquer algorithms.
	// Like Binary search.

	// So we know the value we're looking for
	// if greater than the current node, thus
	// the node we're looking for is somewhere on the right tree
	if (val > root.val) {
		return searchBST(root.right, val);
	}

	// So the value we're searching for is less than the current node
	// which means the node we're looking for exists somewhere on
	// the left side.
	if (val < root.val) {
		return searchBST(root.left, val);
	}
};
*/


/*
Algorithm:
- edge case to check null root..
- check if given root has left or right node, if so, return available node(s).
- continue this till the leaf node.
*/

function TreeNode(val,left,right){
    this.val = (val === undefined ? 0: val);
    this.left = (left === undefined ? null: left);
    this.right = (right === undefined ? null: right);
}

var searchBST= function(root, val){
    if(!root)   return null;
    while(root !== null && val !== root.val){
       if(val < root.val)   root= root.left;
       else root= root.right;
    }
    return root;
};
