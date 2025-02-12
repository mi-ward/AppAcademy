class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.data.length === this.length) {
      this.resize();
    }

    this.data[this.length] = val;
    this.length += 1;
  }


  pop() {
    if (this.length === 0) {
      return undefined;
    }

    this.length -= 1;
    let val = this.data[this.length];
    return val;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let val = this.data[0];

    for (let i = 1; i < this.length; i++) {
      this.data[i-1] = this.data[i];
    }

    this.length -= 1
    this.data[this.length] = undefined;

    return val;
  }

  unshift(val) {
    if (this.data.length === this.length) {
      this.resize();
    }

    this.length += 1;

    for (let i = this.length-1; i > 0; i--) {
      this.data[i] = this.data[i-1];
    }

    this.data[0] = val;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity = this.capacity * 2;
    let temp = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      temp[i] = this.data[i];
    }

    this.data = temp;

  }

}


module.exports = DynamicArray;
