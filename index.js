function Array() {
    this.items = {};
    this.size = 0;
  
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  
  Array.prototype.push = function(element) {
    this.items[this.size++] = element;
  };
  
  Array.prototype.pop = function() {
    if (this.size === 0) {
      return undefined;
    }
    const popped = this.items[this.size - 1];
    delete this.items[this.size--];
    return popped;
  };
  
  Array.prototype.top = function() {
    return this.items[this.size - 1];
  };
  
  Array.prototype.print = function() {
    console.log(Object.values(this.items).join(","));
  };
  
  Array.prototype.printReverse = function() {
    console.log(Object.values(this.items).reverse().join(","));
  };
  
  Array.prototype.size = function() {
    return this.size;
  };

  
  const myStack = new Array(1, 2, 3);
  myStack.push(4);
  myStack.print(); 
  
  const popped = myStack.pop();
  console.log(popped); 
  
  console.log(myStack.top()); 
  
  myStack.printReverse();
  console.log(myStack.size()); 
  