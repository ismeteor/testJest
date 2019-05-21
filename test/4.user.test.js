let axios = require('axios');
let UsersModule = require('../src/user');

axios = jest.fn(axios);

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  // axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))
  return UsersModule.Users.all().then(resp => expect(resp.data).toEqual(users));
});