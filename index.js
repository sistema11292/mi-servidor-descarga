const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Esta ruta es la que debes usar en tu app añadiendo /download al final
app.post('/download', (req, res) => {
    console.log("Petición recibida:", req.body);
    res.status(200).json({ message: "Servidor listo para descargar" });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
