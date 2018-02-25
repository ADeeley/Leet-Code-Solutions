function mergeTwoLists(l1, l2) {
    let head = new ListNode(null);
    let sentinel = head;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            head.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        head = head.next;
    }

    // Sew on the remaining tail if any remains
    if (l1) {head.next = l1;}
    if (l2) {head.next = l2;}

    return sentinel.next;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}


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
    let c = mergeTwoLists(a, b);
    console.log('-------' + name + '-------');
    printList(a);
    printList(b);
    printList(c);
}

test('1', [1,2,3], [2,3,4])
test('2', [8,23,45,56,73,88,99], [2,7,9,34,56,78,90])
test('3', [0], [0])
test('4', [-56, -34, 0, 45, 98], [-234, -7, 9, 45, 34536])
test('5', [], [])
test('6', [1], [])
test('7', [], [4,6])