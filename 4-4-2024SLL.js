/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {ListNode} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
        this.data = data;
        /**
         * This property is used to link this node to whichever node is next
         * in the list. By default, this new node is not linked to any other
         * nodes, so the setting / updating of this property will happen sometime
         * after this node is created.
         *
         * @type {ListNode|null}
       */
        this.next = null;
    }
}

/**
   * This class keeps track of the start (head) of the list and to store all the
   * functionality (methods) that each list should have.
   */
class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
        /** @type {ListNode|null} */
        this.head = null;
    }

    /**
     * Determines if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
        //your code here
        let newEnd = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newEnd;
            return this;
        }
        let runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
        }
        runner.next = newEnd;
        return this;
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @param {?ListNode} runner The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackRecursive(data, runner = this.head) {
        if (this.head === null) {
            this.head = new ListNode(data);
            return this;
        }
        if (runner.next === null) {
            runner.next = new ListNode(data);
            return this;
        }
        return this.insertAtBackRecursive(data, runner.next);
    }

    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }

        return arr;
    }

    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data) {

        // check if anything is in the list
        // declare variable for the new node that will be inserted in the front
        // check value of the head at index zero
        // set the .Next of the new ListNode to equal the head of the first node in the list

        let newHead = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newHead;
            return this;
        }
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node or null if no first node.
     */
    removeHead() {
        //Your code here
        if (this.isEmpty()) return null;
        let removed = this.head;
        this.head = this.head.next;
        return removed.data;
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|null} The average of the node's data or null if empty.
     */
    average() {
        //your code here
        if (this.isEmpty()) return null;
        let runner = this.head;
        let count = 0;
        let sum = 0;
        while (runner) {
            count++;
            sum += runner.data;
            runner = runner.next;
        }
        return sum / count;
    }


    /**
     * Determines whether or not the given search value exists in this list iteratively.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
    */
    contains(val) {
        let runner = this.head;
        while (runner) {
            if (runner.data === val) return true;
            runner = runner.next;
        }
        return false;
    }

    /**
     * Determines whether or not the given search value exists in this list recursively.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
    */
    containsRecursive(val, current = this.head) {
        //Your code here
        if (!current) return false;
        if (current.data === val) return true;
        return this.containsRecursive(val, current.next);
    }

    /**
    * Removes the last node of this list.
    * - Time: O(?).
    * - Space: O(?).
    * @returns {any} The data from the node that was removed or null if no nodes were removed.
    */
    removeBack() {
        //Your code here
        if (this.isEmpty()) {
            return null;
        }

        // only one node, remove the head
        if (this.head.next === null) {
            return this.removeHead();
        }
        //more than one node, move to one before the end
        let runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }

        const removedData = runner.next.data;
        runner.next = null;
        return removedData;
    }

    /**
    * Retrieves the data of the second to last node in this list.
    * - Time: O(?).
    * - Space: O(?).
    * @returns {any} The data of the second to last node or null if there is no
    *    second to last node
    */


    secondToLast() {
        //your code here
        if(this.isEmpty() || (this.head.next)) {
            return null;
        }
        if(this.head.data != null && this.head.next === null) {
            return this.head.data;
        }
    }

    /**
    * Removes the node that has the matching given val as it's data.
    * - Time: O(?).
    * - Space: O(?).
    * @param {any} val The value to compare to the node's data to find the
    *    node to be removed.
    * @returns {boolean} Indicates if a node was removed or not.
    */
    removeVal(val) {
        //your code here
    }
}

/******************************************************************* 
 Multiple test lists already constructed to test your methods on.
 Below commented code depends on insertAtBack method to be completed,
 after completing it, uncomment the code.
 */
const emptyList = new SinglyLinkedList();

let testList = new SinglyLinkedList();
testList.insertAtBackMany([10, 8, 12, 5, 15]);

//second to last test:
console.log(testList.secondToLast()) //should be 5

//remove val test:
// testList.removeVal(8);
// testList.removeVal(15);
// testList.removeVal(10);
// console.log(testList.toArr()) // should be [12,15]