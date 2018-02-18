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
    let carry = 0,
        head = new ListNode(null),
        sentinel = head,
        p = l1,
        q = l2;

    while (p || q) {
        let x = (p) ? p.val : 0;
        let y = (q) ? q.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        head.next = new ListNode(sum % 10);
        head = head.next;
        p = (p) ? p.next : null;
        q = (q) ? q.next : null;
    }
    if (carry === 1) {
        head.next = new ListNode(1);
    }
    return sentinel.next;
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

function test(name, arr1, arr2) {
    let a = createList(arr1)
    let b = createList(arr2);
    let c = addTwoNumbers(a, b);
    console.log('-------' + name + '-------');
    printList(a);
    printList(b);
    printList(c);
}
test('One', [5,1], [6,8])
test('Two',[2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9],
[5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9])
test('Three', [2, 4, 3], [5])
test('Four', [0], [0])
test('Five', [9,9], [9,9])