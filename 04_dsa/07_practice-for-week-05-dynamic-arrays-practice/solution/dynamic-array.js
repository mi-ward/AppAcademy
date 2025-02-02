class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);

  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    this.length += 1;

    let temp = this.data;
    this.data = new Array(this.capacity);
    this.data[0] = val;

    for (let i = 0; i < temp.length; i++) {
      this.data[i+1] = temp[i];
    }
  }

}


module.exports = DynamicArray;
