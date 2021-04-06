class Sort {
  constructor(array) {
    this.array = array;
  }
  sort(array) {
    let pivot = array[0];
    let lessThanArray = [];
    let greaterThanArray = [];
    if (array.length < 2) {
      return array;
    }
    for (let i = 1; i < array.length; i++) {
      if (array[i] > pivot) {
        greaterThanArray.push(array[i]);
      } else {
        lessThanArray.push(array[i]);
      }
    }
    return this.sort(lessThanArray).concat(pivot, this.sort(greaterThanArray));
  }

  returnValue(value) {
    return value;
  }
}

module.exports = Sort;
