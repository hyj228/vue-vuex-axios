var express = require('express');
var router = express.Router();


router.get("/api/test",function(req,res){
  res.json({
    err:0,
    msg:"请求成功"
  })
})



module.exports = router;
