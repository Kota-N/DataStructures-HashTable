const MyArray = require('./array');

class HashTable {
  constructor(size) {
    this.data = new MyArray();
    for (let i = 0; i < size; i++) {
      this.data.push(undefined);
    }
  }

  print() {
    const itemsToPrint = new MyArray();
    for (let i = 0; i < this.data.length; i++) {
      this.data.data[i] && itemsToPrint.push(this.data.data[i].data);
    }
    return itemsToPrint.data;
  }

  set(key, value) {
    const setData = new MyArray();
    setData.push(key);
    setData.push(value);

    this.data.data[this._hash(key)] = setData;
    return setData.data;
  }

  get(key) {
    return this.data.data[this._hash(key)].data['1'];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const test = new HashTable(10);
test.set('banana', 'wow');
test.set('apples', 1000);
console.log(test.set('pudding', "that's not a fruit"));
console.log(test.get('apples')); // expected output -> 1000
