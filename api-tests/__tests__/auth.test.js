const api = require('../apiClient');
const data = require('../testData');

describe('Auth API', () => {
  test('Login with valid credentials', async () => {
    const res = await api.login(data.validUser);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  test('Login with invalid credentials fails', async () => {
    const res = await api.login(data.invalidUser);
    expect(res.statusCode).toBe(401);
  });
});