import express from 'express';
import consign from 'consign';

const app = express();

consign({
    cwd: __dirname // usa la direccion del archivo actual
})
    .include('libs/config.js') // Config BBDD
    .then('db.js')              // Config conexion y modelos que uso de la BBDD
    .then('libs/middlewares.js')   // Conf express
    .then('routes')                 // Rutas express
    .then('libs/boot.js')   // Creo las tablas e inicio el servidor
    .into(app); // Todos necesitan express, asi que lo paso a todos los modulos



