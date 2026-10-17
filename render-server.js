import { createServer } from 'http';
import { handle } from './server/handler.js';

const server = createServer(async (req, res) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const url = new URL(req.url, `${protocol}://${req.headers.host}`);
  
  // Convert Node.js request to Web-standard Request
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
  });

  const response = await handle(request);
  
  if (!response) {
    res.writeHead(404);
    return res.end('Not Found');
  }

  res.writeHead(response.status, Object.fromEntries(response.headers));
  res.end(await response.text());
});

const port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', () => {
  console.log(`API listening on port ${port}`);
});