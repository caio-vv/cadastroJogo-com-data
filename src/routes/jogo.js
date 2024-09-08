const express = require("express");
const jogo_controller = require("../controllers/jogo.js");
const nome_caixa_alta = require("../middlewares/nome_caixa_alta.js");
const router = express.Router();

app.use(express.json());
app.use(nome_caixa_alta);

router.get("/", (req, res) => {
    res.json(jogo_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(jogo_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = jogo_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = jogo_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    jogo_controller.destroy(req.params.id)
    res.json()
})

module.exports = router