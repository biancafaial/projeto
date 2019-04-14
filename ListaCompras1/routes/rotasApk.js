module.exports = function(application){
    application.get('/',function(req, res){
     res.send('/home');
    });

    application.get('/minhaLista',function(req, res){
        res.render('listarCompras');
    });
}