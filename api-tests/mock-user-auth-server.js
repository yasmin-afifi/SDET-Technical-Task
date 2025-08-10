const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let users = [
  { id: 1, username: 'john_doe', password: 'password123' },
  { id: 2, username: 'jane_doe', password: 'securepass' }
];

const ADMIN_KEY = 'admin123';
let tokenStore = {}; // { username: token }

// Generate token (simple)
const generateToken = (username) => `${username}-token`;

// POST /api/v1/auth - login
app.post('/api/v1/auth', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = generateToken(username);
  tokenStore[username] = token;
  res.json({ token });
});

// POST /api/v1/users - create user
app.post('/api/v1/users', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Missing fields' });
  if (users.find(u => u.username === username)) return res.status(409).json({ message: 'User exists' });

  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  res.status(201).json(newUser);
});

// GET /api/v1/users - get current user
app.get('/api/v1/users', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Missing token' });

  const token = authHeader.split(' ')[1];
  const username = Object.keys(tokenStore).find(u => tokenStore[u] === token);
  if (!username) return res.status(401).json({ message: 'Invalid token' });

  const user = users.find(u => u.username === username);
  res.json(user);
});

// PATCH /api/v1/users - update user
app.patch('/api/v1/users', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Missing token' });

  const token = authHeader.split(' ')[1];
  const username = Object.keys(tokenStore).find(u => tokenStore[u] === token);
  if (!username) return res.status(401).json({ message: 'Invalid token' });

  let user = users.find(u => u.username === username);
  Object.assign(user, req.body);
  res.json(user);
});

// DELETE /api/v1/users - delete current user
app.delete('/api/v1/users', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Missing token' });

  const token = authHeader.split(' ')[1];
  const username = Object.keys(tokenStore).find(u => tokenStore[u] === token);
  if (!username) return res.status(401).json({ message: 'Invalid token' });

  users = users.filter(u => u.username !== username);
  delete tokenStore[username];
  res.status(204).send();
});

// DELETE /api/v1/all-users - admin delete
app.delete('/api/v1/all-users', (req, res) => {
  const { key_admin } = req.body;
  if (key_admin !== ADMIN_KEY) return res.status(403).json({ message: 'Forbidden' });

  users = [];
  tokenStore = {};
  res.status(204).send();
});

module.exports = app;