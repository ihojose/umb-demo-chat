import path from "path";
import express from "express";
import http from "http";
import socketio from "socket.io";
import bodyParser from "body-parser";
import Chats from "./includes/chats.config";

// Iniciamos servidor
const app = express();
const server = http.Server(app);
const io = socketio(server);

// Configuración de visualización
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine('html', require('pug').renderFile);

// Acceso estático
app.use(express.static(path.join(__dirname, 'public')));
app.use('/cdn', express.static(path.join(__dirname, 'node_modules')));

// Rutas y parseo de cuerpo
app.use(bodyParser.json({extended: true, limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use('/', require('./includes/router.config')(io));

// Iniciar servidor
server.listen(8085, () => {
    console.log('Servidor iniciado en el puerto *:8085.');
    console.log('Inicializando Chat.');

    // Iniciar chat
    Chats.startChat(io);
});
