/**
 * MonitorController
 *
 * @description :: Server-side logic for managing monitors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `MonitorController.create()`
   */
  create: function (req, res) {
    Monitor.create(req.params.all(),function(err,createResponse){
      if (err) {
        res.send(err,500);
      }
      res.json(createResponse);
    });
  },


  /**
   * `MonitorController.show()`
   */
  show: function (req, res) {
    Monitor.find(function(err,showResponse){
      if (err) {
        res.send(err,500);
      }
      res.json(showResponse);
    });
  },


  /**
   * `MonitorController.update()`
   */
  update: function (req, res) {
    Monitor.update(req.param('id'),req.params.all(),function(err,updatedRescord){
      if (err) {
        res.send(err,500);
      }
      res.json(updatedRescord);
    })
  },


  /**
   * `MonitorController.destroy()`
   */
  destroy: function (req, res) {
    Monitor.destroy(req.param('id'),function(err,deletedRecord){
      if (err) {
        res.send(err,500);
      }
      res.json("value deleted");
    });
  }
};

