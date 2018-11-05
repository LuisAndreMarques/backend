var express = require('express');
var router = express.Router();
var Channel = require('../models/channel');


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/channel',  function (req, res, next) {
    Channel.find({}, function(err, channels) {
        var channelMap = {};
    
        channels.forEach(function(channel) {
            channelMap[channel._id] = channel;
        });
    
        res.send(channelMap);  
      });
    
    //    return res.status(200).json(res);
})




module.exports = router;