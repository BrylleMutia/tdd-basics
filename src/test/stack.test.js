class Stack {
   constructor() {
      this.top = -1;
      this.items = {};
   }

   get peek() {
      return this.items[this.top];
   }

   push(value) {
      this.items[++this.top] = value; // add 1 to top index,then set new value
   }

   pop() {
      let removedItem = this.items[this.top];
      this.items[this.top--] = undefined; // remove top value, then subtract 1 from top index

      return removedItem;
   }
}

describe("My stack", () => {
   let stack;
   beforeEach(() => {
      stack = new Stack();
   });

   it("is created empty", () => {
      expect(stack.top).toBe(-1);
      expect(stack.items).toEqual({}); // toBe would fail because it checks if it's the same object in memory
   });

   it("can push to the top", () => {
      stack.push("🍎");
      expect(stack.top).toBe(0);
      expect(stack.peek).toBe("🍎");
   });

   it("can pop off", () => {
      stack.push("🍎");
      expect(stack.top).toBe(0);
      expect(stack.peek).toBe("🍎");

      let item = stack.pop();
      expect(item).toBe("🍎");
      expect(stack.top).toBe(-1);
      expect(stack.peek).toBe(undefined);
   });
});
