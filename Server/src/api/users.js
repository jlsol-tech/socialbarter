const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  
  if(req.body.message == 'test'){
    res.json({message: "test done"})
  }else{
    res.json({message: "test not done"})
  }
});

module.exports = router;
