let nextId = 1
const genero_controller = require("../controllers/genero.js")
const estudio_controller = require("../controllers/estudio.js")
const publisher_controller = require("../controllers/publisher.js")

const model = (body, id = nextId++) => {

    if (body.nome != undefined &&
        body.lancado_em != undefined &&
        body.nome != " " &&
        !isNaN(new Date(body.lancado_em).valueOf()) &&
        publisher_controller.show(body.publisher_id) &&
        body.generos_id.every(genero => genero_controller.show(genero.genero_id)) &&
        estudio_controller.show(body.estudio_id)
    ) {
        return {
            id,
            nome: body.nome,
            criado_em: body.criado_em || new Date(),
            lancado_em: new Data(body.lancado_em),
            atualizado_em: new Date(),
            generos_id: body.generos_id,
            publisher: body.publisher_id,
            estudio: body.estudio_id
        }
    }
}

module.exports = model