const express = require("express");
const estudio_router = require("./routes/estudio.js");
const genero_router = require("./routes/genero.js");
const jogo_router = require("./routes/jogo.js");
const publisher_router = require("./routes/publisher.js");
const app = express();
const port = 5000;

app.use(express.json());


app.use("/jogo", jogo_router);
app.use("/estudio", estudio_router);
app.use("/genero", genero_router);
app.use("/publisher", publisher_router);

app.listen(port, () => {
    console.log(`Server running in ${port} port`);
  });