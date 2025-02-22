const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
      return Number(`0x${sha256(key).slice(0,8)}`);
      
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    let idx = this.hashMod(key)

    if (this.data[idx] !== null) {
      throw Error('hash collision or same key/value pair already exists!');
    }

    this.data[idx] = new KeyValuePair(key, value);
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    let idx = this.hashMod(key)
    let kvp = new KeyValuePair(key, value);

    if (this.data[idx] !== null) {
      kvp.next = this.data[idx];
    }

    this.data[idx] = kvp;
    this.count++;
  }

  insert(key, value) {    
    let idx = this.hashMod(key);
    let kvp = new KeyValuePair(key, value);

    if (this.data[idx] !== null) {
      let node = this.data[idx];
      let inLl = false;
      while (node.next) {
        let next = node.next;
        if (next.key === key) {
          let nodeNext = node.next.next
          kvp.next = nodeNext;
          node.next = kvp
          inLl = true;
        } 
        node = node.next;
    }

    if (inLl !== true) {
      kvp.next = this.data[idx];
      this.data[idx] = kvp
      this.count++;
    }
    } else {
      this.data[idx] = kvp;
      this.count++;
   }
  }
}


module.exports = HashTable;