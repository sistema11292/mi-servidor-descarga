const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Esta es la "puerta" que tu aplicación busca
app.post('/download', (req, res) => {
    // Aquí es donde irá la lógica para procesar el link del video
    console.log("Petición recibida:", req.body);
    res.status(200).json({ message: "Servidor listo para descargar" });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
