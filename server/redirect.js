REDIRECT_URL = 'http://phil.rigovanov.ru';

WebApp.connectHandlers
  .use(function(req, res, next) {
    console.log(req.url);
    var location = REDIRECT_URL + req.url;
    res.writeHead(301, {'Location': location});
    res.end();
  });
