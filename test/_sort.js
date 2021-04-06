const Sort = require("../src/Sort");
const { expect } = require("chai");
//const { describe } = require("mocha");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should return a sorted array", () => {
    let array = [7, 2, 6, 5, 3, 9];
    let newArray = new Sort(array);
    expect(newArray.sort(array)).to.deep.equal([2, 3, 5, 6, 7, 9]);
    let array1 = [5, 2, 6, 5, 3, 1];
    let newArray1 = new Sort(array1);
    expect(newArray1.sort(array1)).to.deep.equal([1, 2, 3, 5, 5, 6]);
  });
  it("should have a sort method", () => {
    let array = [7, 2, 6, 5, 3, 9];
    let newArray = new Sort(array);
    expect(newArray.sort).to.be.a("function");
  });
});
