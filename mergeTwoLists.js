function mergeTwoLists(l1, l2) {
    // Check for null lists
    if (!l1 || !l2) {
        return (l1) ? l1 : l2;
    }
    // Set the main list as the one with the highest first value
    let a = (l1.val <= l2.val) ? l1 : l2;
    let b = (l1.val > l2.val) ? l1 : l2;
    let head = a;

    while (b) {
        // Avoid reading over the end of a
        if (!a.next) {
            a.next = b;
            break;
        }

        if (b.val <= a.next.val) {
            temp = a.next;
            a.next = b;
            b = b.next;
            a.next.next = temp;
        }

        a = a.next;
    }

    return head;
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
    console.log('-------' + name + '-------');
    printList(a);
    printList(b);
    let c = mergeTwoLists(a, b);
    printList(c);
}

test('1', [1,2,3], [2,3,4])
test('2', [8,23,45,56,73,88,99], [2,7,9,34,56,78,90])
test('3', [0], [0])
test('4', [-56, -34, 0, 45, 98], [-234, -7, 9, 45, 34536])
test('5', [], [])
test('6', [1], [])
test('7', [], [4,6])