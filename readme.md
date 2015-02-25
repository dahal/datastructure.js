DataStructures implementations in Javascript
---


### Queue
```javascript
var queue = new DataStructure.Queue

console.log(queue.all())          // []
queue.enqueue(1)
console.log(queue.all())          // [1]
queue.enqueue(2)
console.log(queue.all())          // [1, 2]
queue.add(3)
console.log(queue.all())          // [1, 2, 3]
console.log(queue.all().length)   // 3

queue.dequeue()                     // 1
console.log(queue.all())          // [2, 3]
queue.remove()                      // 2
console.log(queue.all())          // [3]
queue.dequeue()                     // 3
queue.all()                       // []
queue.dequeue()                   // Uncaught DequeueError: there is nothing to be dequeued.
queue.remove()                    // Uncaught DequeueError: there is nothing to be dequeued.
```