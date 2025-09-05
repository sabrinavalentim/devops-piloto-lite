const express = require('express');
const client = require('prom-client');
const app = express();
const port = process.env.PORT || 3000;
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();
app.get('/', (req, res) => res.json({ ok: true, service: 'hello-api-lite', time: new Date().toISOString() }));
app.get('/health', (req, res) => res.send('OK'));
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});
if (require.main === module) { app.listen(port, () => console.log(`hello-api-lite on ${port}`)); }
module.exports = app;
