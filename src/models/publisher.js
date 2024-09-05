let nextId = 1

const model = (body, id = nextId++) => {

    if (body.nome != undefined &&
        body.criado_em != undefined &&
        body.nome != " " &&
        body.criado_em != "" &&
        body.atualizado_em != "" &&
        body.atualizado_em != undefined
    ) {
        return {
            id,
            nome: body.nome,
            criado_em: body.criado_em || new Date(),
            atualizado_em: new Date(),
        }
    }
}

module.exports = model