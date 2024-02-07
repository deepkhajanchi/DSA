/*
Thought process:
- Nodes are objects that can store own values and reference to the next node. LinkedList is the collection of these nodes where each nodes point to the next node along. 
- We can access any nde in the list if we are given the first node of the list or the head of the list. And then we can traverse down the list to find the node.
- To reverse the list, we need to point a previous node of current node rather than its next node. 

(1) Iterative approach:
- As linkedlist does not keep track of previous node, we need a variable to keep track of previous node. So that we can point current node to the prev node as next node.
- Now, we do not have access to the next node because current node is referencing to its prev node.
- We need another variable to keep track of next node before we overwrite the value of current.next.
- Now, we move to the next node which is saved in a variable and save current node in the variable for prev node for next node to point.
- When current node is null, it is end of the list. And return the head of the list stored in prev variable.

Time: O(n)
- iterate through all n node.
Space: O(1) 
- no extra space needed.
*/

//Iteration

var reverseList= function(head){
    let prevNode= null, currNode= head;
    
    while(currNode){
        let nextNode= currNode.next;    //assign value to nextNode before reversing the list.
        
        currNode.next = prevNode;   //reverse the reference of current node
        prevNode = currNode;        //reassign prevNode as curNode and reassign curNode as nextNode
        currNode = nextNode;        //end of the list, curNode = null and loop stops
    }
    return prevNode;            //last node of the list, which is the head.
}
