const request = require('supertest');
const app = require('../src/index');
describe('hello-api-lite', () => {
  it('GET / returns ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
  });
  it('GET /health OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('OK');
  });
});
