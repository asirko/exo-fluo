module.exports = function(app) {
    var api = '/api/';
    var data = '/../data/';
    var jsonfileservice = require('../utils/jsonfileservice')();
    var four0four = require('../utils/404')();

    app.get(api + 'recipes', getRecipes);
    app.get(api + '*', four0four.notFoundMiddleware);

    function getRecipes(req, res) {
        var msg = 'Les recettes ne sont pas disponibles ! ';
        try {
            var json = jsonfileservice.getJsonFromFile(data + 'recipes.json');
            if (json) {
                res.send(json);
            } else {
                four0four.send404(req, req, msg);
            }
        }
        catch (ex) {
            four0four.send404(req, res, msg + ex.message);
        }
    }
};
