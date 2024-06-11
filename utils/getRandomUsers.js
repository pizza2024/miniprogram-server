const Mock = require('mockjs');
function getRandomUsers(count = 10) {
  const mockdata = Mock.mock({
    [`users|${count}`]: [
      {
        username: '@name',
        email: '@email',
        birthdate: '@date',
      },
    ],
  });
  return mockdata.users;
}
module.exports = getRandomUsers;
