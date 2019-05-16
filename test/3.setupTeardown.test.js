let setupTeardownModule = require('../src/setupTeardown')

// beforeEach(()=>{
//     setupTeardownModule.initializeCityDatabase();
// })

// afterEach(()=>{
//     setupTeardownModule.clearCityDatabase();
// })

beforeAll(()=>{
    setupTeardownModule.initializeCityDatabase();
})

afterAll(()=>{
    setupTeardownModule.clearCityDatabase();
})

test('city database has Vienna', () => {
    expect(setupTeardownModule.isCity('Vienna')).toBeTruthy();
});

describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
      return setupTeardownModule.initializeFoodDatabase();
    });
  
    test('Vienna <3 sausage', () => {
      expect(setupTeardownModule.isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });
  
    test('San Juan <3 plantains', () => {
      expect(setupTeardownModule.isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});


// beforeAll(() => console.log('1 - beforeAll'));
// afterAll(() => console.log('1 - afterAll'));
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));
// test('', () => console.log('1 - test'));
// describe('Scoped / Nested block', () => {
//   beforeAll(() => console.log('2 - beforeAll'));
//   afterAll(() => console.log('2 - afterAll'));
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));
//   test('', () => console.log('2 - test'));
// });

// describe('outer', () => {
//     console.log('describe outer-a');
  
//     describe('describe inner 1', () => {
//       console.log('describe inner 1');
//       test('test 1', () => {
//         console.log('test for describe inner 1');
//         expect(true).toEqual(true);
//       });
//     });
  
//     console.log('describe outer-b');
  
//     test('test 1', () => {
//       console.log('test for describe outer');
//       expect(true).toEqual(true);
//     });
  
//     describe('describe inner 2', () => {
//       console.log('describe inner 2');
//       test('test for describe inner 2', () => {
//         console.log('test for describe inner 2');
//         expect(false).toEqual(false);
//       });
//     });
  
//     console.log('describe outer-c');
//   });