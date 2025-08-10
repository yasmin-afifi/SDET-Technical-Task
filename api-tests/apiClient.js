const request = require('supertest');
const app = require('./mock-user-auth-server');

module.exports = {
  login: (creds) => request(app).post('/api/v1/auth').send(creds),
  createUser: (data) => request(app).post('/api/v1/users').send(data),
  getCurrentUser: (token) => request(app).get('/api/v1/users').set('Authorization', `Bearer ${token}`),
  updateUser: (token, updates) => request(app).patch('/api/v1/users').set('Authorization', `Bearer ${token}`).send(updates),
  deleteUser: (token) => request(app).delete('/api/v1/users').set('Authorization', `Bearer ${token}`),
  deleteAllUsers: (key) => request(app).delete('/api/v1/all-users').send({ key_admin: key })
};