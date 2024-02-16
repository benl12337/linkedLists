// node class
class node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    };
}

// linkedList class
class linkedList {
    constructor() {
        this.head = null;
    }

    // append(value) method
    append(key, value) {
        const newNode = new node(key,value);
        if (!this.head) {
            this.head = newNode;
        } else {
          // go to the end of the list
          let curr = this.head;
          while (curr.next != null) {
            curr = curr.next;
          }  
          curr.next = newNode;
        }
    }

    // prepend method, add node to the start of the list
    prepend(key, value) {
        const newNode = new node(key, value);
        if (!this.head) {
            this.append(key, value);
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // size returns the size of the list

    // tail returns the last node in the list
    tail() {
        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        return curr;
    }

    // at(index) returns the node at the given index
    at(index) {
        let curr = this.head;
        let counter = 0;

        while (curr != null) {

            if (counter == index) {
                return curr;
            }
            counter++;
            curr = curr.next;
        }
        return null;
    }

    // pop removes the last element
    pop() {
         let curr = this.head;
         let prev = null;

         while (curr != null) {
            prev = curr;
            curr = curr.next;
         }
         prev.next = null;
    }


    // contains(value) returns true if the value is in the list and false if not
    containsValue(value) {
        
        let curr = this.head;
        while (curr != null) {
            if (curr.key == value) return true;
            curr = curr.next;
        }
        return false
    }
    // find(value) returns the index of the node containing the value or null if not found
    find(value) {
        let index = 0;
        let curr = this.head;
        while (curr != null) {
            if (curr.key == value) return index;
            index++;
            curr = curr.next;
        }
        return null;
    }

    // to string represents the linkedlist as (value) -> (value) -> (value) -> null
    toString() {
        let curr = this.head;
        let nodeString = '';
        while (curr != null) {
            nodeString += `(${curr.key}, ${curr.value}) -> `;
            curr = curr.next;
        }
        nodeString += 'null';

        console.log(nodeString);
    }

    // insertAt(value, index) inserts a new node with the provided value at the given index
    insertAt(key, value, index) {

        if (index == 0) {
            this.prepend(key, value);
            return
        }

        let curr = this.head;
        let prev = null;
        let counter = 0;

        while (counter < index) {
            prev = curr;
            curr = curr.next;
            counter++;
        }

        const newNode = new node(key, value);
        prev.next = newNode;
        newNode.next = curr;
    }

    // removeAt(index) removes the node at the given index
    removeAt(index) {
        if (index == 0) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        let prev = null;
        let counter = 0;

        while (counter < index) {
            prev = curr;
            curr = curr.next;
            counter++;
        }
        prev.next = curr.next;
    }
}

const newList = new linkedList();