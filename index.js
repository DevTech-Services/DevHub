import http from "node:http";
import express from 'express';
import cors from 'cors'
import compression from "compression";
import path from 'node:path';
import url from 'url';

// proxy imports
import { createBareServer } from "@tomphttp/bare-server-node";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet"

const app = express();
const server = http.createServer();
const bareServer = createBareServer("/dhService/");

const port = process.env.PORT || process.argv[2] || 80;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(compression());
app.use(cors())

// serve static files and cache em
app.use(express.static(path.join(__dirname, '/static'), {
    extensions: ['html'],
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', `public, max-age=${60 * 60 * 24 * 1}`) 
    }
}))
app.use('/uv', express.static(uvPath, {
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', `public, max-age=${60 * 60 * 24 * 1}`)
    }
}))

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './static/', '404.html'));
});

server.on("request", (req, res) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeRequest(req, res);
    } else {
        app(req, res);
    }
});

server.on("upgrade", (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

server.on("listening", () => {
    console.log(`DevHub running at localhost:${port}`);
});

server.listen({
    port: port
});