class MyLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }
    get(index) {    // O(n)
        if(index >= this.count) {
            return -1;
        }
        let cur= this.head;
        for(let i=0; i<index; i++){
            cur= cur.next;
        }
        return cur.val;
    }
    addAtHead(val) {    // O(1)
        const node = new MyLinkedListNode(val);
        node.next = this.head;
        this.head = node;
        ++this.count;
    }
    addAtTail(val) {    // O(n)
        if(!this.head) {
            this.addAtHead(val);
            return;
        }
        const node = new MyLinkedListNode(val);
        let currNode = this.head;
        while(currNode.next) {
            currNode = currNode.next;
        }
        node.prev = currNode;
        currNode.next = node;
        ++this.count;
    }
    addAtIndex(index, val) {    // O(n)
        if(index > this.count) {
            return;
        } else if(index === 0) {
            this.addAtHead(val);
            return;
        } else if(index === this.count) {
            this.addAtTail(val);
            return;
        }
        const node = new MyLinkedListNode(val);
        let currIdx = 0;
        let currNode = this.head;
        while(currNode && currNode.next && currIdx + 1 < index) {
            currNode = currNode.next;
            ++currIdx;
        }
        node.next = currNode.next;
        node.prev = currNode;
        currNode.next = node;
        if(node.next) {
            node.next.prev = node;    
        }
        ++this.count;
    }
    deleteAtIndex(index) {    // O(n)
        if(index >= this.count) {
            return;
        }
        if(index === 0) {
            this.head = this.head.next;
            --this.count;
            return;
        }
        let currIdx = 0;
        let currNode = this.head;
        while(currNode && currNode.next && currIdx + 1 < index) {
            currNode = currNode.next;
            ++currIdx;
        }
        const nextNode = currNode.next.next;
        currNode.next = nextNode;
        if(nextNode) {
            nextNode.prev = currNode;
        }
        --this.count;
    }
}

let myDoublyList = new DoublyLinkedList(10);

myDoublyList.addAtTail(5);                     // 10 <--> 5

myDoublyList.addAtTail(16);                    // 10 <--> 5 <--> 16

myDoublyList.addAtHead(1);                    // 1 <--> 10 <--> 5 <--> 16

myDoublyList.addAtIndex(2, 99);                 // 1 <--> 10 <--> 99 <--> 5 <--> 16
myDoublyList.addAtIndex(20, 88);                // Invalid index. Current length is 5.
myDoublyList.addAtIndex(5, 80);                 // 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80
myDoublyList.addAtIndex(0, 80);                 // 80 <--> 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80

myDoublyList.deleteAtIndex(0);                     // 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80
myDoublyList.deleteAtIndex(5);                     // 1 <--> 10 <--> 99 <--> 5 <--> 16
myDoublyList.deleteAtIndex(2);                     // 1 <--> 10 <--> 5 <--> 16

console.log(myDoublyList,"2");