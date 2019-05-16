let asyncModule = require("../src/async")

test('the data is peanut butter', () => {
    function callback(data) {
      expect(data).toBe('peanut butter');
    }
    asyncModule.asyncMethod(callback);
});

test('the data is peanut butter', done => {
    function callback(data) {
      expect(data).toBe('peanut butter');
      done();
    }
    asyncModule.asyncMethod(callback);
});


test('the data is peanut butter',()=>{
    return asyncModule.promise().then((data)=>{
        expect(data).toBe('peanut butter');
    })
})

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return asyncModule.rejectPromise().catch(e => expect(e).toMatch('error'));
});

test('the data is peanut butter', async () => {
    expect.assertions(1);
    const data = await asyncModule.promise();
    expect(data).toBe('peanut butter');
});
  
test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await asyncModule.rejectPromise();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('the data is peanut butter', async () => {
    await expect(asyncModule.promise()).resolves.toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    await expect(asyncModule.rejectPromise()).rejects.toMatch('error');
  });