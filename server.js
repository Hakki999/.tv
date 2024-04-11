const express = require('express');
const app = express();
const path = require('path');
const ChromecastAPI = require('chromecast-api');
const bodyParser = require('body-parser');




// Defina o diretório onde seus arquivos estão localizados
const frontDirectoryPath = path.join(__dirname, 'front');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware para servir arquivos estáticos
app.use(express.static(frontDirectoryPath));

// Rota para lidar com solicitações GET na raiz do servidor
app.get('/', (req, res) => {
  // Envie o arquivo HTML como resposta
  res.sendFile(path.join(frontDirectoryPath, 'index.html'));
});

app.post("/canal", (req, res) => {
    const url = req.body.urls;
    console.log("url -> "+url);
    
    const client = new ChromecastAPI()
    client.on('device', function (device) {
        device.play(url, function (err) {
          if (!err) console.log('Playing in your chromecast')
        })
      })
    res.redirect("/")
})


app.listen(3000, () => {
  console.log('Servidor está ouvindo na porta 3000');
});
