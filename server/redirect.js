REDIRECT_URL = 'http://xn--h1aairaz.xn--80adbby7aedl.xn--p1ai';

WebApp.connectHandlers
  .use(function(req, res, next) {
    console.log(req.url);
    var location = REDIRECT_URL + req.url;
    res.writeHead(301, {'Location': location});
    res.end();
  });