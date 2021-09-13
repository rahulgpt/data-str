// Stack using an array (push, pop) --better in case of array

let stack1 = [];
stack1.push('google.com');
stack1.push('instagram');
stack1.push('youtube');

stack1.pop();
stack1.pop();

//----------------
// Stack from beginning (unshift, shift)
let stack = [];

stack.unshift('create new file');
stack.unshift('resize file');
stack.unshift('cloned');

stack.shift();
stack.shift();

//-------------------------
// Stack using SinglyLinkedList

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let stack = new Stack();
