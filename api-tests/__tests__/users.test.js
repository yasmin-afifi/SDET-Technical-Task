const api = require('../apiClient');
const data = require('../testData');

let token;

beforeAll(async () => {
  const res = await api.login(data.validUser);
  token = res.body.token;
});

describe('Users API', () => {
  test('Get current user', async () => {
    const res = await api.getCurrentUser(token);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('username', data.validUser.username);
  });

  test('Create a new user', async () => {
    const res = await api.createUser(data.newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('username', data.newUser.username);
  });

  test('Update current user', async () => {
    const res = await api.updateUser(token, { password: 'newpass' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('password', 'newpass');
  });

  test('Delete current user', async () => {
    const res = await api.deleteUser(token);
    expect(res.statusCode).toBe(204);
  });

  test('Delete all users with admin key', async () => {
    const res = await api.deleteAllUsers(data.adminKey);
    expect(res.statusCode).toBe(204);
  });

  test('Fail delete all users with wrong key', async () => {
    const res = await api.deleteAllUsers(data.wrongAdminKey);
    expect(res.statusCode).toBe(403);
  });
});