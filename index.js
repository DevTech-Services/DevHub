import http from "node:http";
import express from 'express';
import cors from 'cors'
import compression from "compression";
import path from 'node:path';
import url from 'url';

// proxy imports
import wisp from "wisp-server-node";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const app = express()
const server = http.createServer()

const port = process.env.PORT || process.argv[2] || 80
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const middleware = (req, res, next) => {
    res.setHeader('Cache-Control', `public, max-age=${60 * 60 * 2}`) // 2 hour cache controlled from the browser
    next()
};

// enable compression and cors
app.use(compression())
app.use(cors())

app.use('/static', middleware, express.static(path.join(__dirname, '/static'), { extensions: ['html'] }))

// serve proxy files
app.use('/uv/', middleware, express.static(uvPath))
app.use('/epoxy/', middleware, express.static(epoxyPath))
app.use('/baremux/', middleware, express.static(baremuxPath))

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './static/', '404.html'))
});

server.on("request", (req, res) => {
    app(req, res)
});

server.on("upgrade", (req, socket, head) => {
    if (req.url.endsWith("/wisp/")) {
        wisp.routeRequest(req, socket, head)
    } else {
        socket.end()
    }
});

server.on("listening", () => {
    console.log(`DevHub running at localhost:${port}`)
});

server.listen({
    port: port
})