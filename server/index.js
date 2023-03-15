import cors from 'cors'
import express from 'express'
import { Server } from 'socket.io'
const app = express().listen(3000)
const io = new Server(app)

io.on('connection', (socket) => {
    console.log(`Connected: ${socket.id}`);
    socket.on('disconnect', () =>
        console.log(`Disconnected: ${socket.id}`));
    socket.on('join', (usuarioRecibe) => {
        console.log(`Socket ${socket.id} joining ${usuarioRecibe}`);
        socket.join(usuarioRecibe);
    });
    socket.on('chat', (data) => {
        const { mensaje, usuarioRecibe, usuario } = data;
        // console.log(`mensaje: ${mensaje}, usuarioRecibe: ${usuarioRecibe}, usuario: ${usuario}`);
        let response = {
            'mensaje': mensaje,
            'usuario': usuario
        }
        io.to(usuarioRecibe).emit('chat', response);
    });
    socket.on('dataUser', (data) => {

        const { firstName, lastName, email, password, confirmPassword, id } = data;
        console.log(id)
        io.to(id).emit('dataUser', firstName);
    });

});


