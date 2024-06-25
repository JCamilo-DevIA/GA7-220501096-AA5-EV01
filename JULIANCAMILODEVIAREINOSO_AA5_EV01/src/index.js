// src/index.js

// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Configurar dotenv para manejar variables de entorno
dotenv.config();

// Crear una instancia de Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const authRoutes = require('./routes/auth');

// Usar las rutas
app.use('/api/auth', authRoutes);

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

