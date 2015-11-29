require('newrelic');

var express = require('express');
var request = require('request');
var app = express();

var youdaoApi = 'http://fanyi.youdao.com/openapi.do?keyfrom=fanyi-node&key=593554388&type=data&doctype=json&version=1.1&q='

app.get('/', function (req, res) {
  var q = req.query.text;

  if (!q || q === '') {
    res.send({
      "response_type": "in_channel",
      "text": "Please use '/translate [phrase]' ."
    });
    return
  }

  var uri = youdaoApi + encodeURIComponent(q);

  request.get(uri, function (err, response, body) {
    var body = JSON.parse(body)

    if (body.translation) {

      var data = {
        "response_type": "in_channel",
        "text": "The translation for " + q + " is " + body.translation + ' .'
      }

      if (body.basic && body.basic.explains) {
        data.attachments = [
          {
            "text": body.basic.explains.reduce(function(a, b) {
              return a + '\n' + b
            }, "")
          }
        ]
      }

      res.send(data);
    } else {
      res.send({
        "response_type": "in_channel",
        "text": "Sorry, I can not find the translation for " + q + '.'
      });
    }
  })
});


var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  var host = server.address().address;

  console.log('Example app listening at http://%s:%s', host, port);
});
