DataStructure = {
  Queue : { }
}

// Queue
DataStructure.Queue = function() {
  // Initialize empty array
  var data = new Array()

  // List all data
  this.all = function() {
    return data
  }

  // enqueue and alias add
  this.enqueue = this.add = function(something) {
    return data.push(something)
  }

  // dequeue and alias remove
  this.dequeue = this.remove = function() {
    if (data.length === 0) {
      throw 'DequeueError: there is nothing to be dequeued.'
    }

    return data.shift()
  }
}
