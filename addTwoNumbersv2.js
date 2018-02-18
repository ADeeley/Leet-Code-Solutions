function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num = 0, 
        sentinel = new ListNode(null),
        head = sentinel,
        numStr = '',
        multiplier = 1;
    while (l1 && l2) {
        num += (l1.val + l2.val) * multiplier;
        l1 = l1.next;
        l2 = l2.next;
        multiplier *= 10;
    }

    while (l1) {
        num += (l1.val) * multiplier;
        l1 = l1.next;
        multiplier *= 10;
    }
    while (l2) {
        num += (l2.val) * multiplier;
        l2 = l2.next;
        multiplier *= 10;
    }

    numStr = String(num);
    let numLen = numStr.length;

    for (i = numLen -1; i >= 0; i--) {
        sentinel.next = new ListNode(+numStr[i]);
        sentinel = sentinel.next;
    }
    return head.next;
};

function createList(arr) {
    let sentinel = new ListNode(null),
        head = sentinel;
    for (let i = 0; i < arr.length; i++) {
        sentinel.next = new ListNode(arr[i]);
        sentinel = sentinel.next;
    }
    return head.next;
}

function printList(list) {
    let str = '',
        delimiter = '->';

    while (list) {
        str += list.val;
        list = list.next;
        if (!list) {
            break;
        }
        str += delimiter;
    }
    console.log(str)
}

function test(arr1, arr2) {
    let a = createList(arr1)
    let b = createList(arr2);
    let c = addTwoNumbers(a, b);
    printList(a);
    printList(b);
    printList(c);
}
test([5,1], [6,8])
test([2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9],
     [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9])