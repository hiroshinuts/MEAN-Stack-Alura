var api = require('../api/grupo');

module.exports = function(app){

    var api = app.api.grupo;

    //passa a função api.lista como parametro
    app.get('/v1/grupos', api.lista);

};
