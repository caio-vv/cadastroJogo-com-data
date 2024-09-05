const express = require("express");
const publisher_controller = require("../controllers/publisher.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(publisher_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(publisher_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = publisher_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = publisher_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    publisher_controller.destroy(req.params.id)
    res.json()
})

module.exports = router