/**
 * CompanyController
 *
 * @description :: Server-side logic for managing companies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var http = require('http');


module.exports = {
	


  /**
   * `CompanyController.create()`
   */
  create: function (req, res) {
    Company.create(req.params.all(),function(err,createResponse){
      if (err) {
        res.send(err,500);
      }
      res.json(createResponse);
    });
  },


  /**
   * `CompanyController.show()`
   */
  show: function (req, res) {
    Company.find(function(err,showResponse){
      if (err) {
        res.send(err,500);
      }


// var options = {
//   host: 'www.google.com',
//   path: '/index.html'
// };


var id=1;
    var options = {
      hostname: 'jsonplaceholder.typicode.com',
      path: '/posts/'+id,
      method: 'GET'
    };

var req = http.get(options, function(res) {
  // console.log('STATUS: ' + res.statusCode);
  // console.log('HEADERS: ' + JSON.stringify(res.headers));
  var bodyChunks = [];
  res.on('data', function(chunk) {
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
  })
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});




      res.json(showResponse);
    });
  },


  /**
   * `CompanyController.update()`
   */
  update: function (req, res) {
    Company.update(req.param('id'),req.params.all(),function(err,updateResponse){
      if (err) {
        res.send(err,500);
      }
      res.json(updateResponse);
    });
  },


  /**
   * `CompanyController.destroy()`
   */
  destroy: function (req, res) {
    Company.destroy(req.param('id'),function(err,destroyResponse){
      if (err) {
        res.send(err,500);
      }
      res.json("value deleted");
    });
  }
};

