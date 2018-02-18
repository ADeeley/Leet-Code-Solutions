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
    let sentinel = new ListNode(null),
        head = sentinel,
        num = 0,
        numCpy = 0,
        buffer = [],
        multiplier = 1;

    // Read from list
    while (l1 && l2) {
        num += (l1.val + l2.val) * multiplier;
        multiplier *= 10;
        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1) {
        num += l1.val * multiplier;
        multiplier *= 10;
        l1 = l1.next;
    }

    while (l2) {
        num += l2.val * multiplier;
        multiplier *= 10;
        l2 = l2.next;
    }
    while (num > 0) {
        multiplier /= 10;
        numCpy = num;
        if (numCpy === 0) {
            buffer.push(num);
        } else {
            numCpy = Math.floor(numCpy / multiplier);
            buffer.push(numCpy);
        }
        numCpy *= multiplier;
        num -= numCpy;
    }

    // remove any double digit numbers from array
    if (buffer[0] > 9) {
        let overflow = Math.floor(buffer[0] / 10);
        buffer.unshift(overflow);
        buffer[1] -= overflow * 10;
    }

    buffer.reverse();

    for (let i = 0; i < buffer.length; i++) {
        sentinel.next = new ListNode(buffer[i]);
        sentinel = sentinel.next
    }

    return head.next;
};



let a = new ListNode(9);
a.next = new ListNode(8);
let b = new ListNode(1);

let list = addTwoNumbers(a, b);
while (list) {
    console.log(list.val)
    list = list.next;
}
