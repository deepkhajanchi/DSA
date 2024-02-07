function ListNode(val,next){
    this.val= (val === undefined ? 0: val);
    this.next= (next === undefined ? null: next);
};

var MyLinkedList= function(){
    this.head= null;
    this.tail= null;
    this.size= 0;
};

MyLinkedList.prototype.get= function(index){
    if(this.size === 0 || index < 0 || index > this.size- 1)    return -1;
    let cur= this.head;
    for(let i=0; i<index; i++){
        cur= cur.next;
    }
    return cur.val;
};

MyLinkedList.prototype.addAtHead= function(val){
    let newNode= new ListNode(val);
    if(!this.head){
        this.head= newNode;
        this.tail= newNode;
    }else{
        newNode.next= this.head;
        this.head= newNode;
    }
    this.size++;
    return this;
};

MyLinkedList.prototype.addAtTail= function(val){
    let newNode= new ListNode(val);
    if(!this.head){
        this.head= newNode;
        this.tail= newNode;
    }else{
       this.tail.next= newNode;
       this.tail= newNode;
    }
    this.size++;
    return this;
};

MyLinkedList.prototype.addAtIndex= function(val,index){
    let newNode= new ListNode(val);
    if (index > this.size) return;
    if(index <= 0){
        return this.addAtHead(val);
    }else if(index === this.size){
        return this.addAtTail(val);
    }

    let cur= this.head;
    for(let i=0; i<index-1; i++){
        cur= cur.next;
    }
    newNode.next= cur.next;
    cur.next= newNode;
    this.size++;

    return this;
}

MyLinkedList.prototype.deleteAtIndex= function(index){
    if(index>= this.size || index <0) return;
    if(index === 0){
        this.head= this.head.next;
        this.size--;
        return this;
    }

    let cur= this.head;
    for(let i=0;i <index-1; i++){
        cur=cur.next;
    }
    cur.next= cur.next.next;
    if(!cur.next){
        this.tail= cur;
    }
    this.size--;
    return this;
};

/*
var snakesAndLadders = function(board) {
    let n = board.length;
  let seen = new Set();
  let queue = [[1, 0]];

  while (queue.length) {
    let [label, step] = queue.shift();
    //console.log(label, step);
    let [r, c] = labelToPosition(label, n);
    //console.log(r, c, n);
    if (board[r][c] !== -1) {
      label = board[r][c];
    }
    if (label == n * n) {
      return step;
    }
    for (let x = 1; x < 7; x++) {
      let nextLabel = label + x;
      if (nextLabel <= n * n && !seen.has(nextLabel)) {
        seen.add(nextLabel);
        queue.push([nextLabel, step + 1]);
      }
    }
  }
  return -1;
};

const labelToPosition = (label, n) => {
  let row = Math.floor((label - 1) / n);
  let col = (label - 1) % n;
  //console.log("label", row, col);
  if (row % 2 === 0) {
    return [n - 1 - row, col];
  } else {
    return [n - 1 - row, n - 1 - col];
  }
};

*/