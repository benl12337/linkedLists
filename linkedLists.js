function node (value) {
    this.value = value;
    this.next = null;
}

function linkedList() {
    this.head = null;
    this.tail = null;

    this.append = function (value) {
        const newNode = new node(value);
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.prepend = function (value) {
        const newNode = new node(value);
        newNode.next = this.head;
        this.head = newNode;
    }


    this.traverse = function() {
        let curr = this.head;

        while (curr != null) {
            console.log(curr.value);
            curr = curr.next;
        }
    }

    this.size = function(node) {
        // base case
        if (node == null) return 0;

        return 1 + this.size(node.next);
    }

    this.at = function(node, index) {
        // if index == 0
        if (node == null) return 'aiyaaa';
        if (index == 0) return node.value;

        return this.at(node.next, index - 1);
    }

    this.pop = function() {
       let curr = this.head;
       let prev = null;

       while (curr.next.next != null) {
        curr = curr.next;
        prev = curr;
       }
       prev.next = null;
    }

    this.containsValue = function(value, node) {
        if (node == null) return false;
        if (node.value == value) return true;
        return this.containsValue(value, node.next);
    }

    this.findValue = function(value, node, index) {
        if (node == null) return null;
        if (node.value == value) return index;
        return this.findValue(value, node.next, index + 1);
    }

    this.toString = function(node) {
        if (node == null) return ' null';
        return ` (${node.value}) -> ` + this.toString(node.next);
    }
}



const testList = new linkedList();
const node1 = new node(5);
testList.head = node1;
testList.tail = node1;

testList.append(10);
testList.append(50);
testList.prepend(20);
testList.prepend(1);
testList.append(456);

testList.traverse();
let index = 4;
console.log(`at index ${index} the value is: ` + testList.at(testList.head, index));
testList.pop(testList.head);
testList.traverse();
console.log(testList.containsValue(1, testList.head));
console.log('index found at ' + testList.findValue(5, testList.head, 0));

console.log(testList.toString(testList.head));