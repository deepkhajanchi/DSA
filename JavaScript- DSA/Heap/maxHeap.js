class MinHeap {
    constructor(array) {
      this.heap = this.buildHeap(array);
    }
  
    buildHeap(array) {
      // Write your code here.
  
      //to get parent node in 1D array on Heap representation
      //parentIdx= Math.floor((currentIdx-1)/2);
      let firstParentIdx= Math.floor((array.length -1 -1)/2);
      //iterate from firstParentIdx to rootnode, siftDown all the way to bottom.
      for(let currentIdx= firstParentIdx; currentIdx>= 0; currentIdx--){
          this.siftDown(currentIdx, array.length-1, array);
      }
      return array;
    }
  
  //4th
    siftDown(currentIdx, endIdx, heap) {
      // Write your code here.
      //we need to compare to both child nodes.
      let childOneIdx= ((currentIdx*2)+ 1);
      
      /* we don't want to siftDown the node which is already at the bottom so checking this
         condition. As soon as currentNode doesn't have a child node anymore, break out loop.
        That means we hit very bottom of the heap and no longer anywhere to sift down to
      */
      while(childOneIdx <= endIdx){
       let childTwoIdx= currentIdx*2 +2 <= endIdx ? currentIdx*2 +2: -1;
    
        /*If we have a second child node and the value of child node is the smallest
          of two children vlaues, because it is smaller than the childOneIdx then the child
          node, we compare with the currentnode which is the parent node will be childtwo.
        */
        let idxToSwap;
        if(childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]){
          idxToSwap= childTwoIdx;
        }else{
          idxToSwap= childOneIdx;
        }
        /*
        Now, we have value of idxToSwap, compare it with currentnode which is parenNode.
        Swap them. If currentNode is bigger than children, than we swap them.
        */  
        if(heap[idxToSwap]> heap[currentIdx]){
          this.swap(currentIdx, idxToSwap, heap);
  
          //we have sifted that node at currentIdx down to idxtoSwap.
          currentIdx= idxToSwap;
  
          /*recalculate childOneIdx. So that while loop condition above can get updated
            and recalculated.            
          */
          childOneIdx= ((currentIdx*2) +1);
        }else{
          return;
        }
      }
    }
  
  /* implement 3rd- after remove method.
  This will take two params.
  currentIdx= the index from which you start.
  */
    siftUp(currentIdx, heap) {
      // Write your code here.
      //First get the parent node of the current node.
      let parentIdx= Math.floor((currentIdx-1)/2);
  
      //checking if we are not top of the heap,
      //and check currentnode is smaller than parent node which is out of position for minheap.
      //then swap this two values
      while(currentIdx > 0 && heap[currentIdx] < heap[parentIdx]){
        this.swap(currentIdx, parentIdx, heap);
  
        //since we swap them, current node is now at parent Idx.
        currentIdx= parentIdx;  
  
        //recalculate parentIdx
        parentIdx= Math.floor((currentIdx-1)/2);
      }
    }
  
  //get the root value
    peek() {
      // Write your code here.
      return this.heap[0];
    }
  
  //2nd
    remove() {
      // Write your code here.
      //swap first value and last value first in the heap
      this.swap(0, this.heap.length-1, this.heap);
  
      //pop the value out of heap
      let valueToRemove= this.heap.pop();
  
      //then we want to siftdown the value that we swapped down before 
      //returning the minimum value.
      this.siftDown(0, this.heap.length-1, this.heap);
      return valueToRemove;
    }
  
  //implement insert method 1st. 
    insert(value) {
      // Write your code here.
      //add at the end
      this.heap.push(value);
      this.siftUp(this.heap.length-1, this.heap);//sifting up the last value of heap.
    }
  
    swap(i, j, heap){
      let tmp= heap[j];
      heap[j]= heap[i];
      heap[i]= tmp;
    }
}
  