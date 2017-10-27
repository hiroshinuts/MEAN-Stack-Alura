var api = require('../api/foto');

module.exports = function(app){

    var api = app.api.foto;

    //passa a função api.lista como parametro
    app.get('/v1/fotos', api.lista);

    app.get('/v1/fotos/:id', api.buscaPorId);

};

