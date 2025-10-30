const express = require('express');
const app = express();
const calculadoraRoutes = require('./routes/calculadora');

// Configuració
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/calculadora', calculadoraRoutes);

// Ruta principal redirigeix a la calculadora
app.get('/', (req, res) => {
    res.redirect('/calculadora');
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corrent a http://127.0.0.1:${PORT}`);
});