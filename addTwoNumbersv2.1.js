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
    let num = [], 
        sentinel = new ListNode(null),
        head = sentinel;

    while (l1 && l2) {
        num.push(String(l1.val + l2.val));
        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1) {
        num.push(String(l1.val));
        l1 = l1.next;
    }
    while (l2) {
        num.push(String(l2.val));
        l2 = l2.next;
    }

    numLen = num.length;
    for (let i = 0; i < numLen; i++) {
        if (num[i] > 9) {
            if (i + 1 >= numLen) { // end value
                num.push(num[i][0]);
                num[i] = num[i][1];
            } else {
                num[i+1] = String(+num[i][0] + +num[i+1])
                num[i] = num[i][1];
            }
        }
    }

    numLen = num.length;
    num.reverse();
    for (i = numLen -1; i >= 0; i--) {
        sentinel.next = new ListNode(+num[i]);
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
test('Three', [2, 4, 3], [5, 6, 4])