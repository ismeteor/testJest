function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);
console.log(mockCallback)
// The mock function is called twice
test("The mock function is called twice",()=>{
    // console.log(mockCallback.mock)
    expect(mockCallback.mock.calls.length).toBe(2);
})

// The first argument of the first call to the function was 0
test("The first argument of the first call to the function was 0",()=>{
    expect(mockCallback.mock.calls[0][0]).toBe(0);
})

// The first argument of the second call to the function was 1
test("The first argument of the second call to the function was 1",()=>{
    expect(mockCallback.mock.calls[1][0]).toBe(1);
})

// The return value of the first call to the function was 42
test("The return value of the first call to the function was 42",()=>{
    expect(mockCallback.mock.results[0].value).toBe(42);
})

// const myMock = jest.fn();

// const a = new myMock();
// const b = {};
// const bound = myMock.bind(b);
// bound();

// console.log(myMock.mock);
// =======


const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());