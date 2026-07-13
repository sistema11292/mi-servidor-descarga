const express = require('express');
const { ytdl } = require('yt-dlp-exec');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/obtener-link', async (req, res) => {
    const { videoUrl } = req.body;
    
    if (!videoUrl) {
        return res.status(400).json({ error: "Falta la URL del video" });
    }

    try {
        const data = await ytdl(videoUrl, {
            dumpSingleJson: true,
            noCheckCertificates: true,
            format: 'best'
        });
        
        res.json({ url: data.url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "No se pudo obtener el enlace" });
    }
});

app.listen(port, () => console.log(`Servidor activo en puerto ${port}`));
